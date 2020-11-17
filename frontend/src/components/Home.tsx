import React from 'react';
import img1 from '../assets/images/bg4.png';
import img2 from '../assets/images/bg5.png';
import homeImg from "../assets/images/searchingLightBG.jpg";

export default function Home(){


    return(
        <div className="home">
            <div className="head">
                <img src={homeImg} className="homeImg"/>
                <div className="TITLE">Searching Light</div>
            </div>
            <main className="container"><br/><br/>
            <h1 className="info_title shadow">Explore the boy's beautiful nightmares with me</h1>
            <section className="info">
                <div className="info_rowDescription info_gif1">
                    <div className="info_gif left gif1"></div>
                    <div className="info_description right">
                        <p>The macabre thoughts of a young man trapped in his own head echo. Searching Light is a puzzle adventure RPG video game set in a dark and strange world full of twisted creatures.</p>
                    </div>
                </div>
                <div className="info_rowDescription info_gif1">
                <div className="info_gif right gif2"></div>
                    <div className="info_description left">
                        <p>Having great brain power and great spirit on a phenomenal level is not all that good. The innocence and humility of our young friend, does not fit within this evil world, perhaps understanding and accepting human evil will make him find the light.</p>
                    </div>
                </div>
                <div className="info_rowDescription info_gif1">
                    <img src={img1} className="left info_imagen" />
                    <div className="info_description right">
                        <p>One of the capabilities of this prodigious phenomenon is to see what the common people cannot, it is capable of seeing far beyond the limit of the human eye. This skill will help you solve many puzzles and riddles.</p>
                    </div>
                </div>
                <div className="info_rowDescription info_gif1">
                <img src={img2} className="right info_imagen" />
                <div className="info_description left">
                        <p>Strategically, you can defeat the most terrifying monsters, even so without weapons, using only your mental gifts.</p>
                    </div>
                </div>
                
                
            </section>
            </main>
        </div>
    );
}