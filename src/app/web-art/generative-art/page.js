'use client';

import { useEffect, useState } from "react";
import "./generative-art.css";

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

      const generativeArtScript = document.createElement('script');
      generativeArtScript.src = "/scripts/generative-art.js";
      generativeArtScript.async = true;
      document.body.appendChild(generativeArtScript);
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
        <a id="back-button" href="./about/generative-art" className="back-button">&#x2190;</a>
        <div id="mobile-text">try this one out on a computer!</div>
      </div>
      <div id="mobile-text">try this one out on a computer!</div>
    </div>
  );
}
