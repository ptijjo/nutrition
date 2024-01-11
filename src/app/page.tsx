import Header from "@/components/Header";
import "../styles/index.scss";
import Presentation from "@/components/Presentation";
import Products from "@/components/Products";


const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Products/>
    </>
  )
}

export default Home