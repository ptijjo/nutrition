import Header from "@/components/Header";
import "../styles/index.scss";
import Presentation from "@/components/Presentation";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Resultats from "@/components/Resultats";
import Reseau from "@/components/Reseau";


const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Presentation />
      <Resultats />
      <Products />
      <Contact />
    </>
  )
}

export default Home