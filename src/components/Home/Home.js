
import React from 'react';
import Typical from 'react-typical';
import './Home.css';

const Home = () => {
    return (
        <div className = "home">
             <div className="content-section">
           <p> WELCOME TO MY <b className = "name">PORTFOLIO</b></p>
       <h1>Hi, I'm <span className = "name">Mahdee Islam</span> 
       {' '} 
       <Typical loop = {Infinity}
        wrapper = 'h1'
        steps = {
            [
                'developer.',
                1000,
                'designer.',
                1000,
                'open sorcer.',
                1000,
                'freelancer.',
                1000,
            ]
        }
        />
       
        </h1>
        
            </div> 
            <div className="img-section">
               
            </div>
        </div>
    );
};

export default Home;