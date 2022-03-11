import React from "react";
import Header from "./header/header";
import Nav from "./nav/nav";
import About from "./about/about";
import Experience from './Experience/Experience'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Footer from "./Footer/Footer"
export default function App(){
return(
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
)
}