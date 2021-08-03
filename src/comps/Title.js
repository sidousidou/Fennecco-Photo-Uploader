import React from 'react';
import FenneccoLogo from '../img/LogoF.png';

const Title = () => {
  return (
    <div className="title">
      <img src={FenneccoLogo} alt="Fennecco Logo" ></img>
      <h1>Fennecco Photos</h1>
      <h2>My Pictures</h2>
      <p>This is my Fennecco profile pictures, just enjoy them !!!</p>
    </div>
  )
}

export default Title;