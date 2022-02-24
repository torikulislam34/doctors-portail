import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import ApoinmentBanner from '../ApoinmentBanner/ApoinmentBnner';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
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
           <Blogs></Blogs>
           <Doctors></Doctors>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;