import React, { Component } from 'react';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import './style/style.scss'
import { Outlet } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Nav />
                    <Header />
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
}

export default App;

