import './stylesheets/App.css';
import React, { Fragment } from 'react';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Body></Body> 
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
