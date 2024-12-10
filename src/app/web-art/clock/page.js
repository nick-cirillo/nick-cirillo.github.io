'use client';

import { useEffect, useState } from "react";
import "./clock.css";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Set hydrated to true after component mounts
    setHydrated(true);

    // Dynamically load external scripts after hydration
    const loadScripts = () => {
      const p5Script = document.createElement('script');
      p5Script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js";
      p5Script.async = true;
      document.body.appendChild(p5Script);

      const pongClockScript = document.createElement('script');
      pongClockScript.src = "/scripts/pong-clock.js";
      pongClockScript.async = true;
      document.body.appendChild(pongClockScript);
    };

    // Only load scripts after hydration
    if (hydrated) {
      loadScripts();
    }

    // Clean up the scripts when the component unmounts
    return () => {
      document.querySelectorAll('script[src]').forEach(script => script.remove());
    };
  }, [hydrated]);

  if (!hydrated) {
    // Return null on the first render to avoid mismatch
    return null;
  }

  return (
    <div>
      <meta charSet="utf-8" />
      <div className="back-button-container">
        <a id="back-button" href="./" className="back-button">&#x2190;</a>
      </div>
      <div id="mobile-text">try this one out on a computer!</div>
      <div id="game-container"></div>
      {/* <div id="zoom-text">zoom in!</div> */}
    </div>
  );
}