import React from 'react';
import img1 from '../assets/img1.jpeg'


export default function Home(){


    return(
        <>
        <div className="homeImg"></div>
        <main>
            <h1 className="info_title">Discover the new world</h1>
            <section className="info">
                <div className="info_rowDescription">
                    <img src={img1} alt="imagen left"/>
                    <div className="info_description right">
                        <h1>asdsdad</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit earum, molestias vero quam a</p>
                    </div>
                </div>
                <div className="info_rowDescription">
                    <img src={img1} alt="imagen right"/>
                    <div className="info_description left">
                        <h1>asdsdad</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit earum, molestias vero quam a</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit earum, molestias vero quam a</p>
                    </div>
                </div>
                <div className="info_rowDescription">
                    <img src={img1} alt="imagen left"/>
                    <div className="info_description right">
                        <h1>asdsdad</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit earum, molestias vero quam a</p>
                    </div>
                </div>
                <div className="info_rowDescription">
                    <img src={img1} alt="imagen right"/>
                    <div className="info_description left">
                        <h1>asdsdad</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit earum, molestias vero quam a</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit earum, molestias vero quam a</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit earum, molestias vero quam a</p>
                    </div>
                </div>
                
            </section>
        </main>
        </>
    );
}