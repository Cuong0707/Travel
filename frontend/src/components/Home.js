import React, { useEffect } from "react";
import Aside from "./Aside";
import TopDestination from "./TopDestination";
import Blogs from "./Blogs";
import Content from "./Content";
import Header from "./Header";
import Member from "./Member";
import ArticleMap from "./ArticleMap";
import ArticleAds from "./ArticleAds";
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
            <section className="destination" data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine">
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