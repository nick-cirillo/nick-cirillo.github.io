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
            <p className="label">SECTION 1 - FINAL PROJECT</p>
            <p className="title">Album Art Collage</p>
            <p className="subtitle">Point-and-click through 10 different tracks</p>
            <a className="visit" href="/web-art/album-art-collage">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/album-art-collage">
          <video className="project-image" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/album-art-collage.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Online Publication / Grid Layout</p>
            <p className="section-quote">&ldquo;Students will create an online publication (fan site, zine, exhibition, etc) 
              that includes 3-5 separate pages and a navigational tool/toolset. No single page and its linked content can be 
              larger than 5 megabytes.&rdquo;</p>
          </div>
        </div>

        <div className="content-section">
          <video className="section-image section-image-wide" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/thumbnail-gifs/album-art-collage.webm" type="video/webm"/>
          </video>
          <div className="text-container">
            <p className="section-label">ONLINE PUBLICATION</p>
            <p className="section-title">Interactive Collage</p>
            <div className="section-body">
              I created this interactive collage to mash up album art from 
              some of my favorite musicians in an interactive way. 
              Easy to spot are R.E.M., Steely Dan, 
              and System of a Down.
              <div className="section-body-break"/>
              Hovering over a visual element highlights it, and a click leads you to a song from
              the corresponding album. There are ten tracks in total hidden in the collage.
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">GRID LAYOUT</p>
            <p className="section-title">Song Pages</p>
            <div className="section-body">
              Each piece of album art leads to a page for a track on that album. 
              Each of these pages highlights an <a className="section-body-link" href="./ascii-album-art" target="_blank" rel="noopener noreferrer">
                 ASCII-fied version of the album art,
              </a> and shows the lyrics to the song.
              The elements of the page are arranged in a column using flexbox, satisfying the grid layout objective.
              <div className="section-body-break"/>
              You can also listen to the song with the Play button, which should play a hidden YouTube embed. 
              It can be inconsistent, so try reloading the page if it doesn&apos;t work.
            </div>
          </div>
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/about-page-videos/album-art-collage/song-pages.webm" type="video/webm"/>
          </video>
        </div>

        <div className="content-section">
          <div className="section-image" >
            <video className="section-image-narrow"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/web-art-portfolio/about-page-videos/album-art-collage/mobile-layout.webm" type="video/webm"/>
            </video>
          </div>
          <div className="text-container">
            <p className="section-label">EXTRAS</p>
            <p className="section-title">Responsive Layout</p>
            <p className="section-body">Using @media rules, I created a separate mobile layout. 
              Since phone screens are in portrait rather than landscape, I had to fine-tune the size of the hover effects quite precisely. </p>
          </div>
        </div>
      </div>
    </div>
  );
}