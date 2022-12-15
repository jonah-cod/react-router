import React, { lazy, Suspense, useState, useTransition } from 'react'
import './App.css';
import { Link, Outlet } from "react-router-dom"

const Admin = lazy(()=> import('./components/defaultadmin'));

function App() {
  const [admin, setadmin] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleAdmin =()=>{
    startTransition(()=>{
      setadmin(!admin)
    }) 
  }
  return (
    <div className="App">
      <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/invoices'>Invoices</Link>
        <Link to='/expenses'>Expenses</Link>
      </div>
      <button onClick={handleAdmin} 
        style={{padding: "10px 30px", fontSize: "1.2rem", margin:"10px"}}>login</button>
        {isPending? <i>loading...</i>: ""}

      <Suspense fallback={<h6>loading...</h6>}>
        {admin? <Admin />: <h4>You are not an admin</h4>}
      </Suspense>
      
      <div className="container">
        <Suspense fallback={<h2>loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
