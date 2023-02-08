import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Main() {
  const [coinData,setCoinData] = useState([])
  useEffect(()=>{
    axios.get(" https://api.coingecko.com/api/v3/coins/").then((res)=>{
      setCoinData(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  
  return (
    <div>
      <h4 className='text-center h1'>CRYPTO COINS WEBSITE</h4>
      <table className='table mt-5'>
        <thead>
          <tr className=' h3'>
            <th>S#</th>
            <th>coin id </th>
            <th>symbol</th>
            <th>coin name</th>
            <th>Current Prize in USD</th>
            <th>Prize change in 1 day</th>
            <th>Prize change in 7 days</th>
            <th>Prize change in 1 year</th>



          </tr>
        </thead>
        <tbody>
          {coinData.map((item,index)=>{
           return(
            <tr>
              <td>{index+1}</td>
              <td>{item.id}</td>
              <td>{item.symbol}</td>
              <td>{item.name}</td>
              <td>{item.market_data.current_price.usd}</td>
              <td>{item.market_data.price_change_24h}</td>
              <td>{item.market_data.price_change_percentage_7d}</td>
              <td>{item.market_data.price_change_percentage_1y}</td>



            </tr>
           ) 
          })}
        </tbody>
        
      </table>

    </div>
  )
}

export default Main