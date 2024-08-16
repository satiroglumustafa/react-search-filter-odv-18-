
import { useState } from 'react';
import './App.css';
import { users } from "./users.js";
import CustomTable from './CustomTable.jsx';
 

function App() {


  const [query,setQuery] = useState('')

  const keys = ["first_name","last_name","email"]

  const search = (data)=>{
    return data.filter(item=> keys.some( (key)=> item[key].toLowerCase().includes(query)))
  }
 

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <input type='text' className='search' placeholder='Search...' onChange={ event=> setQuery(event.target.value) }></input>
          <CustomTable  data={search(users)}></CustomTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
