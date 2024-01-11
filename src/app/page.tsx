import Header from "@/components/Header";
import "../styles/index.scss";
import Presentation from "@/components/Presentation";
import Products from "@/components/Products";
import Contact from "@/components/Contact";


const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Products />
      <Contact />
    </>
  )
}

export default Home