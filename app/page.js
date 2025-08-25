
import Image from "next/image";
import Contents from "./Components/Contents";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="mt-16">
    <Header/>
  </div>
      <Contents/>
      <Footer/>
      


    </>
  );
}
