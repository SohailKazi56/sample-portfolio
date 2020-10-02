import React from 'react';
import web from "../src/images/sohail.jpg"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn,  faTwitter, faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
    return(
        <>
            {/* about me section */}

            <section className="about-us-section" id="aboutId">
                <div className="container headings text-center mb-5">
                    <h1 class="text-uppercase font-weight-bold text-center" style={{color:'#653a8b'}}>Wanna know about Us !!!</h1>
                </div>

                <div className="row mb-5">
                        <div className="col-8 mx-auto">
                            <div className="row">
                                <div className="col-md-6 align-items-right  order-1 order-lg-1  " style={{width:'350px'}}>
                                    <img src={ web } className="img-fluid" style={{height:'400px',width:'350px'}} alt="profile img" />
                                </div>

                                <div className="col-lg-6 order-2 order-lg-2 "style={{background:'white',marginLeft:'15px'}}  >
                                                      
                                    <h1 className="about-title">
                                        About Me
                                    </h1>
                                    <p className="about-para">
                                        Ummm... Hello...! Myself Sohail kazi. I am a web designer and App developer. I intend to learn more and more things in my day to life. and yeah i am a day dreamer who wants to start his own company hahaha. That's it about me 😅.
                                    </p>
                                    <NavLink to="/contact">
                                        <button to ="/contact" style={{borderRadius:'20px',background:'blueviolet',marginTop:'10px'}} className="btn btn-primary btn-md">Contact Us</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            {/* our team section */}

            <section className="team-section" id="teamId">

                <div className="container offering-heading text-center">
                    <h1 className="text-center text-uppercase font-weight-bold"  style={{color:'#653a8b'}}>our Team</h1>
                </div>

                <div className="col-10 mx-auto">                   
                        
                        <div className="row team-row ">
                            
                                <div className="col-lg-4 col-md-4 align-items-center">
                                    <div className="box">
                                        <img src={web} className="card-img-top" alt="card-img" />
                                        <p> A professional graphics designer. With number of projects completed efficiently.</p>
                                        <h1>Ranjeet Jagtap</h1>
                                        <h3>Graphics Designer</h3>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 align-items-center">
                                    <div className="box">
                                        <img src={web} className="card-img-top" alt="card-img" />
                                        <p> A professional graphics designer. With number of projects completed efficiently.</p>
                                        <h1>Sohail Kazi</h1>
                                        <h3>Web Designer</h3>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 align-items-center">
                                    <div className="box">
                                        <img src={web} className="card-img-top" alt="card-img" />
                                        <p> A professional graphics designer. With number of projects completed efficiently.</p>
                                        <h1>Rahul Maurya</h1>
                                        <h3>Business Analyst</h3>
                                    </div>
                                </div>
                            
                        </div>
                </div>
            </section>

            <section className="offering-section" id="offering-id">
                <div className="container-fluid">
                <div className="container offering-heading text-center" >
                    <h1 className="text-center text-uppercase font-weight-bold"  style={{color:'#653a8b'}}>Service Offering</h1>
                </div>
                    <div col-10 mx-auto>
                        <div className="row" style={{marginTop:"50px",padding:"30px"}}>
                            <div className="col-lg-3 col-md-3 align-items-center">
                                <div className="box-container" style={{backgroundColor:"#AEB6BF"}}>            
                                    <FontAwesomeIcon icon={faGithub} style={{width:"90px",height:"90px", justifyItems:"center",marginTop:"50px",color:"#653a8b"}} />                        
                                    <h1 style={{fontSize:"18px", textAlign:"center",marginBottom:"10px", marginTop:"40px",fontWeight:"bold",color:"#653a8b"}}>Web Design</h1>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 align-items-center">
                                <div className="box-container" style={{backgroundColor:"#D1F2EB "}}>            
                                    <FontAwesomeIcon icon={faGithub} style={{width:"90px",height:"90px", justifyItems:"center",marginTop:"50px",color:"#653a8b"}} />                        
                                    <h1 style={{fontSize:"18px", textAlign:"center",marginBottom:"10px", marginTop:"40px",fontWeight:"bold",color:"#653a8b"}}>Android Development</h1>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 align-items-center">
                                <div className="box-container" style={{backgroundColor:"#FCF3CF"}}>            
                                    <FontAwesomeIcon icon={faGithub} style={{width:"90px",height:"90px", justifyItems:"center",marginTop:"50px",color:"#653a8b"}} />                        
                                    <h1 style={{fontSize:"18px", textAlign:"center",marginBottom:"10px", marginTop:"40px",fontWeight:"bold",color:"#653a8b"}}>Graphic Design </h1>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 align-items-center">
                                <div className="box-container" style={{backgroundColor:"#F5B7B1"}}>            
                                    <FontAwesomeIcon icon={faGithub} style={{width:"90px",height:"90px", justifyItems:"center",marginTop:"50px",color:"#653a8b"}} />                        
                                    <h1 style={{fontSize:"18px", textAlign:"center",marginBottom:"10px", marginTop:"40px",fontWeight:"bold",color:"#653a8b"}}>Mini Projects</h1>
                                </div>
                            </div>          
                        
                        </div>
                    </div>
                </div>
            </section>

            
            

        </>
    );
};

export default Home;