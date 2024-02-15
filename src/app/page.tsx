
import * as React from "react";
//import Header from "@/components/Header";
import "../styles/index.scss";
import Presentation from "@/components/Presentation";
//import Products from "@/components/Products";
//import Contact from "@/components/Contact";
//import Resultats from "@/components/Resultats";

import Reseau from "@/components/Reseau";

import dynamic from 'next/dynamic'
 
// Client Components:
const Header = dynamic(() => import('@/components/Header'))
const Products = dynamic(() => import('@/components/Products'))
const Resultats = dynamic(() => import('@/components/Resultats'))
const Contact = dynamic(() => import('@/components/Contact'))

const Home: React.FC = () => {


  return (
    <main>
      <Reseau />
      <Presentation />
      <Resultats />
      <Products />
      <Contact />
    </main>
  )
}

export default Home