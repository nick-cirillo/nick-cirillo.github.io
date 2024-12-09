'use client';

import "./web-art.css";

export default function Home() {
  return (
    <div>
        <ul id="portfolio-list">
          <li>an <a href="./web-art/music-shelf">interactive album art collage</a></li>
          <li>a collection of my <a href="./web-art/landscapes">landscape photography,</a></li>
          <li>a <a href="./web-art/clock">&apos;game&apos; about wasting time,</a></li>
          <li>my team&apos;s rock-paper-scissors <a href="./web-art/tournament">tournament</a></li>
          <li>my team&apos;s mcdonald&apos;s + slack <a href="https://quinn2liu.github.io/section3assignment2/index.html" target="_blank" rel="noopener noreferrer">IFTTT applet</a></li>
          <li>a <a href="./web-art/generative-art">generative art space</a> to jot down your thoughts</li>
        </ul>
    </div>
  );
}