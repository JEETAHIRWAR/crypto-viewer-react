// CryptoTableRow.js
import React from 'react';


const CryptoTableRow = ({ crypto }) => {

    const priceChangeColor = crypto.price_change_percentage_24h < 1 ? 'red' : 'green';

    return (
        <tr>
            <td className="crypto-info">
                <img src={crypto.image} alt={crypto.name} style={{ width: '30px' }} />
                {crypto.name}
            </td>            {/* <td>{crypto.name}</td> */}
            <td>{crypto.symbol.toUpperCase()}</td>
            <td>${crypto.current_price.toFixed(2)}</td>
            <td>${crypto.total_volume.toLocaleString()}</td>
            <td style={{ color: priceChangeColor }}>{crypto.price_change_percentage_24h.toFixed(2)}%</td>
            <td>${crypto.market_cap}</td>
        </tr>
    );
};

export default CryptoTableRow;
