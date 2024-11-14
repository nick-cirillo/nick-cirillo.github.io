import "./tournament.css";

export default function Home() {
  return (
    <div id="page-container">
        <div className="back-button-container">
            <a id="back-button" href="/" className="back-button">&#x2190;</a>
        </div>
        <div className="content-container">
            <p className="title-text"><span id="rock-text">rock,</span> <span id="paper-text">paper,</span> <span id="scissors-text">scissors...</span><br></br><span id="shoot-text">shoot!</span></p>
            <video id="rps-video" controls width="500" autoplay muted>
                <source src="./tournament-video/tournament.mp4#t=0.5" type="video/mp4" preload="metadata"/>
                <p>your browser doesn't support video embeds</p>
            </video>
            <p className="subtitle-text">Winner: Logan Cho. Runner-up: Ajay Sheth. Semifinalists: Tendai Ball, Shruti Agarwal.</p>
            <p className="subtitle-text">Tournament Organizers: Quinn Liu, Shruthi Kunjur, Theta Tau Penn. Webpage: Nick Cirillo.</p>
        </div>
    </div>
  );
}
