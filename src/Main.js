import React, { Component } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PanelArea from "./components/PanelArea";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <PanelArea />
        <Footer />
      </div>
    );
  }
}


export default Main;
