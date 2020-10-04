import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/home.jpg"
import Common from "./Common"


const Home = () => {
    return(
        <>
            < Common title="Make your business " imgsrc={web} visit="/about" btnName="About Us" />
        </>
    );
};

export default Home;