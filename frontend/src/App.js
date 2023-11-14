import React, { Component } from 'react';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Aside from '../src/components/Aside';
import Article from './components/Article';
import Top_Destination from './components/Top_Destination';
import Blogs from './components/Blogs';
import Member from './components/Member';
import Content from './components/Content';
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
                    {/* <div className="container-fluid row">
                        <Aside />
                        <Article />
                    </div>
                    <section className="destination">
                        <Top_Destination />
                        <Blogs />
                    </section>
                    <section className="content">
                        <Content />
                    </section>
                    <section className="testimonial">
                        <Member />
                    </section> */}
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

