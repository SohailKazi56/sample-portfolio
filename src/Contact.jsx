import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    const formSubmit = (e) => {
        e.preventDefault();
        alert('Message was sent successfully. We will contact you soon.');
    }
    return(
        <>
            {/* <div className="my-5">
                <h1 className="text-center">
                    Contact Us
                </h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone </label>
                                <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="my-3 text-center">
                                <button type="submit" style={{borderRadius:'50px',width:'200px',background:'blueviolet'}} class="btn btn-primary btn-md">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

            <section id="contact-header" className="d-flex align-items-center">
                
                <div className="container-fluid main-container" >
                    <div className="text-center mx-5 my-3">
                        <h1 style={{color:'blueviolet'}}>
                            Wanna get in touch ???
                        </h1>
                        <h2 style={{color:'#653a8b'}}>
                            Contact Us !!
                        </h2>
                    </div>
                    <div className="row mb-5">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-8 pt-5 order-1 order-lg-1  " style={{background:'#dfc8f5'}}>
                                    <div className="container contact-div ">
                                        <div className="row ">
                                            <div className="col-md-6 col-10 mx-auto ">
                                                <form onSubmit={formSubmit} >
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Full Name</label>
                                                        <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Phone </label>
                                                        <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Email address</label>
                                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlTextarea1">Message</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    <div className="my-3 text-center">
                                                        <button type="submit" style={{borderRadius:'20px',background:'blueviolet'}} className="btn btn-primary btn-md">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 order-2 order-lg-2 d-flex justify-content-center flex-column second-contact-box"  style={{width:'350px'}}>
                                    
                                    <div className="container contact-div-2" >
                                        <div className="my-4 justify-content-center">
                                            <div className="row">
                                                <div className="card" >
                                                    <span><FontAwesomeIcon className="icon" icon={faPhoneAlt}  /></span>
                                                    <div className="content-info">
                                                        <h3 className="text-uppercase">phone</h3>
                                                        <span style={{fontSize:'18'}}> +918796719959</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="card">
                                                    <span><FontAwesomeIcon className="icon" icon={faEnvelope}  /></span>
                                                    <div className="content-info">
                                                        <h3 className="text-uppercase">Email</h3>
                                                        <span>sohailkazi56@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="card">
                                                    <span><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}  /></span>
                                                    <div className="content-info">
                                                        <h3 className="text-uppercase">location</h3>
                                                        <span style={{fontSize:'18px'}}>Yerwada, Pune</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;