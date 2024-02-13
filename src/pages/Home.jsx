import React from 'react'
import Navbar from '../components/Navbar'
import Principal from '../components/Home/Principal/Principal'
import Lenguages from '../components/Home/Lenguages/Lenguages'
import Developer from '../components/Developer/Developer'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
        <Navbar />
        <Principal />
        <Lenguages />
        <Developer />
        <Footer />
        </>
    )
}

export default Home