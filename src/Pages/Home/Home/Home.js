import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import AddReview from '../../AddReview/AddReview';
import Services from '../Services/Services';
import Gallary from '../../Gallary/Gallary';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <AddReview></AddReview>
            <Gallary></Gallary>
            <Footer></Footer>
        </div>
    );
};

export default Home;