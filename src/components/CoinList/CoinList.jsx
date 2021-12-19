//rccp
import React, { useState } from 'react';
import Coin from "../Coin/Coin";
import styled from 'styled-components';

const Table = styled.table`
font-size: 1rem;
background-color: #000000;
`;

const TradeInput = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 2px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
background-color: #35393f;
color: white;
`


// rewrite coinlist component into functional component

function CoinList(props) {

  const [search, setSearch] = useState("");


  const filteredCoins = props.coinData.filter(coin => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ));



  const handleCoinsChange = (e) => {
    setSearch(e.target.value);
  };



  return (
    <>
     <div class="container-fluid">
     <br />
      <br />
      <form className="d-flex">
        <input className="form-control me-sm-2"
          type="text"
          placeholder="Search Coins"
          onChange={handleCoinsChange}
        />
      </form>
      <br />
      <br />
      <Table className="table table-hover">
        <thead>
          <tr class="table-active">
            <th></th>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            <th>Change 24h</th>
            {props.showBalance ? <th>Balance</th> : null}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            //distructured version - recommended; more explicit
            filteredCoins.map(({ key, name, ticker, image, price, balance, rank, circulatingSupply,
              totalSupply, maxSupply, volume, marketCap, priceChange24h, percentChange24h, description }) =>
              <Coin key={key}
                handleRefresh={props.handleRefresh}
                handleBuy={props.handleBuy}
                handleSell={props.handleSell}
                buyInputValue={props.buyInputValue}
                setBuyInputValue={props.setBuyInputValue}
                name={name}
                ticker={ticker}
                image={image}
                showBalance={props.showBalance}
                balance={balance}
                price={price}
                tickerId={key}
                rank={rank}
                circulatingSupply={circulatingSupply}
                maxSupply={maxSupply}
                totalSupply={totalSupply}
                volume={volume}
                marketCap={marketCap}
                priceChange24h={priceChange24h}
                percentChange24h={percentChange24h}
                description={description}
                insufficientUsdBalMessage={props.insufficientUsdBalMessage}
                setInsufficientUsdBalMessage={props.setInsufficientUsdBalMessage}
                insufficientTokenBalMessage={props.insufficientTokenBalMessage}
                setInsufficientTokenBalMessage={props.setInsufficientTokenBalMessage}
                isBuy={props.isBuy}
                setIsBuy={props.setIsBuy}
                isSold={props.isSold}
                setIsSold={props.setIsSold}
              />
            )
          }
        </tbody>
      </Table>

     </div>
     
    </>


  )

}

export default CoinList;