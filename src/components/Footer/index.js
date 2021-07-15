import React from 'react';
import logo from '../../assets/images/iitt_w.png'

const Footer = () => {
    return(
        <footer className="site-footer">
        <div className="container">
          <div className="grid-container">
            <div className="grid-item">
              <img alt="logo" src={logo} className="logo-img" />
            </div>
            <div className="grid-item inner-grid-container">  
              <div className="grid-item"><a href>Contact us</a>
              <p className="cardc-text" style={{textAlign:"left"}}>pfc@iitp.ac.in</p>
              <div className="cardc-text">
                <p style={{textAlign:"left"}} >Indian Institute of Technology Tirupati,</p>
                <p style={{textAlign:"left"}} >Venkatagiri Road , Yerpedu Mandal,</p>
                <p style={{textAlign:"left"}} >Chittoor - 517 619,</p>
                <p style={{textAlign:"left"}} >Andhra Pradesh, India.</p>
              </div>
              </div>   
            </div>
            <div className="grid-item">
              <div className="social-buttons">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pfciitt"><i className="lni lni-instagram-filled" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCgmHdDwotMlBsrgxJE9tIBA"><i className="lni lni-youtube" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/photographyclubiittp/"><i className="lni lni-facebook-filled" /></a>
              </div>
            </div>   
          </div>
          <hr />
          <p style={{color:"grey"}}>Copyright © 2021 | Built by the <b><a href="# " style={{color:"#A2845C", textDecoration:"none"}} rel="nofollow">Fantastic Four</a></b></p>
        </div>
      </footer>
    )
}

export default Footer;