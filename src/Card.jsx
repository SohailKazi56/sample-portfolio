import React from 'react'
import web from "../src/images/unsplash.jpg"

const Card =(props) => {
    return (
        <>
           <div className= "col-md-4 col-10 mx-auto">
            <div className="card" style={{width: "18rem",height:"24rem"}}>
                <img src={props.imgsrc} className="card-img-top" alt="card-img" />
                <div class="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="https://github.com/SohailKazi56" target="_blank" class="btn " style={{background:'#8308ee',color:'white'}}>Goto Project</a>
                </div>
            </div> 
           </div>
        </>
    )
}

export default Card;
