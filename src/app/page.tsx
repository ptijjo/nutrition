"use client"
import * as React from "react";
import Header from "@/components/Header";
import "../styles/index.scss";
import Presentation from "@/components/Presentation";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Resultats from "@/components/Resultats";
import Footer from "@/components/Footer";
import Reseau from "@/components/Reseau";
import ScrollReveal from 'scrollreveal';


const Home: React.FC = () => {
  const initScrollReveal = () => {
    ScrollReveal().reveal('.presentation', {
      duration: 1000,
      //easing: 'ease-in-out',
      //reset: true,
    });

    ScrollReveal().reveal('.resultats', {
      // Options de configuration
      duration: 1000,
      //easing: 'ease-in-out',
      //reset: true,
      delay: 500
    });

    ScrollReveal().reveal('.products', {
      // Options de configuration
      duration: 1000,
      //easing: 'ease-in-out',
      //reset: true,
      delay: 500
    });

    ScrollReveal().reveal('.contact', {
      // Options de configuration
      duration: 1000,
      //easing: 'ease-in-out',
      //reset: true,
      delay: 500
    });
  };

  // Appel de la fonction d'initialisation dans le cycle de vie de votre composant
  React.useEffect(() => {
    initScrollReveal();
  }, []);


  return (
    <>
      <Header />
      <Reseau />
      <Presentation />
      <Resultats />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default Home