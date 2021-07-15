import React from 'react';
import { Jumbotron } from 'react-bootstrap';
// import styled from 'styled-components';
import {ImDownload, ImShare2} from 'react-icons/im';

const HeroBanner = (props) => {

    const url=props.links;
    // const numberOfImages=linksList.length;
    const pagename=props.pagename;
    return (
        <div id="container-shr">

            <div id="infoi" className="d-flex align-items-center" style={{width:"100%"}}> 
            <div className="d-flex align-items-center" style={{flexDirection:"column", width:"100%"}}> 
                <p className="text-center" style={{width:'100%', fontSize:'8vw',display:'block'}}><b>{pagename}</b></p>
                <div className="btn-group" style={{display:'block'}}>
                <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Share Album">
                    <button  style={{margin:"5px"}} type="button" className="btn btn-dark"><ImShare2 style={{margin:"5px"}}/></button>
                </span>
                {/* <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Get Originals">
                    <button style={{margin:"5px"}} type="button" className="btn btn-dark"><ImDownload style={{margin:"5px"}}/></button>
                </span> */}
                </div>
            </div>
            </div>

            <Jumbotron id="navi" style={{backgroundImage:
            `linear-gradient(
                rgba(0, 0, 0, 0.45), 
                rgba(0, 0, 0, 0.45)
                ),
                url(${url})`}}>
                
            </Jumbotron>

        </div>

    );
}

export default HeroBanner;