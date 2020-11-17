import React from "react";

import imgHtml5 from "../assets/html5.png";
import imgMongo from "../assets/mongo.png";
import imgExpress from "../assets/Expressjs.png";
import imgNode from "../assets/nodejs.png";
import imgReact from "../assets/react.png";
import imgGit from "../assets/Git.png";
import imgGithub from "../assets/Github.png";
import imgGamemaker from "../assets/images/gamemaker.png";

import imgKenneth from "../assets/images/kenneth.jpg";
import imgChris from "../assets/images/chris.jpg";
import imgCamilo from "../assets/images/camilo.jpg";
import imgMaicol from "../assets/images/maicol.jpg";

const About = () => {

	const lang = [imgHtml5, imgMongo, imgExpress, imgNode, imgReact, imgGit, imgGithub];

	const listLang = lang.map((lang) => {
        return(
            <div className="aboutLanguages">
        		<img src={lang} alt="" className="aboutLanguagesImages"/>
            </div>
        )
    })

    const devs = [
 		[imgKenneth, "Searching Light creator, Back-end developer and graphic designer.", "Orson Leiziaga"],
    	[imgChris, "Searching Light Sound Designer and Brainstorming", "Christian Anzures"],
    	[imgCamilo, "Front-end developer of the page", "Andres Alvarez"],
    	[imgMaicol, "Page tester", "Michael Mazo"]
   	];

	const listDevs = devs.map((devs) => {
        return(
            <div className="aboutDevs">
        		<img src={devs[0]} alt="" className="aboutDevsImages"/>
        		<div className="aboutText" style={{textAlign: "left"}}><h2>{devs[2]}</h2>{devs[1]}</div>
            </div>
        )
    })

	return(
		<div className="aboutContain">
			<div className="aboutContainer">

				<div className="aboutText">
					Searching Light is a project devised by the video game and web page developer,
					graphic artist and historian Orson Leiziaga, with the idea of ​​creating a puzzle video game and many secrets mainly for mobile
					phones, the project has been extended and it is planned to be released for many platforms. <br/><br/>
					Searching Light is being developed with GameMaker, the project started in January 2020, in mid-April, 
					the sononro designer Christian Anzures joined forces with the developer Orson Leiziaga to create the 
					entire sound part of the application, in addition to providing great ideas for the project. 
				 	Searching Light is planned to be released by mid-2021 mainly for PC, then it will be released to 
					other platforms such as mobile phones and consoles.<br/><br/>
					<img src={imgGamemaker} style={{width: "100%"}}></img><br/><br/>
				</div>

				<div className="aboutText">
					The web page is developed with the MERN Stack, that is, MongoDB using MongoDB Atlas as database, 
					Express js for the server and API, React js as frontend and Nodejs as backend, all this using 
					Typescript as main development language, finally HTML5 and CSS3. The Front-end was worked by Andrés Alvarez, specialized in Front-end architecture and the tester of the page was Michael Mazo.
				</div>

				<div className="aboutLanguagesContainer"><br/><br/>
					{listLang}
				</div><br/><br/><hr/>
				<div className="aboutText"><h2>The Developers</h2></div>
				<div className="aboutDevsContainer">
					{listDevs}
				</div>
			</div>
		</div>
	)
}

export default About;