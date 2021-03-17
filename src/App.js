import {useEffect, useState} from 'react'
import './App.css';
import BalanceSheet from './BalanceSheet';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
    .then(r => r.json())
    .then(data => {
      let sortedData = data.sort((a,b) => {
        return parseFloat(a.minPaymentPercentage) - parseFloat(b.minPaymentPercentage)
    })
      setData(sortedData)
    })
  },[])  

  const handleAdd = () => {
    let newList = [...data, {id: data.length+1 ,creditorName: "Chase", balance: 500}]
    setData(newList)
  }
  const handleRemove = () => {
    let newList = data.slice(0,data.length-1)
    setData(newList)
  }
  let total = data.reduce((acc,b) => acc + b.balance,0)

  return (
    <div className="App">
     <BalanceSheet data={data}  />
     <button onClick={handleAdd} >Add Debt</button> 
      <button onClick={handleRemove}>Remove Debt</button>
      {data.length > 0 ? 
      <div>
        Total : {total}
      </div> : null
}
<div>
  Total Row Count: {data.length} 
  <br/>
  Checked Row Count: 
</div>
    </div>
  );
}

export default App;