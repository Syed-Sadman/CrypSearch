import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";
function DataCoin() {
  const [coinInfo, setCoinInfo] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&").then(
      (response) => {
        setCoinInfo(response.data.coins);
      }
    );

    return () => {};
  }, []);

  const filterSearch = coinInfo.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Bitcoin...."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        Coin name
        <div>
          {filterSearch.map((coin) => {
            return (
              <Coin name={coin.name} icon={coin.icon} symbol={coin.symbol} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DataCoin;
