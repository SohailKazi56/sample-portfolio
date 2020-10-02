import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn,  faTwitter, faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <>
            <footer className ="w-200 text-center bg-light">
                <p style={{marginTop:'10px'}}> Made with love in India | Copyright © 2020, Techfish. All rights reserved</p>
                <div className="home-icons">
                    <span className="icon"> <a href="https://github.com/SohailKazi56" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faGithub} style={{color:'#653a8b',width:'30px',height:'30px'}} /> </a> </span>
                    <span className="icon"> <a href="https://www.hackerrank.com/sohell356899" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faHackerrank} style={{color:'#653a8b',width:'30px',height:'30px'}} /> </a> </span>
                    <span className="icon"> <a href="https://www.instagram.com/s_o_h_a_i_l__k_a_z_i" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faInstagram} style={{color:'#653a8b',width:'30px',height:'30px'}}/> </a> </span>
                    <span className="icon"> <a href="https://twitter.com/SohailK36568234?s=08" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faTwitter} style={{color:'#653a8b',width:'30px',height:'30px'}}/> </a></span>
                    <span className="icon"> <a href="https://www.linkedin.com/in/sohail-kazi-60010b198" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faLinkedinIn} style={{color:'#653a8b',width:'30px',height:'30px'}} />  </a> </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;