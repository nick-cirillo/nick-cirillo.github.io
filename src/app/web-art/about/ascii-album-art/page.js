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
            <p className="label">SECTION 1 - ASSIGNMENT 1</p>
            <p className="title">ASCII Album Art</p>
            <p className="subtitle">Sade in Symbols</p>
            <a className="visit" href="/web-art/ascii-album-art">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/ascii-album-art">
          <video className="project-image" 
              autoPlay='false'
              loop 
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/ascii-album-art.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Design System and ASCII Art</p>
            <p className="section-quote">&ldquo;In small groups of 2 or 3, students will work together to 
              establish a system that individual students will then utilize to recreate an image with Binary, 
              ASCII, or Unicode characters. Groups may reconvene to reassess their group&apos;s systems or individual 
              students may &lsquo;fork the code&rsquo; (within reason) to better serve their images. Final text images must 
              be a minimum of 60 character rows/columns along the shortest edge.&rdquo;
            </p>
          </div>
        </div>

        <div className="content-section">
          <video className="section-image section-image-wide"
            autoPlay='false' 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/thumbnail-gifs/ascii-album-art.webm" type="video/webm"/>
          </video>
          <div className="text-container">
            <p className="section-label">DESIGN SYSTEM</p>
            <p className="section-title">ASCII Sade</p>
            <div className="section-body">
              Serendipitiously, one of my teammates for this project walked into class wearing a Sade shirt. 
              Prompted by his shirt, I suggested we recreate Sade's album covers in ASCII.
              <div className="section-body-break"/>
              I recreated the cover to Sade's 1984 single &ldquo;Hang on to Your Love,&rdquo; and opted for a full-color,
              light-on-dark ASCII style, which made the bright colors pop.
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}