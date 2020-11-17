import React from 'react';
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/images/SLBG2.jpg'
import xbox from '../assets/xbox_logo.png'
import ps4 from '../assets/ps4_logo.png'
import playstore from '../assets/playstore_logo.png'
import steam from '../assets/steam_logo.png'
import switchL from '../assets/switch_logo.png'
import appstore from '../assets/appstore_logo.png'


export default function PlayContent(){

    const platforms = [xbox, ps4, playstore, steam, switchL, appstore];

    const listPlatforms = platforms.map((platform) => {
        return(
            <div className="play_ImgContainer">
                <img src={platform} alt="" className="play_platform"/>
            </div>
        )
    })


    return(
        <div className="play">
            <h1 className="play_title">Searching light</h1>
            <div className="play_cards">
                <div className="play_card">
                    <img src={img2} alt="imagen left"/>
                    <div className="play_description right">
                        <p>Play a demo now!!</p>
                    </div>
                </div>
                <div className="play_card">
                    <img src={img1} alt="imagen right"/>
                    <div className="play_description left">
                        <p>Buy Searching Light Now</p>
                    </div>
                </div>
            </div>
            <div className="play_platforms">
                {listPlatforms}
            </div>
        </div>
    )
}