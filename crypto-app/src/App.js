// App.js
import React, { useState, useEffect } from 'react';
import CryptoTable from './CryptoTable';
import './App.css';

const App = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        setCryptos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>CryptoApp</h1>
      <CryptoTable cryptos={cryptos} />
    </div>
  );
};

export default App;
