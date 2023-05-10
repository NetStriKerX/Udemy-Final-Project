import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className='br2 shadow-2' style={{ height: '150px', width: '150px'}}>
                <div className='pa3'>
                    <a target="_blank" rel='noreferrer' href="https://icons8.com/icon/61591/critical-thinking"><img style={{paddingTop: '10px'}} src={brain} alt='Logo'/></a>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;