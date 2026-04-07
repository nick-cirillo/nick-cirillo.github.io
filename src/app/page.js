import "./app.css";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="app-content">
        <div className="text-content">
          <p className="title-text">nick cirillo</p>

          <p>Hi, I&apos;m Nick! I&apos;m a student at the <a href="https://www.upenn.edu/" target="_blank" rel="noopener noreferrer">University of Pennsylvania</a>, and soon I&apos;ll be working at <a href="https://www.northslope.com/" target="_blank" rel="noopener noreferrer">Northslope</a>.</p>

          <p>
            <a href="https://linkedin.com/in/nicholas-cirillo-/" target="_blank" rel="noopener noreferrer">linkedin</a>
          </p>
          <p>
            <a href="https://github.com/nick-cirillo" target="_blank" rel="noopener noreferrer">github</a>
          </p>

          <p>
            <a href="https://instagram.com/nick.pics.cirillo/" target="_blank" rel="noopener noreferrer">photography</a>
          </p>

          <p>
            <a href="./web-art">web doodles</a> (from penn&apos;s dsgn 1020)
          </p>
        </div>
        <img className="image" id="timber" src="./homepage/timber.jpg" alt="a photo of Timber, the world&apos;s cutest puppy" />
      </div>
    </div>
  );
}
