import './UserStocks.css';
import axios from 'axios'
import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function UserStocks(props) {
  const [data,setdata]=useState({'value':'none'})
  const [sname,Changesname]=useState('AAPL')
  function listChnageHandler(e){
    Changesname(e.target.value)
  }

  useEffect (()=>{
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/getuserstocks',
      data: {
        id: id
      },
      headers: {'Content-Type': 'application/json'}
    }).then( (res) =>{setdata(res.data)})

  })
function onClickDelete(e){
  console.log("THIS IS THE VALUE")
  console.log(id,e.target.value)
  axios({
    method: 'POST',
    url: 'http://127.0.0.1:5000/deleteuserstocks',
    data: {
      id: id,
      symbol:e.target.value
    },
    headers: {'Content-Type': 'application/json'}
  }).then( (res) => {
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/getuserstocks',
      data: {
        id: id
      },
      headers: {'Content-Type': 'application/json'}
    }).then( (res) =>{setdata(res.data)})

    }
  )
  

}

function onSubmithandler(e){
  axios({
    method: 'POST',
    url: 'http://127.0.0.1:5000/addstock',
    data: {
      id: id,
      symbol:sname
    },
    headers: {'Content-Type': 'application/json'}
  })
  .then (
     (res) => {
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000/getuserstocks',
        data: {
          id: id
        },
        headers: {'Content-Type': 'application/json'}
      }).then( (res) =>{setdata(res.data)})
     } 
  )
  e.preventDefault()
}
//console.log(data)


const location = useLocation();
const id = location.state;
// console.log(id)
    
if (data.value==='none'){
return ( 
<div>waiting for data retrival</div>)
  }
else
    


  return (
    <div >


<table className='table table-hover'>
        <thead>
            <tr>
                <th>Stock Name</th>
                <th>Last Traded Price</th>
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
        { Object.keys(data).map(function(key, index) {
          return(
  

       
        
            <tr key ={key}>
                <td>{key}</td>
                <td>{data[key].price}</td>
                <td><button 
                className='btn btn-outline-danger'
                value ={key} 
                onClick= {onClickDelete}>Delete</button></td>
            </tr>
           
        
          )
        })
        
}
</tbody>
</table>






      <form onSubmit={onSubmithandler} className='form-group'>
      <label htmlFor="stock-names"><h1>Add more stocks:</h1></label>
      <select onChange={listChnageHandler} className='form-select  mb-3' name="stock-names" id="stock-names">
      <option value="AAPL">Apple Inc</option>
      <option value="AAT">American Assets Trust, Inc</option>
      <option value="TCS">Container Store Group Inc-The</option>
      <option value="MSFT">Microsoft Corporation</option>
      <option value="GOOG">Alphabet Inc Class A</option>
      <option value="JPM">JPMorgan Chase and Co</option>
      <option value="SPX">S and P 500</option>
      </select>
      <button type='submit' className='btn btn-outline-warning'>add stock</button>
      </form>

     
    </div>
  );
}

export default UserStocks;