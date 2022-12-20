import './App.css';
import React, {useState,useEffect} from 'react'

function App() {
  
  const [users,setUser] = useState([]);
  const [title,setTitle] = useState('Hello world :)');
  
  function click(){
    setTitle('Good Bye.');

  }

  function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUser(json))

  }
  useEffect(()=>{
    getData();  }
    ,[]);

  return (
    <div class='container'>
    <h1><br></br>{title}</h1>
    <button type="button" class="btn btn-success" onClick={click}>On click</button>

  
    <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">name</th>
      <th scope="col">user</th>
      <th scope="col">street</th>
    </tr>
    </thead>
    <tbody>
    {users.map((user)=>(
      <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.address.street}</td>
    </tr>
    ))}
       </tbody>
    </table>
    </div>

  );
}

export default App;
