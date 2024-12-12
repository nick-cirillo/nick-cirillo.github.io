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
            <p className="label">SECTION 3 - ASSIGNMENT 2</p>
            <p className="title">IFTTT Applet</p>
            <p className="subtitle">I&apos;m lovin&apos; it</p>
            <a className="visit" href="/web-art/ifttt-applet">VISIT PROJECT</a>
          </div>
        </div>

        <a className="content-section" href="/web-art/ifttt-applet">
          <video className="project-image" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
            <source src="/web-art-portfolio/thumbnail-gifs/ifttt-applet.webm" type="video/webm"/>
          </video>
        </a>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Online Publication / Grid Layout</p>
            <p className="section-quote">&ldquo;An API (Application Programming Interface) allows applications, tools, or services 
              to safely &lsquo;share&rsquo; restricted data with other applications, tools, or services. The availability of this &lsquo;public-facing&rsquo;
               data allows developers to build connected/supplementary platforms that may ease or augment a user&apos;s experience. 
               In teams of two (+), students will work together to create and execute an interactive design tool that employs API 
               linking with IFTTT (If This Then That). Teams must also design and develop a website that serves to promote this tool
                and document its real-life application and usage.&rdquo;</p>
          </div>
        </div>

        <div className="content-section">
          <img className="section-image section-image-wide" src="/web-art-portfolio/about-page-videos/ifttt-applet/applet.webp"></img>
          <div className="text-container">
            <p className="section-label">APPLET</p>
            <p className="section-title">IFTTT Integration</p>
            <div className="section-body">
              My teammates Quinn, Shruthi, Anastasia, and I played around with a few different ideas before settling on a McDonald&apos;s-themed
               applet that integrates with Slack. We decided to play into the silliness of connecting McDonald&apos;s, a fast food restaurant,
                with a professional messaging application.
                <div className="section-body-break"/>
                In this applet, if the user enters the radius of a certain University City McDonald&apos;s,
                 their Slack account will automatically broadcast a message to a specific channel asking everyone to join them at McDonald&apos;s.
            </div>
        
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">PROMOTION</p>
            <p className="section-title">Webpage</p>
            <div className="section-body">
              Our team also created a webpage to promote our applet. Quinn started off the design by adding a gradient of McDonald&apos;s colors,
              as well as by adding an AI-generated image of a lonely customer.
              <div className="section-body-break"/>
              I finished off the webpage by adding pleasing drop shadows, unifying the layout with flexbox, linking the IFTTT applet, 
              and adjusting the copy.
            </div>
          </div>
          <video className="section-image section-image-wide"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/web-art-portfolio/thumbnail-gifs/ifttt-applet.webm" type="video/webm"/>
          </video>
        </div>
      </div>
    </div>
  );
}