import React from 'react';
import './home.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function MyCardFive({ brand, amount, image, url }){

  
    return (
        <>
             <div className='hidedesktop my-3 px-0'>
                <div className='hideflextwo'>
                    <div className='px-3'>
                        <h3 className='hidedesktophead'>{brand}</h3>
                        <p className='hidedesktopara'>{amount}</p>
                    </div>

                    <div>
                        <img className='cardimagethree' src={image} />
                        
                    </div>

                </div>

            <div className='hidedesktopflex px-3'>
                <a href={url}className='btn whitebtn desktopbutton'>Learn More</a>
                <Link to={'/wallets'} className='btn greenbtn desktopbutton'>Connect Wallet</Link>
            </div>

        </div>
        
        </>
    );
}

export default MyCardFive;