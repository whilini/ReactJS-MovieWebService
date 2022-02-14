import { useState, useEffect } from "react";

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json.slice(0, 100));
        setLoading(false);
      });
  }, []);
  const [dollar, setDollar] = useState();
  const [changes, setChanges] = useState();
  const onChange = (event) => {
    setChanges(parseFloat(event.target.value));
  };
  const onCoinChange = (event) => {
    const price = parseFloat(event.target.value);
    setDollar(changes / price);
  };
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onCoinChange}>
        {coins.map((coin, idx) => (
          <option key={idx} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <div style={{ display: "flex" }}>
        <div>USD</div>
        <input
          type='number'
          placeholder='input USD you have...'
          onChange={onChange}
        />
      </div>
      <div>{dollar} coin</div>
    </div>
  );
};

export default CoinTracker;
