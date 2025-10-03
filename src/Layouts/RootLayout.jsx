import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import { useParams } from "react-router-dom";

export default function RootLayout() {
  const { params } = useParams();
  console.log(params);
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
    </>
  )
}