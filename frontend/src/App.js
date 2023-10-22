import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Aside from '../src/components/Aside';
import Article from './components/Article';
import Top_Destination from './components/Top_Destination';
import Blogs from './components/Blogs';
import Member from './components/Member';
import Content from './components/Content';
import Hellovd from './components/Hellovd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="App-header">
                        <Nav />
                        <Header />
                    </div>
                    <div className="App-body">
                        <div className="container-fluid row">
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
                        </section>
                    </div >
                    <div className="App-footer">
                        <Footer />
                    </div>
                </div >

            </BrowserRouter>
        );
    }
}

export default App;

