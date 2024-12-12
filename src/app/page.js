import "./app.css";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="app-content">
        <div className="text-content">
          <p className="title-text">nick cirillo&apos;s website.</p>
          
          <p>if you&apos;re here for professional stuff, my&nbsp;
            <a href="https://linkedin.com/in/nicholas-cirillo-/" target="_blank" rel="noopener noreferrer">linkedin</a> and&nbsp; 
            <a href="https://github.com/nick-cirillo" target="_blank" rel="noopener noreferrer">github</a>. you can also find my 
            web art portfolio <a href="./web-art">here</a>!</p>

          <p>it&apos;s a compilation of work from one specific design course, and it showcases lots of frontend + fun web stuff. 
            I&apos;ll compile a more holistic portfolio eventually.</p>

          <p>for now, here is a picture of Timber :)</p>

          <p>if you&apos;d like to reach me, the best bet is through linkedin as I get emails whenever someone connects with me.</p>
          
          <div id="social-icons">
            <a className="social-icon" href="https://linkedin.com/in/nicholas-cirillo-/" target="_blank" rel="noopener noreferrer"><img id="linkedin" src="./social-icons/linkedin.svg" alt="the Linkedin logo"/></a>
            <a className="social-icon" href="https://github.com/nick-cirillo/" target="_blank" rel="noopener noreferrer"><img id="github" src="./social-icons/github.svg" alt="the GitHub logo"/></a>
            <a className="social-icon" href="https://instagram.com/nick.p.cirillo/" target="_blank" rel="noopener noreferrer"><img id="instagram" src="./social-icons/instagram.svg" alt="the Instagram logo"/></a>
          </div>
        </div>
        <img className="image" id="timber" src="./homepage/timber.jpg" alt="a photo of Timber, the world's cutest puppy"/>
      </div>
    </div>
  );
}
