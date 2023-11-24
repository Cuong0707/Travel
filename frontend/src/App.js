
import React from 'react';
import Nav from '../src/components/Nav';
import Footer from './components/Footer/Footer';
import './style/Main/style.scss'
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Nav />
      </div>
      <div className="App-body">
        <Outlet></Outlet>
      </div >
      <div className="App-footer">
        <Footer />
      </div>
    </div >
  );
}

export default App;
