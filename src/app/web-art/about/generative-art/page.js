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
            <p className="label">SECTION 3 - FINAL PROJECT</p>
            <p className="title">Generative Journal</p>
            <p className="subtitle">You paint yourself white / And fill up with noise</p>
            <a className="visit" href="/web-art/generative-art">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/generative-art">
          <video className="project-image" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/generative-art.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Generative Art</p>
            <p className="section-quote">&ldquo;Using p5.js, students will program a generative design that employs functions,
               loops, and conditionals. Designs must also incorporate an element of randomness or chance in their code. Students 
               will work to embed this design within a separate website that also incorporates designed and user-interactive elements.&rdquo;</p>
          </div>
        </div>

        <div className="content-section">
          <div className="section-image">
          <img className="section-image-narrow" src="/web-art-portfolio/about-page-videos/generative-art/inrainbowscover.webp"/>
          </div>
          <div className="text-container">
            <p className="section-label">INSPIRATION</p>
            <p className="section-title">In Rainbows</p>
            <div className="section-body">
              I was interested in creating a program with some degree of interactivity. As I have often done in this class, I looked to
              music for inspiration. The cover to Radiohead&apos;s <span style={{fontStyle: 'italic'}}>In Rainbows,</span> created by Stanley Donwood, piqued my interest, and 
              made me think about how words can overlay with visuals.
              <div className="section-body-break"></div> 
              Thus, when creating my generative art piece, I sought to dynamically create a sort of colorful picture with text overlayed.
              I even used the same font, Transport, to call back more directly to this piece.
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">P5.JS PROGRAM</p>
            <p className="section-title">Generative Keypresses</p>
            <div className="section-body">
              To begin, the page suggests that it is an empty space for one's thoughts. No indication of interactivity is given, so the 
              piece is unveiled only to the curious visitor who tries to start typing. Typing a consonant will create red, green, or blue circles; 
              typing a vowel will create cyan, magenta, or yellow circles; typing anything else creates a black or white rectangle or triangle.
              <div className="section-body-break"></div>
              As for the themes of the piece - the contemplative text suggests a journaling environment,
              which is why I named the piece &lsquo;Generative Journal,&rsquo; but really, anything can be typed. 
              <div className="section-body-break"></div>
              In the video to the right,
              I am typing the lyrics to &ldquo;Nude&rdquo; from <span style={{fontStyle: 'italic'}}>In Rainbows,</span> which contains the phrase
              &ldquo;Paint yourself white / and fill up with noise.&rdquo; These lyrics, which I found only after completing this project, felt 
              relevant to what I had created: Despite starting with a blank canvas, one eventually fills with noise, which can obscure and confuse
              our thoughts and words.
            </div>
          </div>
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/thumbnail-gifs/generative-art.webm" type="video/webm"/>
          </video>
        </div>
      </div>
    </div>
  );
}