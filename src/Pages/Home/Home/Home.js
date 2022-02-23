import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import ApoinmentBanner from '../ApoinmentBanner/ApoinmentBnner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../Footer/Footer';
import InfoCart from '../InfoCart/InfoCart';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <InfoCart></InfoCart>
            <Services></Services>
            <Exceptional></Exceptional>
           <ApoinmentBanner></ApoinmentBanner>
           <Testmonial></Testmonial>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;