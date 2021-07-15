import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import FadeIn from 'react-fade-in';
import { createGlobalStyle } from 'styled-components';
import { stack as Menu } from 'react-burger-menu'
import ScrollToTop from "react-scroll-to-top";
import {FaArrowUp} from 'react-icons/fa';
import Footer from './components/Footer';
import Tabletop from "tabletop";
var _ = require('lodash');

const App =()=> {

  const [albums,setAlbums] = useState([]);

  useEffect(() => {
    Tabletop.init({
        key: "1vPQKs66Z2bwS_BvA9vjTcyYGyksw23BUKxiqzxak9pQ",
        simpleSheet: true
     })
     .then((data) => {
        const albumData = [];
        _.filter(data, function(o) {
           if(o["Filename"].split('.')[0] === "preview"){
              albumData.push(o);
           } 
           return o["File Extension"] !== 'N/A'; 
        });
        const previewData = albumData.map(con => _.pick(con, ["Folder name", "Thumbnail Link"]));
        const finalPreview = _.chain(previewData)
         .keyBy('Folder name')
         .mapValues('Thumbnail Link')
         .value();
        setAlbums(finalPreview);
     })
     .catch((err) => console.warn(err));
},[]);

  return (
   <div id="outer-container" className="App" style={{"background":'var(--color-primary)', height: "100%"}}>
    {/* <Route path="/test" render={() => <Test images={this.state.images} />} /> */}
    <GlobalStyles />
    <Menu  burgerButtonClassName={ "burgerbutton" } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <a href="/" className="menu-item" tabIndex="0">
        <i className="lni lni-home"></i><span> Home</span>
        </a>
        <br></br>
        <span> Albums </span>
        <span> --------- </span>
        {
          Object.keys(albums).map((key) => 
          <a href={`/gallery/${encodeURI(key)}`} key={key} className="menu-item" tabIndex="0">
          <i className="lni lni-image"></i><span> {key}</span>
          </a>
        )}
          
    </Menu>
    <div id="page-wrap" style={{height: "100%"}}>
    <FadeIn>
      <Route exact path="/gallery/:id" component={Gallery} />
      <Route exact path="/" component={Home} />
    </FadeIn>
    </div>
    <ScrollToTop smooth style={{color:"white", backgroundColor:"black", boxShadow:"none"}} component={
      <FadeIn>
      <FaArrowUp/>
      </FadeIn>
    }/>
    {/* <ScrollUp 
              style={{right:"5vw"}}
              showUnder={40}
              easing={'easeOutCubic'}
              duration={800}
              >
    <button type="button" className="btn btn-dark btn-circle btn-xl"><FaArrowUp/>
    </button>
    </ScrollUp> */}
    <Footer/>
   </div>
  );
 }


export default App;

const GlobalStyles = createGlobalStyle`
  html {
    --color-primary: 	#121212;
    /* --color-accent: #F75743; */
    --color-accent: #383838;
  }
`;
