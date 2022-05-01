
import './SearchStock.css';
import { useState} from 'react'
import axios from 'axios'
import Graph from '../Graph/Graph';
function SearchStock() {
  const [sname,Changesname]=useState('AAPL')
  const [data,Changedata] = useState({})
  const [open , setOpenData] = useState([])
  const [close , setCloseData]  = useState([])

  const [high , setHighData] = useState([])
  const [low , setLowData]  = useState([])

  const [date , setDate]  = useState([])

  function onSubmithandler(e){
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/stock',
      data: {
        symbol: sname
      },
      headers: {'Content-Type': 'application/json'}
    }).then((res)=>{Changedata(res.data)})
    
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/gettimedata',
      data: {
        symbol: sname
      },
      headers: {'Content-Type': 'application/json'}
    }).then((res)=>{setOpenData(res.data.open) ; setCloseData(res.data.close); 
    setLowData(res.data.low);
    setHighData(res.data.high);
    setDate(res.data.date)
    })
    // console.log(open) ;
    // console.log(close);
  }
  
  function listChnageHandler(e){
    Changesname(e.target.value)
  }

  
  if(Object.keys(data).length===0)


  return (
    <div className="searchstock-page">
        <form onSubmit={onSubmithandler} className='form-group'>
      <label htmlFor="stock-names"><h1>Select stocks:</h1></label>
      <select onChange={listChnageHandler} className='form-select  mb-3' name="stock-names" id="stock-names">
      <option value="AAPL">Apple Inc</option>
      <option value="AAT">American Assets Trust, Inc</option>
      <option value="TCS">Container Store Group Inc-The</option>
      <option value="MSFT">Microsoft Corporation</option>
      <option value="GOOG">Alphabet Inc Class A</option>
      <option value="JPM">JPMorgan Chase and Co</option>
      <option value="SPX">S and P 500</option>
      </select>
      <button type='submit' className='btn btn-outline-warning'>Search</button>
      </form>

     
    </div>
  );
  else{
    return(
    <>
    <table className='table table-hover allstocks'>
            <thead>
              <tr>
                <th>AttributeS</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>Name</td>
              <td>{data['name']}</td>
            
            </tr>
            <tr>
              <td>Closing Price</td>
              <td>{data['close']}</td>
            
            </tr>
            <tr>
              <td>Currency</td>
              <td>{data['currency']}</td>
            
            </tr>
            <tr>
              <td>Exchange</td>
              <td>{data['exchange']}</td>
            
            </tr>
            <tr>
              <td>Symbol</td>
              <td>{data['symbol']}</td>
            
            </tr>
            <tr>
              <td>Volume</td>
              <td>{data['volume']}</td>
            
            </tr>
            <tr>
              <td>Previous_Plose</td>
              <td>{data['previous_close']}</td>
            
            </tr>
            </tbody>
    </table>
    <Graph open = {open} close = {close} high={high} low= {low} date={date}/>
    </>
    )
  }
}

export default SearchStock;
