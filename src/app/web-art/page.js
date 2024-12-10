'use client';

import "./web-art.css";
import "./web-art-globals.css"
import PortfolioItem from "./components/portfolio-item";

export default function Home() {
  return (
    <div id="page-container">
        <div id="pf-large-header">
          <a id="pf-large-header-name" href="/">Nicholas Cirillo</a>
          <p id="pf-large-header-title">ART of the WEB</p>
        </div>
        <a id="pf-readings-button" href="./web-art/readings">
          <img 
            id="pf-readings-icon"
            src="https://images.vexels.com/content/140908/preview/open-book-icon-7991a2.png" 
            alt="Readings"
          ></img>
        </a>
        <div id="pf-grid">
          <div className="pf-grid-row">
            <PortfolioItem 
              filename="generative-art"
              assignment="SECTION 3 - FINAL PROJECT" 
              section="3" 
              title="Generative Journal"
            />
            <PortfolioItem 
              filename="mcdonalds-slack-applet"
              assignment="SECTION 3 - ASSIGNMENT 2" 
              section="3" 
              title="McDonald's / Slack IFTTT Applet"
            />
            <PortfolioItem 
              filename="tournament"
              assignment="SECTION 3 - ASSIGNMENT 1" 
              section="3" 
              title="Rock-Paper-Scissors Tournament"
            />
          </div>
          <div className="pf-grid-row">
            <PortfolioItem 
              filename="clock"
              assignment="SECTION 2 - FINAL PROJECT" 
              section="2" 
              title="Clock Pong"
            />
            <PortfolioItem 
              filename="landscapes"
              assignment="SECTION 2 - ASSIGNMENT 2" 
              section="2" 
              title="Landscape Photography"
            />
            <PortfolioItem 
              filename="web-ring"
              assignment="SECTION 2 - ASSIGNMENT 1" 
              section="2" 
              title="Web Ring"
            />
          </div>
          <div className="pf-grid-row">
            <PortfolioItem 
              filename="music-shelf"
              assignment="SECTION 1 - FINAL PROJECT"
              section="1" 
              title="Album Art Collage"
            />
            <PortfolioItem 
              filename="css-still-life"
              assignment="SECTION 1 - ASSIGNMENT 2" 
              section="1" 
              title="CSS Still Life"
            />
            <PortfolioItem 
              filename="ascii-album-art"
              assignment="SECTION 1 - ASSIGNMENT 1" 
              section="1" 
              title="ASCII Album Art"
            />
          </div>
        </div>
    </div>
  );
}

{/* <PortfolioItem 
              filename="music-shelf"
              assignment="SECTION 1 - FINAL PROJECT" 
              title="Album Art Collage"
            /> */}

{/* <ul id="portfolio-list">
          <li>an <a href="./web-art/music-shelf">interactive album art collage</a></li>
          <li>a collection of my <a href="./web-art/landscapes">landscape photography,</a></li>
          <li>a <a href="./web-art/clock">&apos;game&apos; about wasting time,</a></li>
          <li>my team&apos;s rock-paper-scissors <a href="./web-art/tournament">tournament</a></li>
          <li>my team&apos;s mcdonald&apos;s + slack <a href="https://quinn2liu.github.io/section3assignment2/index.html" target="_blank" rel="noopener noreferrer">IFTTT applet</a></li>
          <li>a <a href="./web-art/generative-art">generative art space</a> to jot down your thoughts</li>
        </ul> */}