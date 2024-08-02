import React from 'react';
import './Coin.css';

function Coin({ result }) {
  const imgSrc = result === 'heads' ? process.env.PUBLIC_URL + '/heads.jpg' : process.env.PUBLIC_URL + '/tails.jpg';

  return (
    <div className="Coin">
      <img src={imgSrc} alt={result} />
    </div>
  );
}

export default Coin;
