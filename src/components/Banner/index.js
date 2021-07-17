import React, { useState } from "react";
import { Jumbotron } from 'react-bootstrap';
// import styled from 'styled-components';
import {ImShare2, ImDownload} from 'react-icons/im';

const HeroBanner = (props) => {
    const [copied, setCopied] = useState(false);

    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

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
                    <button onClick={ copy }  style={{margin:"5px"}} type="button" className="btn btn-dark">{!copied ? <ImShare2 style={{margin:"5px"}}/> : "Copied!"}</button>
                </span>
                <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Download Multiple">
                    <a style={{margin:"5px"}} href={props.directLink} target="_blank" rel="noreferrer" type="button" className="btn btn-dark"><ImDownload style={{margin:"5px"}}/></a>
                </span>
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