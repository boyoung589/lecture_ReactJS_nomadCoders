import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins]= useState([])

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers?limit=100')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
  }, [])
  return (
    <div className="App">
      <h1>The Coins!</h1>
      {loading ? <strong>loading...</strong> : null }
      <ul>
        {coins.map((coin) => <li>{coin.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
