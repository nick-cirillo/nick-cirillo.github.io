'use client';

import "../style.css";
import "../../web-art-globals.css"

export default function Home() {
  return (
    <div className="s1">
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
          <a className="button-container" href="/web-art/about">
            <div className="back-button">
              <img 
                className="back-icon"
                src="/icons/left-arrow-oxford-blue.webp" 
                alt="Back"
              ></img>
            </div>
          </a>
          <div className="header-container">
            <p className="label">SECTION 1 - ASSIGNMENT 2</p>
            <p className="title">CSS Still Life</p>
            <p className="subtitle">Who knew CSS could do all this?</p>
            <a className="visit" href="/web-art/css-still-life">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/css-still-life">
          <video className="project-image" 
              autoPlay
              loop
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/css-still-life.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Layout, Styling, and Animations</p>
            <p className="section-quote"> &ldquo;The class will work together to build an assemblage sculpture from found and classroom materials. 
              Individual students will then create a &lsquo;CSS Still Life&rsquo; that must consider HTML layout, nesting, and CSS styling. 
              Final work may employ CSS animations and any degree of design reduction and abstraction. All HTML & CSS drawings must be 
              horizontally oriented at 800x600px.&rdquo;
            </p>
          </div>
        </div>

        <div className="content-section">
          <img className="section-image section-image-wide" src="/web-art-portfolio/about-page-videos/css-still-life/assemblage.webp"></img>
          <div className="text-container">
            <p className="section-label">SUBJECT</p>
            <p className="section-title">Assemblage</p>
            <div className="section-body">
              The class created an assemblage from a variety of materials, which became the basis for my CSS still life. 
              I took the picture at this particular angle to see if I could replicate the perspective in CSS, rather than trivialize
              the challenge by taking the picture from the top-down. 
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">LAYOUT, STYLING, ANIMATIONS</p>
            <p className="section-title">CSS Still Life</p>
            <div className="section-body">
              Recreating the assemblage in perspective became quite the challenge. CSS is far from a 3D graphics
              engine, and thus, I built a jury-rigged solution using a combination of absolute positioning, z-indexing, 
              nesting, and the CSS transform and perspective properties. Absolutely no attempt at best practice was made.
              <div className="section-body-break"></div>
              I also began to use animations in this assignment. These were simple hover transitions, one of which lights up the screen
              of the KORG metronome, wihle the other reveals the reflective surface of the CD.
            </div>
          </div>
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/thumbnail-gifs/css-still-life.webm" type="video/webm"/>
          </video>
        </div>
      </div>
    </div>
  );
}