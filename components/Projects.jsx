import React from "react";
import ProjectItems from "./ProjectItems";
import cssSite from "../public/assets/projects/css-site.png";
import diceGame from "../public/assets/projects/DIceGame.png";
import guessGame from "../public/assets/projects/GuessingGame.png";
import modal from "../public/assets/projects/Modal.png";
import qrCode from "../public/assets/projects/QRCode.png";
import tindog from "../public/assets/projects/Tindog.png";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="CSS Portfolio"
            backgroundImg={cssSite}
            projectUrl="/cssPortfolio"
            tech="React JS"
          />
          <ProjectItems
            title="Guessing Game"
            backgroundImg={guessGame}
            projectUrl="/guessGame"
            tech="React JS"
          />
          <ProjectItems
            title="Dice Game"
            backgroundImg={diceGame}
            projectUrl="/diceGame"
            tech="React JS"
          />
          <ProjectItems
            title="Modal"
            backgroundImg={modal}
            projectUrl="/modal"
            tech="React JS"
          />
          <ProjectItems
            title="QR Code"
            backgroundImg={qrCode}
            projectUrl="/qrCode"
            tech="React JS"
          />
          <ProjectItems
            title="Tindog"
            backgroundImg={tindog}
            projectUrl="/tindog"
            tech="React JS"
          />
          <ProjectItems
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItems
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItems
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="React JS"
          />
          <ProjectItems
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
