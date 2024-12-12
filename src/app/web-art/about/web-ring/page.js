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
            <p className="label">SECTION 2 - ASSIGNMENT 1</p>
            <p className="title">Web Ring</p>
            <p className="subtitle">If you liked it then you shoulda put a ring on it</p>
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
            <source src="/web-art-portfolio/thumbnail-gifs/web-ring.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Web Ring Between Publications</p>
            <p className="section-quote">&ldquo;As a class, students will work together to design and build a Web Ring that links and 
              loops between all students&apos; web publications (Section 1 Final Project). The Web Ring may be an external site of links 
              (an index), but must also incorporate some form of modular code that is implemented on each student&apos;s publication site.&rdquo;</p>
          </div>
        </div>

        <div className="content-section">
          <div className="section-image">
            <div className="section-image-inner" style={{display: "flex", justifyContent: "center", alignItems: 'center', gap: '20px'}}>
              <div style={{width: '240px', height: '80px' }}><img src="/webring/kenzie.png" alt="Left Web Ring"/></div>
              <div style={{width: '150px', height: '150px' }}><img src="/webring/shruthi.png" alt="Right Web Ring" /></div>
            </div>
          </div>
          <div className="text-container">
            <p className="section-label">DESIGN STANDARD</p>
            <p className="section-title">Web Ring Implementation</p>
            <div className="section-body">
              As a group, we decided to create a two-directional webring that links between our works in a loop.
              If one were to draw the network of our webring, it would create a circle. This also makes our webring more resilient - if one
              page or one link breaks, the ring can still function. (At the time of publishing, one link has broken, but the ring still holds.)
              <div className="section-body-break"/>
              Visually, we decided that each page would integrate buttons in the bottom left and bottom right that would lead to 
              the previous and next pages in the ring, respectively. These buttons would incorporate some element of the page to which they lead.
              <div className="section-body-break"/>
              On the left, you can see the webring that leads to Kenzie&apos;s page. 
              On the right, you can see the webring that leads to Shruthi&apos;s page.
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">LEFT LINK</p>
            <p className="section-title">Kenzie&apos;s Style</p>
            <div className="section-body">
              Kenzie&apos;s website called immediately to themes of space, perhaps even leaning into the conspiratorial.
              Red circles and neon green arrows stand out against the darkness of space, with the iconic blue marble zooming us in
              to what eventually becomes the familiar landscape of University City, Philadelphia. 
              <div className="section-body-break"/>
              To integrate Kenzie&apos;s style into my left link, the button to her site is a green arrow pointing to a red circle with 
              the earth overlayed. I created this asset in photoshop using shapes and the photo of Earth from her website.
            </div>
          </div>
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/about-page-videos/web-ring/kenzie.webm" type="video/webm"/>
          </video>
        </div>

        <div className="content-section">
          <video className="section-image section-image-wide"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/web-art-portfolio/about-page-videos/web-ring/shruthi.webm" type="video/webm"/>
          </video>
          <div className="text-container">
            <p className="section-label">RIGHT LINK</p>
            <p className="section-title">Shruthi&apos;s Style</p>
            <div className="section-body">Shruthi&apos;s website is all about delicious drinks. The site prominently features illustrations
              of various types of drinks, as well as guides on how to make them. Shruthi herself features in an image, and the site links a 
              Rickroll to add to the playfulness.
              <div className="section-body-break"/>
              To integrate Shruthi&apos;s style into my right link, the button to her site is a hand pointing right while holding a 
              cup of coffee. I&apos;m no illustrator, so I used Adobe Firefly to generate the image in a cartoonish style.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}