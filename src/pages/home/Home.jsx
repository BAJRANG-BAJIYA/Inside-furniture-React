import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import MailList from '../../components/MailList/MailList';
import Banner from '../../components/banner/Banner';

const Home = () => {
  return (
    <div className='Home'>
    <NewsLetter/>
    <Navbar />
    <Banner/>
    <MailList/>
    <Footer />
    
    </div>
  )
}

export default Home