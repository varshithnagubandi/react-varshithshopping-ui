import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import { Gents, Ladies } from "../data";
import Womencollection from "../components/Womencollection";

const MainPage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setLadiesFashion] = useState(Ladies);
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <Womencollection girlsFashion={ladiesFashion} />
      <Footer />
    </div>
  );
};

export default MainPage;
