import "./clock.css";

export default function Home() {
  return (
    <div id="page-container">
        <div className="back-button-container">
            <a id="back-button" href="/" className="back-button">&#x2190;</a>
        </div>
        <div id="mobile-text">you should try this one out on a computer</div>
        <iframe id="clock-embed" src="https://editor.p5js.org/nick-c/full/cAM2w4IBF" frameBorder="0"></iframe>
        <div id="zoom-text">zoom in!</div>
    </div>
  );
}
