import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import Container from 'react-bootstrap/Container'
import Skeleton from 'react-loading-skeleton';
import ImageGallery from 'react-image-gallery';
// import logo from '../../assets/images/iitt_w.png'
import logo_i from '../../assets/images/logo.png';
import data from '../../assets/data/data.json';

const useShowcase = 5;

var available = [];
var slides = [];
const Home = () => {

    data["Showcase"]["Data"].forEach((image)=>{
      available.push({"id":image["id"],"original":image["Thumbnail Link"].split("=")[0]+"=s1024"});
    });
    slides = available.sort(() => .5 - Math.random()).slice(0,useShowcase);

    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
      counter.current += 1;
      if (counter.current >= Object.keys(data).length) {
        setLoading(false);
      }
    }
    // Querying everything parallely to cache on homepage
    return(
        <OuterWrapper>
        <ImageGallery slideInterval={3000} items={slides} showNav={false} showThumbnails={false} showFullscreenButton={false} autoPlay={true} showPlayButton={false}/>
        {/* <a className="sidebar__logo" type="button" href="https://www.iittp.ac.in/" rel="noreferrer" target="_blank">
            <img src={logo} style={{height:"100%"}}/>
        </a> */}
        {/* <div className="fader"/> */}
        <nav className="navbar navbar-expand navbar-dark bg_under">
          <div className="d-flex flex-grow-1">

          </div>
          <div className="flex-grow-1 text-right">
            <ul className="navbar-nav flex-nowrap" style={{justifyContent:"flex-end"}}>
              <li className="nav-item">
                <a href="/team" className="nav-link m-2 menu-item nav-active">Our Team</a>
              </li>
              {/* <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item">Blog</a>
              </li> */}
              <li className="nav-item">
              <a className="navbar-brand" style={{"marginLeft":"1rem"}} href="/">
              <img src={logo_i} style={{width:"50px"}} alt="logo" />
            </a>
              </li>
            </ul>
          </div>
        </nav>

         <ContainerCustom>
         <Container fluid={true} >     
           <FadeIn delay={100} className="justify-content-center row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">            
             {Object.keys(data).map((album)=> (
                <div className="card-deck" key={album}> 
                    <div className="card">
                    <a className="entireCard" style={{display:"block"}} href={`/gallery/${encodeURI(album)}`}> 
                    <div className="card-body">
                    <Skeleton style={{display: loading ? "block" : "none"}} className={"setHeight"}/>
                    <img style={{display: loading ? "none" : "block"}} className="card-img-top cover" src={data[album]["Preview"]["Thumbnail Link"]} alt={"Placeholder preview"} onLoad={imageLoaded}/>
                    <h5 className="title">{album}</h5>
                    </div>
                    </a>
                    </div>
                </div>
            ))}
          </FadeIn>
        
        </Container>
        </ContainerCustom>
        <div className="containerAn">
          <div className="chevron" />
          <div className="chevron" />
          <div className="chevron" />
          <span className="text">Scroll down</span>
        </div>
      </OuterWrapper>
    )
}
/*Polaroid Version*/

const OuterWrapper = styled.div`
.image-gallery-slide .image-gallery-image {
  width: 100%;
  object-fit: cover;
}
@media only screen and (max-width: 1000px) {
  .image-gallery-slide .image-gallery-image {
    min-height: 50vh !important;
    object-fit: cover;
  }
  .containerAn{
    display:none;
  }
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background-size: cover;
  background-position: center;
  will-change: opacity;
  height:100%;
  
}
@media only screen and (min-width: 600px) {
  .bg {
    height: 100vh;
    background-color: grey;
  }
}
.bg_under {
  position: sticky;
  top: 0;
  left: 0;
  // transform: translateY(100%);
  width:100%;
  height:80px;
  // margin-bottom: 72px;
  // margin-top: -72px;
  z-index:999;
}
.fader{
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 100vh;
  // margin-bottom: 5vh;
}

`

const ContainerCustom = styled.div`
   
    // margin: 15px 15px 60px 30px;
    border-radius:10px; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    .setHeight{
        margin: 5px 0px 15px 0px;
        width: 100%;
        padding-bottom: calc(67.67% - 20px);
    }

    .card-body{
        padding:0px 5px 0px 5px;
        background-color: transparent;
    }
    .card-deck{
        padding: 15px;
        // padding:5px 8px 5px 8px;
        border-radius:0px; 
        background-color: transparent;
    }
    .card{
        margin: auto 16px auto 16px;
        padding:0px 0px 0px 0px;
        background-color: 	#1E1E1E;
        border-radius:0px;
        color: #E2E2E2;
    }
    .card:hover{
        transition: all 0.5s ease;
        background-color: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
        transform: scale(1.02);
    }
    .card-img-top{
        // padding:20px 0px 15px 0px;
        padding: 5px 0px 15px 0px;
        border-radius:0px;
    }
    .entireCard{
        padding:10px 8px 20px 8px;
        background-color: transparent;
        color: #E2E2E2;
        text-align: center;
        margin:0px 0px 0px 0px;
        transition: all 0.5s ease;
    }
    .entireCard:hover{
        // box-shadow: 10px 10px 5px grey;
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
        opacity: 0.8;
        transition: all 0.5s ease;
        background-color: black;
        text-align: center;
        margin:0px 0px 0px 0px;
        text-decoration: none;
        transform: scale(1.01);
        color: #A2845C;
    }
    .title{
        font-family: 'Permanent Marker', cursive;
        text-decoration: none;
    }
`
 
/*Non-Polaroid Version*/
/* const ContainerCustom = styled.div`
    margin: 15px 15px 60px 30px;
    border-radius:10px; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    .card-body{
        padding:0px 0px 0px 0px;
        margin:0px 0px 0px 0px;
    }
    .card-deck{
        padding:5px 8px 5px 8px;
        border-radius:0px; 
        background-color: transparent;
    }
    .card{
        border-style: none;
        margin: auto 16px auto 16px;
        padding:0px 0px 0px 0px;
        background-color: white;
        border-radius:0px;
    }
    .card-img-top{
        padding:0px 0px 0px 0px;
        margin:0px 0px 0px 0px;
        border-radius:5px;
    }
    .entireCard{
        padding:0px 0px 0px 0px;
        background-color: transparent;
        border-radius: 5px;
        color: black;
        text-align: center;
        margin:0px 0px 0px 0px;
    }
    .entireCard:hover{
        box-shadow: 10px 10px 5px grey;
        margin:0px 0px 0px 0px;
        text-decoration: none;
    }
    .title{
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        padding: 15px 0px 5px 0px
    }
` */

// const Jumbotron = styled.div`
//     // margin:15px 15px 30px 15px;
//     padding:0px !important;
//     margin: 0px !important;
//     // border-radius:10px;
//     background: 
//     linear-gradient(
//     rgba(0, 0, 250, 0.25), 
//     rgba(125, 250, 250, 0.45)
//     ),
//     url(https://source.unsplash.com/1600x1050/?nature);
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     color:white !important;
//     max-height:calc(100vh - 30px);
// `

export default Home;