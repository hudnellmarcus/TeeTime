import './App.css';
import './styles.scss'
import Nav from './Components/Nav';
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard';
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { auth } from './services/firebase'



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
  return () => {
    unsubscribe(); 
  };
  }, []);

  return (
    <>
      <Nav user={user} />
      <div className='container'>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </div>
    </>


  );
}

export default App;
