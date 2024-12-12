'use client';

import "../style.css";
import "../../web-art-globals.css"

export default function Home() {
  return (
    <div className="s3">
      <div id="pf-header-banner">
          <a id="pf-readings-button" href="/web-art/readings">
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
            <p className="label">SECTION 3 - ASSIGNMENT 1</p>
            <p className="title">Rock-Paper-Scissors Tournament</p>
            <p className="subtitle">Rock paper scissors lizard Spock</p>
            <a className="visit" href="/web-art/tournament">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/tournament">
          <video className="project-image" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/tournament.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Performable Program / Script</p>
            <p className="section-quote">&ldquo;Individually or in small groups of 2 or 3, students will design and write 
              a program or script to be performed. This can be taken literally, as in your script is intended to be enlivened 
              by actors. This can be taken loosely and all terms can be creatively interpreted. Regardless, all performances
               must incorporate learned principles of scripted &lsquo;functions,&rsquo; and must also include an element of &lsquo;chance.&rsquo;&rdquo;</p>
          </div>
        </div>

        <div className="content-section">
          <video className="section-image section-image-wide" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/tournament-video/tournament.mp4" type="video/mp4"/>
          </video>
          <div className="text-container">
            <p className="section-label">SCRIPT</p>
            <p className="section-title">Tournament Rules</p>
            <div className="section-body">
              My teammates Shruthi and Quinn had the idea of running a rock-paper-scissors tournament at a meeting for Theta Tau, 
              an engineering fraterinity at Penn in which they are members. Our &lsquo;script,&rsquo; then, was the ruleset of the tournament.
              <div className="section-body-break"/>
              Shruthi and Quinn recorded the tournament using a classroom camera, which captured the entire event overhead.
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">PRESENTATION</p>
            <p className="section-title">Webpage</p>
            <div className="section-body">
              I created a webpage to display the tournament video, embedding it into the page and adding the tournament winners and ruleset. I 
              used a variety of fonts and colors to give the page a &ldquo;my dad was the webmaster in the 90&apos;s and he
              uploaded this video&rdquo; vibe.
            </div>
          </div>
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/thumbnail-gifs/tournament.webm" type="video/webm"/>
          </video>
        </div>
      </div>
    </div>
  );
}