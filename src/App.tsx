import React from "react";
import {
  Banner,
  Tabs,
  Benefits,
  Starbusiness,
  Order,
  Useful,
  CallUs,
  Footer,
} from "./components";
import "./App.css";
import { animateScroll } from "react-scroll";

function App() {
  const orderRef: any = React.useRef(null);

  const scrollToOrderRef = () => {
    console.log(orderRef);
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };

  return (
    <div>
      <Banner scrollToOrder={scrollToOrderRef} />
      <Benefits />
      <Tabs />
      <Order refProp={orderRef} />
      <Starbusiness />
      <Useful />
      <CallUs />
      <Footer />
    </div>
  );
}

export default App;
