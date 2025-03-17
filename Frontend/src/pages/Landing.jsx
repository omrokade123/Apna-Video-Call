import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Landingpage() {
    return ( 
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Apna VideoCall</h2>
                </div>
                <div className='navlist'>
                    <p>Join as Guest</p>
                    <Link  id='link' to={"/auth"} >Register</Link>
                    <div role='button'>
                        <Link id='link' to={"/auth"}>Login</Link>
                    </div>

                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#FF9839"}}>Connect</span> With Your Loved Ones</h1>
                    <p>Cover a distance by Apna VideoCall</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
     );
}

export default Landingpage;