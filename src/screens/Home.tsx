import React from 'react'
import Carousel from '../components/Carousel'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'
import Card from '../components/Card'
import Examinations from "../components/Examinations";
import MiniCarousel from "../components/MiniCarousel";

const Home = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <Carousel />
            <Examinations />
            <MiniCarousel />
            <Card />
            <Faq />
            <Subscribe />
        </div>
    );
};

export default Home;
