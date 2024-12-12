'use client';

import "./web-art.css";
import "./web-art-globals.css"
import PortfolioItem from "./components/portfolio-item";

export default function Home() {
  return (
    <div id="page-container">
        <div id="pf-large-header">
          <div id="pf-header-banner">
            <a id="pf-readings-button" href="/web-art/readings">
              <img 
                id="pf-readings-icon"
                src="/icons/open-book.webp" 
                alt="Readings"
              ></img>
            </a>
            <a id="pf-large-header-name" href="/">Nicholas Cirillo</a>
            <a id="pf-course-button" href="https://www.design.upenn.edu/courses/dsgn-1020" target="_blank" rel="noopener noreferrer">
              <img 
                id="pf-course-icon"
                src="/icons/penn-shield.webp" 
                alt="Readings"
              ></img>
            </a>
          </div>
          <p id="pf-large-header-title">ART of the WEB</p>
        </div>
        
        <div id="pf-grid">
          <div className="pf-grid-col">
            <PortfolioItem 
              filename="ascii-album-art"
              assignment="SECTION 1 - ASSIGNMENT 1" 
              section="1" 
              title="ASCII Album Art"
            />
            <PortfolioItem 
              filename="css-still-life"
              assignment="SECTION 1 - ASSIGNMENT 2" 
              section="1" 
              title="CSS Still Life"
            />
            <PortfolioItem 
              filename="album-art-collage"
              assignment="SECTION 1 - FINAL PROJECT"
              section="1" 
              title="Album Art Collage"
              autoplay="true"
            />
            <div className="pf-section-label-s1"><p>SECTION 1</p>&nbsp;↑</div>
          </div>
          <div className="pf-grid-col">
            <PortfolioItem 
              filename="web-ring"
              assignment="SECTION 2 - ASSIGNMENT 1" 
              section="2" 
              title="Web Ring"
            />
            <PortfolioItem 
              filename="landscapes"
              assignment="SECTION 2 - ASSIGNMENT 2" 
              section="2" 
              title="Landscape Photography"
            />
            <PortfolioItem 
              filename="clock"
              assignment="SECTION 2 - FINAL PROJECT" 
              section="2" 
              title="Pong Clock"
              autoplay="true"
            />
            <div className="pf-section-label-s2"><p>SECTION 2</p>&nbsp;↑</div>
          </div>
          <div className="pf-grid-col">
            <PortfolioItem 
              filename="tournament"
              assignment="SECTION 3 - ASSIGNMENT 1" 
              section="3" 
              title="Rock-Paper-Scissors Tournament"
            />  
            <PortfolioItem 
              filename="ifttt-applet"
              assignment="SECTION 3 - ASSIGNMENT 2" 
              section="3" 
              title="IFTTT Applet"
            />
            <PortfolioItem 
              filename="generative-art"
              assignment="SECTION 3 - FINAL PROJECT" 
              section="3" 
              title="Generative Journal"
              autoplay="true"
            />
            <div className="pf-section-label-s3"><p>SECTION 3 </p>&nbsp;↑</div>
          </div>
        </div>
    </div>
  );
}

{/* <PortfolioItem 
              filename="album-art-collage"
              assignment="SECTION 1 - FINAL PROJECT" 
              title="Album Art Collage"
            /> */}

{/* <ul id="portfolio-list">
          <li>an <a href="./web-art/album-art-collage">interactive album art collage</a></li>
          <li>a collection of my <a href="./web-art/landscapes">landscape photography,</a></li>
          <li>a <a href="./web-art/clock">&apos;game&apos; about wasting time,</a></li>
          <li>my team&apos;s rock-paper-scissors <a href="./web-art/tournament">tournament</a></li>
          <li>my team&apos;s mcdonald&apos;s + slack <a href="https://quinn2liu.github.io/section3assignment2/index.html" target="_blank" rel="noopener noreferrer">IFTTT applet</a></li>
          <li>a <a href="./web-art/generative-art">generative art space</a> to jot down your thoughts</li>
        </ul> */}