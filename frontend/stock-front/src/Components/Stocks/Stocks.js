
import './Stocks.css';
import axios from 'axios'
import { useState ,useEffect} from 'react';

function Stocks() {
var [users,setUser] = useState({})

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/stock/all/')
    .then((response)=>{setUser(response.data)})
    
}, [])
console.log(users)

    
    

if (Object.keys(users).length==0){
    return (<div>Waiting for update</div>)
  }

else



  return (
    <div className="stock-table">
      <table>
        <thead>
            <tr>
                <th>Stock Name</th>
                <th>Last Traded Price</th>
            </tr>
          </thead>
          <tbody>
        { Object.keys(users).map(function(key, index) {
          return(
  

       
        
            <tr key ={key}>
                <td>{key}</td>
                <td>{users[key]}</td>
            </tr>
           
        
          )
        })
        
}
</tbody>
</table>

     
    </div>
  );
}

export default Stocks;
