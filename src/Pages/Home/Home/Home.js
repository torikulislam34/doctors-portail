import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import ApoinmentBanner from '../ApoinmentBanner/ApoinmentBnner';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Services></Services>
            <Exceptional></Exceptional>
           <ApoinmentBanner></ApoinmentBanner>
           <Testmonial></Testmonial>
        </div>
    );
};

export default Home;