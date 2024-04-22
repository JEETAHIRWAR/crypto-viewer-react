// CryptoTable.js
import React from 'react';
import CryptoTableRow from './CryptoTableRow';

const CryptoTable = ({ cryptos }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="crypto-info">Name</th>
                    {/* <th>Name</th> */}
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Total Volume</th>
                    <th>Price Percentage (24h)</th>
                    <th>Mkt Capital</th>

                </tr>
            </thead>
            <tbody>
                {cryptos.map((crypto, index) => (
                    <CryptoTableRow key={index} crypto={crypto} />
                ))}
            </tbody>
        </table>
    );
};

export default CryptoTable;
