import React from "react";

function Coin({ name, icon, symbol }) {
  return (
    <>
      <h1>{name}</h1>
      <img src={icon} alt="icon" />
      <h3>{symbol}</h3>
      {/* <h3>{icon}</h3> */}
    </>
  );
}

export default Coin;
