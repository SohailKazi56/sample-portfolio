import React from 'react';
import Card from './Card';
import Sdata from './Servicedata';

const Services = () => {
    return(
        <>
            <h1 className="text-center" style={{color:'#653a8b'}}>
                Our Services
            </h1>

            <div className="container-fluid mb-5 mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4" >
                            {Sdata.map((val,ind) => {
                                return <Card id="card-id" key={ind} imgsrc = {val.imgsrc} title = {val.title} content = {val.content}  />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;