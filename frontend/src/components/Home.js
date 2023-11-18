import React, { useEffect } from "react";
import Aside from "./Aside/Aside.js";
import TopDestination from "./TopDestination";
import Blogs from "./Blog/Blogs.js";
import Content from "./Content";
import Header from "./Header/Header.js";
import Member from "./Member";
import ArticleMap from "./Article/ArticleMap.js";
import ArticleAds from "./Article/ArticleAds.js";
import Aos from "aos";
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <div className="App-header">
                <Header />
            </div>
            <div className="container-fluid row">
                <Aside />
                <ArticleMap />
                <ArticleAds />
            </div>
            <section className="destination">
                <TopDestination />
                <Blogs />
            </section>
            <section className="content" data-aos="fade-left"
                data-aos-offset="500">
                <Content />
            </section>
            <section className="testimonial" data-aos="zoom-out-up">
                <Member />
            </section>
        </>
    )

}
export default Home;