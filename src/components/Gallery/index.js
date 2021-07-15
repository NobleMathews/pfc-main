import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {useParams} from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { SRLWrapper } from "simple-react-lightbox";
import Skeleton from 'react-loading-skeleton';
import HeroBanner from '../Banner';
import Tabletop from "tabletop";
import useWindowDimensions from "../helper"

var _ = require('lodash');

const Gallery = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState([]);
    const [images, setImages] = useState([]);
    const { width } = useWindowDimensions();

    const imageLoaded = (i) => {
        let newArr = [...loading];
        newArr[i] = true;
        setLoading(newArr)
    }

    const getImgHeight = (heightr,widthr) => {
        // const {width, height} = await probe(url);
        // 350: 1, 750: 2, 900: 3
        var scaleWidth = 300;
        if(width<=350) scaleWidth = width;
        else if(width<=750) scaleWidth = width/2;
        else scaleWidth = width/3.5;
        const curHeight = heightr;
        const curWidth = widthr;
        const aspect = curHeight/curWidth;
        const scaleHeight = aspect*scaleWidth;
        return scaleHeight;
    }

    useEffect(() => {
        Tabletop.init({
            key: "1vPQKs66Z2bwS_BvA9vjTcyYGyksw23BUKxiqzxak9pQ",
            simpleSheet: true
         })
         .then((data) => {
            const albumData = [];
            const fdata =  _.filter(data, function(o) {
               if(o["Filename"].split('.')[0] === "preview"){
                  albumData.push(o);
               } 
               return o["File Extension"] !== 'N/A'; 
            });
            const gdata = _.groupBy(fdata,"Folder name");
            const imageL = gdata[decodeURI(id)];
            setImages(imageL);
         })
         .catch((err) => console.warn(err));
    },[id]);

    return (
        
        <GalleryMain >
        <ParallaxProvider>

            {/* <div className="container-shr"> 
                <h1 className="display-2"><b>{pagename}</b></h1>
            </div>

            <Jumbotron className="sticky" style={{backgroundImage:
            `linear-gradient(
                rgba(0, 0, 0, 0.45), 
                rgba(0, 0, 0, 0.45)
                ),
                url(${url})`}}>
                   
            </Jumbotron> */}
            {images.length>0 &&
            <HeroBanner links={images[0]["Thumbnail Link"].split("=")[0]+"=s1024"} pagename={decodeURI(id)} />
            }
            <div className="gallery-shr">
            <Parallax y={[0,0]}>
                
                <GalleryContainer>
                    <SRLWrapper
                        // options={{
                        //     buttons: {
                        //         showDownloadButton: false,
                        //     }
                        // }}
                    >
                        <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                        >

                                <Masonry gutter={"15px"}>
                                {/* <img alt="Testing masonry packing" style={{width: "100%", display: "block"}} src={"https://picsum.photos/200/300"} /> */}
                                {images.map((image,i)=>(
                                    <div key={"skeleton"+i}>
                                    <Skeleton style={{display: loading[i] ? "none" : "block", paddingBottom: `${getImgHeight(image["Height"],image["Width"])}px`,width: "100%"}}/>
                                    <a href={image["Direct Link"]}>
                                        <img className="image" key={i} alt={`${decodeURI(id)}#${i+1}`} style={{width: "100%", display: loading[i] ? "block" : "none"}} src={image["Thumbnail Link"].split("=")[0]+"=s480"} onLoad={()=>imageLoaded(i)}/>
                                    </a>
                                    </div>
                                ))}
                                </Masonry>
                        </ResponsiveMasonry>
                    </SRLWrapper>
                    
                </GalleryContainer>
                
            </Parallax>
            </div>
            
        </ParallaxProvider>
        </GalleryMain>
    )
}

const GalleryMain = styled.div`
    .sticky {
        position: sticky;
        top: 0;
        margin: 0;
        padding: 50px;
        height: 240px;
        width: 100%;
    }
`
const GalleryContainer = styled.div`
    background-color: var(--color-primary);
    // background-color: gray;
    padding: 20px;
    margin: 0;

    .image{
        transition: all 0.25s ease;
    }
    .image:hover{
        transform: scale(1.01);
        opacity: 0.9;
        background-color: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
    }
`

// const Jumbotron = styled.div`
//     background-color: white;
//     opacity: 1;
//     background-repeat: no-repeat;
//     height: 100%;
//     background-position: center;
//     background-size: cover;
//     overflow: hidden;
//     color: white;
//     font-weight: bold;
//     font-family: verdana;
//     text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 0px 0px 5px #232323, -1px 1px 6px #acacac;
//     // url(https://lh3.googleusercontent.com/rUxRcUW34A3AUt6BCt7LrDXqR8xPQ1Dy1T5Qr3DAjbUUufMCiH6p_ThFiuK67xekyrK8aTsTDDCzW_tGP_hhnJaty5BpbrYm0LHvFONyVt-U4o3vW0zkLAFLYIPK4YWyMO0z5YFvcA);
// `

export default Gallery;