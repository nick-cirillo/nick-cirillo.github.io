'use client';

import "../style.css";
import "../../web-art-globals.css"

export default function Home() {
  return (
    <div className="s2">
      <div id="pf-header-banner">
          <a id="pf-readings-button" href="./web-art/readings">
            <img 
              id="pf-readings-icon"
              src="/icons/open-book.webp" 
              alt="Readings"
            ></img>
          </a>
          <a id="pf-header-name" href="/">Nicholas Cirillo</a>
          <a id="pf-course-button" href="https://www.design.upenn.edu/courses/dsgn-1020" target="_blank" rel="noopener noreferrer">
            <img 
              id="pf-course-icon"
              src="/icons/penn-shield.webp" 
              alt="Readings"
            ></img>
          </a>
        </div>

      <div className="content">
        <div className="title-section">
          <a className="button-container" href="./">
            <div className="back-button">
              <img 
                className="back-icon"
                src="/icons/left-arrow-oxford-blue.webp" 
                alt="Back"
              ></img>
            </div>
          </a>
          <div className="header-container">
            <p className="label">SECTION 2 - FINAL PROJECT</p>
            <p className="title">Pong Clock</p>
            <p className="subtitle">Time flies when you&apos;re having fun</p>
            <a className="visit" href="/web-art/clock">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/clock">
          <video className="project-image" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/clock.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">P5.js Clock</p>
            <p className="section-quote">&ldquo;Computational science and, by proxy, web design have a 
              unique history tethered to the users&apos; system clock. Students will follow a formalized process
               from brainstorming and sketching to prototyping and construction to create a browser-based 
               design that employs the system clock&apos;s 3 basic events (seconds, minutes, hours) using p5.js.
                Your &lsquo;clock&rsquo; doesn&apos;t need to resemble a traditional clock, and may instead employ other 
                functions that are triggered by these events.&rdquo;</p>
          </div>
        </div>

        <div className="content-section">
          <img className="section-image section-image-wide" src="/web-art-portfolio/about-page-videos/clock/brainstorming.webp"></img>
          <div className="text-container">
            <p className="section-label">BRAINSTORMING</p>
            <p className="section-title">Initial Ideas</p>
            <div className="section-body">
              Before beginning to code, I brainstormed several ideas, including a simple liftoff clock, a spiraling clock 
              to represent the sometimes-dreary forward march of time, and finally, a pong clock, in which the time is bounced around
              like the pong ball. 
              <div className="section-body-break"></div>
              I thought of the phrase &ldquo;time flies when you&apos;re having fun&ldquo; right away - but I had not yet 
              given it the mocking connotation that it carries in the final product, thinking 
              instead about time (the clock) literally flying across the screen.
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">INTERACTIVITY</p>
            <p className="section-title">Game Modes</p>
            <div className="section-body">
              The pong clock has two modes, single-player and two-player. In single-player mode, the player controls the left paddle,
              while a computer player controls the right paddle. In two-player mode, one player controls each paddle.
              <div className="section-body-break"></div>
              The lefthand player controls the paddle using the E and D keys, while the righthand player uses the I and K keys.
              Thus, the paddle can be comfortably controlled from the hand&apos;s resting position on the keyboard.

            </div>
          </div>
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/about-page-videos/clock/two-player.webm" type="video/webm"/>
          </video>
        </div>

        <div className="content-section">
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
              <source src="/web-art-portfolio/about-page-videos/clock/single-player.webm" type="video/webm"/>
          </video>
          <div className="text-container">
            <p className="section-label">SYSTEM CLOCK</p>
            <p className="section-title">More Clock Than Game</p>
            <div className="section-body">
              In single-player mode, the computer player simply tracks the y-value of the clock. If the clock is traveling above a certain 
              horizontal velocity, the computer player has a small chance of stalling and messing up. This means the player has no real
              strategy except to outlast the computer. 
              <div className="section-body-break"/>
              In either mode, considering how slowly the clock usually moves, the player will have to sit through many slow 
              volleys, especially on larger monitors. This forces the player to watch the seconds on the clock tick by.
              This is an intentional design choice that highlights the passage of time.
              <div className="section-body-break"/>
              Reinforcing this theme are the repeating messages at the end of each round, which grow more sinister with each passing game.
              With messages like &ldquo;WHY SPEND YOUR TIME ON THIS?&rdquo; and &ldquo;TICK TOCK TICK TOCK,&rdquo; the player must 
              contend with whether they spend too much time on useless diversions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}