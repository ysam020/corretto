import React, {useEffect} from "react";
import "./styles/Home.css";
import HomeBanner from "./components/home-page-components/HomeBanner";
import HomeSection2 from "./components/home-page-components/HomeSection2";
import TheCoffeeHeraldComponent from "./components/home-page-components/TheCoffeeHeraldComponent";
import HomeCounterComponent from "./components/home-page-components/HomeCounterComponent";
import HomeCoffeeShopComponent from './components/home-page-components/HomeCoffeeShopComponent'
import OurDeliciousOfferComponent from "./components/home-page-components/OurDeliciousOfferComponent";
import HomeContactComponent from "./components/home-page-components/HomeContactComponent";
import FooterComponent from "./components/common-components/FooterComponent";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Home  - Corretto';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <HomeBanner />
      <HomeSection2 />
      <TheCoffeeHeraldComponent />
      <HomeCounterComponent />
      <HomeCoffeeShopComponent />
      <OurDeliciousOfferComponent />
      <HomeContactComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
