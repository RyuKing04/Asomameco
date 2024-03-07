import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/login'; 


function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
