import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return(
        <>
            <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid nav_bg"> 
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 style={{fontSize:'2.6rem'}}>
                                    {props.title} <strong className="brand-name" style={{color:'blueviolet'}}>online</strong> with 
                                    <strong className="brand-name" style={{color:'blueviolet'}}> TechFish</strong>
                                </h1>
                                <h2 style={{fontSize:'1.5rem'}}>
                                    We are the team of talented developer making websites
                                </h2>
                                <div className="mt-3 get-started-btn">
                                    <NavLink to={props.visit} className="btn-about-us">
                                        {props.btnName}
                                    </NavLink>
                                </div> 
                                
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={ props.imgsrc } className="img-fluid animated" style={{height:'450px', width:'600px'}} alt="home img" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;