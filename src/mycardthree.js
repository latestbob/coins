import React from 'react';
import './home.css';

import { useState } from 'react';

function MyCardThree({ brand, url, image }){

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    return (
        <>
              <a style={{
                  textDecoration:"none",
              }} href={url}><div className={`${isHovered ? 'hovered' : 'mycard text-center mx-1'}`}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img className='cardimagethree' src={image} />
                <h3 className='cardhead my-4'>{brand}</h3>
               
                

                

                </div>
                </a>
        
        </>
    );
}

export default MyCardThree;