'use client';

import "../style.css";
import "../../web-art-globals.css"

export default function Home() {
  return (
    <div className="s2">
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
            <p className="label">SECTION 2 - ASSIGNMENT 2</p>
            <p className="title">Landscape Photography</p>
            <p className="subtitle">Oh, the places you&apos;ll go</p>
            <a className="visit" href="/web-art/landscapes">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/landscapes">
          <video className="project-image" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/landscapes.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Hover Effects / CSS Selectors / Alt Text / Responsive Layout</p>
            <p className="section-quote">&ldquo;Students will create a self-contained, single-page site that employs 
              hover effects and CSS selectors to assist and encourage user interaction. Your site must include a minimum 
              of 5 images (observing optimization and best practices) and all elements must contain adequate metadata/alt 
              text. Your site must also account for viewport sizes to serve comparable or alternate user experiences.&rdquo;</p>
          </div>
        </div>

        <div className="content-section">
          <video className="section-image section-image-wide" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/thumbnail-gifs/landscapes.webm" type="video/webm"/>
          </video>
          <div className="text-container">
            <p className="section-label">EFFECTS AND SELECTORS</p>
            <p className="section-title">Interactive Photographs</p>
            <div className="section-body">
              Around the time of this assignment, my photos app surfaced up some of my favorite landscape shots from New Mexico.
              I was inspired to search through my camera roll for the best landscape photos I have taken, and landed on these five - 
              two from Philmont Scout Ranch in New Mexico, one from Breakneck Ridge in New York, one from Italy&apos;s Cinque Terre,
              and one from Jim Thorpe, Pennsylvania.
              <div className="section-body-break"/>
              I used CSS selectors and hover effects to add interactive details to the gallery. On hovering over each photo, the location
              and date of capture is displayed in white, and the photo is blurred and desaturated to provide better contrast to the text.
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">METADATA</p>
            <p className="section-title">Alt Text</p>
            <div className="section-body">
              Each image includes descriptive alt text. Since many users who rely on alt text are visually impaired,
              I imbued my alt text with vivid sensory descriptions other than visuals, such as sound, feeling, and narrative.
            </div>
          </div>
          <img className="section-image section-image-wide" src="/web-art-portfolio/about-page-videos/landscapes/alt-text.webp">
          </img>
        </div>

        <div className="content-section">
          <video className="section-image section-image-wide"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/web-art-portfolio/about-page-videos/landscapes/responsive.webm" type="video/webm"/>
          </video>
          <div className="text-container">
            <p className="section-label">ACCESSIBILITY</p>
            <p className="section-title">Responsive Layout</p>
            <p className="section-body">Using @media rules, I created a separate mobile layout. 
              I changed the layout of the flex grid to place all images in one column, rather than separating them
              into two rows. I also ensured the hover effects worked by tapping them on mobile devices using the :active selector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}