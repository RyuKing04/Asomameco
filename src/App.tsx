import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/login'; 

function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
        <Switch>
          <Route path="/login" Component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
