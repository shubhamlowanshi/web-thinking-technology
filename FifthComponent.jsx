import React from 'react';
import laptop from '../assets/laptop.png';
import mobile from '../assets/mobile.png';
import wordpress from '../assets/wordpress.png';
import shopify from '../assets/shopify.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import flutter from '../assets/flutter.png';
import { BiSolidPhoneCall } from "react-icons/bi";
// import swift from '../assets/swift.png';
import './Fifthcomponent.css';

export const FifthComponent = () => {
    return (<>

        <div className='container-v'>
            <center>
                <h1 style={{ color: "#4A00E0" }}>Technologies We Use to Build</h1>
                <p style={{ fontSize: "15px" }}>
                    Powerful platforms for a fast, secure & scalable
                    <div> online store.</div>
                </p>
            </center>

            <div className='bothcontainer'>
                <div className='tech-section'>
                    <div className='items'>
                        <img height={300} src={laptop} alt="Laptop" />
                    </div>
                    <div className='items'>
                        <h1>Website Development</h1>
                        <div className='tech-item'>
                            <img src={wordpress} alt="WordPress" />
                            <div>
                                <h3>WordPress</h3>
                                <p>Perfect for customizable and SEO-friendly stores.</p>
                            </div>
                        </div>
                        <div className='tech-item'>
                            <img src={shopify} alt="Shopify" />
                            <div>
                                <h3>Shopify</h3>
                                <p>Great for easy-to-manage e-commerce solutions.</p>
                            </div>
                        </div>
                        <div className='tech-item'>
                            <img src={css} alt="CSS" />
                            <div>
                                <h3>CSS</h3>
                                <p>Essential for styling and responsive web design.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tech-section reverse'>
                    <div className='items'>
                        <img height={300} src={mobile} alt="Mobile" />
                    </div>
                    <div className='items'>
                        <h1>Mobile Development</h1>
                        <div className='tech-item'>
                            <img src={react} alt="React Native" />
                            <div>
                                <h3>React Native</h3>
                                <p>Cross-platform app development for Android & iOS.</p>
                            </div>
                        </div>
                        <div className='tech-item'>
                            <img src={flutter} alt="Flutter" />
                            <div>
                                <h3>Flutter</h3>
                                <p>Flexible UI for smooth and fast mobile experiences.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='bottom'>
                <div style={{marginTop:"25px",fontSize:"30px",color:"#B2ADFF"}}> Ready to setup your Brand <span style={{color:"#FFFFFF"}}>toNext Level?</span></div>
                <div> 
                    <button style={{backgroundColor:"#FFFFFF",color:"blue", marginLeft:"170%",width:"120px"}} className='enq-btn bookcall'>Book A Call <BiSolidPhoneCall /></button>
                </div>
            </div>
        </div>
    </>
    );
};
