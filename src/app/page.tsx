
import "../styles/index.scss";
import Presentation from "@/components/Presentation";
import Reseau from "@/components/Reseau";
import dynamic from 'next/dynamic'
 
// Client Components:

const Products = dynamic(() => import('@/components/Products'))
const Resultats = dynamic(() => import('@/components/Resultats'))
const Contact = dynamic(() => import('@/components/Contact'))

const Home = () => {


  return (
    <main className="main">
      <Reseau />
      <Presentation />
      <Resultats />
      <Products />
      <Contact />
    </main>
  )
}

export default Home