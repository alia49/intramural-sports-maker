import React, { useState } from 'react'; // Import the useState hook from the react package
import './App.css';
import { Login } from "./Login"; // Import the Login component
import { Register } from "./Register"; // Import the Register component
import { LandingPage } from "./LandingPage"; // Import the LandingPage component
import { Questionare } from "./Questionare"; // Import the LandingPage component
import { CreateTeam } from './CreateTeam'; // Import the CreateTeam component
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'; // Import the BrowserRouter, Route, and Switch components from the react-router-dom package

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/landingpage" element={<LandingPage/>} />
          <Route path="/questionare" element={<Questionare/>} />
          <Route path="/createteam" element={<CreateTeam/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>

      
    </div>
  );
}
/*
  {
        currentForm === "login" && <Login onFormSwitch={toggleForm} />
      }
      {
        currentForm === "register" && <Register onFormSwitch={toggleForm} />
      }
      {
        currentForm === "landing" && <LandingPage onFormSwitch={toggleForm} />
      }
      <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route path="/landingpage" element={<LandingPage onFormSwitch={toggleForm} />} />
        </Switch>
*/

export default App;