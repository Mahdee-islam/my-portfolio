
import React from 'react';
import Typical from 'react-typical';
import image from '../../profile.svg';
import './Home.css';



const Home = () => {
    
    return (
        <div>
             <div className = "home">
             <div className="content-section">
           <p> WELCOME TO MY <b >PORTFOLIO</b></p>
       <h1>Hi, I'm <span className = "name"> <b>Mahdee</b> </span>Islam 
       {' '} 
       <Typical className = "name" loop = {Infinity}
        wrapper = 'h1'
        steps = {
            [
                'a web developer.',
                1000,
                'a self learner.',
                1000,
                'a web designer.',
                1000,
                'a freelancer.',
                1000,
            ]
        }
        />
        </h1>
        <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
        
            </div> 
            <div className="img-section">
                <img  src= { image } alt="img" /> 
            </div>
             </div>
             <p>Find Section</p>
             <div className="find-section">
              
             </div>
        </div>
    );
};

export default Home;