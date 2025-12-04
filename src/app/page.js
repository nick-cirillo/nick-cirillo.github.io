import "./app.css";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="app-content">
        <div className="text-content">
          <p className="title-text">nick cirillo</p>

          <p>I'm a student at the University of Pennsylvania, and soon I'll be working at Northslope Technologies.</p>

          <p>
            <a href="https://linkedin.com/in/nicholas-cirillo-/" target="_blank" rel="noopener noreferrer">linkedin</a>
          </p>
          <p>
            <a href="https://github.com/nick-cirillo" target="_blank" rel="noopener noreferrer">github</a>
          </p>

          <p>
            <a href="https://instagram.com/nick.pics.cirillo/" target="_blank" rel="noopener noreferrer">photography</a> (best viewed on the mobile instagram app)
          </p>

          <p>
            <a href="./web-art">web doodles</a> (from penn's dsgn 1020)
          </p>


          <div id="social-icons">
            <a className="social-icon" href="https://linkedin.com/in/nicholas-cirillo-/" target="_blank" rel="noopener noreferrer"><img id="linkedin" src="./social-icons/linkedin.svg" alt="the Linkedin logo" /></a>
            <a className="social-icon" href="https://github.com/nick-cirillo/" target="_blank" rel="noopener noreferrer"><img id="github" src="./social-icons/github.svg" alt="the GitHub logo" /></a>
            <a className="social-icon" href="https://instagram.com/nick.pics.cirillo/" target="_blank" rel="noopener noreferrer"><img id="instagram" src="./social-icons/instagram.svg" alt="the Instagram logo" /></a>
          </div>
        </div>
        <img className="image" id="timber" src="./homepage/timber.jpg" alt="a photo of Timber, the world's cutest puppy" />
      </div>
    </div>
  );
}
