import './App.css';
import './styles.css'
import Nav from './Components/Nav';
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard';
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'



function App() {

  return (
    <>
    <Nav /> 
  <Route exact path='/'>
    <Landing />
  </Route>
  <Route path='/dashboard'>
    <Dashboard />
  </Route>
</>
  

  );
}

export default App;
