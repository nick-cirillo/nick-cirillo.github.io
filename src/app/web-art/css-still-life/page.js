'use client';

import "./css-still-life.css";

export default function Page() {
  return (
    <div>
        <div className="back-button-container">
            <a id="back-button" href="./" className="back-button">&#x2190;</a>
        </div>
        <div id="mobile-text">Try this one out on a computer!</div>
        <div id="still-life-container">
            <div id="floor">
                <div id="items">
                <div id="pork-roll">
                    <div id="pork-roll-top">
                    <div id="pork-roll-circle">
                        <div id="pork-roll-label">
                        <span id="taylor">Taylor</span>           </div>
                    </div>
                    </div>
                    <div id="pork-roll-side-bottom"></div>
                    <div id="pork-roll-side-right">
                    <div id="pork-roll-barcode-container"> 
                        <div class="pork-roll-barcode"></div>
                        <div class="pork-roll-barcode"></div>
                        <div class="pork-roll-barcode"></div>
                        <div class="pork-roll-barcode"></div>
                        <div class="pork-roll-barcode"></div>
                        <div class="pork-roll-barcode"></div>
                        <div class="pork-roll-barcode"></div>
                        <div class="pork-roll-barcode"></div>
                        </div>
                    </div>
                </div>
                <div id="book">
                    <div id="book-top"><span id="NEC">NEC</span></div>
                    <div id="book-side"></div>
                </div>
                <div id="korg">
                    <div id="korg-top">
                    <div id="korg-oval-button-left"></div>
                    <div id="korg-screen"></div>
                    <div id="korg-oval-button-right"></div>
                    <div id="korg-circle-button"></div>
                    <p id="korg-text"><br/><span id="tm50-span"> TM-50</span><br/>KORG</p>
                    </div>
                    <div id="korg-side-bottom"></div>
                    <div id="korg-side-right"></div>
                </div>
                <div id="cd">
                    <div id="cd-top">
                    <div id="cd-disk-gradient"></div>
                    <div id="cd-disk"></div>
                    
                    <div id="cd-disk-center"></div>
                    <div id="cd-disk-dot"></div>
                    </div>
                    <div id="cd-side-bottom"></div>
                    <div id="cd-side-right"></div>
                </div>
                </div>
            </div>
        </div>

    </div>
  );

}