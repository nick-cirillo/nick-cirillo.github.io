import Image from "next/image";
import "./landscapes.css";

export default function Home() {
  return (
    <div>
    <div className="back-button-container">
        <a id="back-button" href="/" className="back-button">&#x2190;</a>
    </div>
    <div className="landscape-grid">
        <div className="landscape-row">
            <div id="title-text">here&apos;s a sampling of my landscape photography</div>
        </div>
        <div className="landscape-row">
            <div className="image-container">
                <img src="./landscape-photos/jim-thorpe.jpg" alt="a photo of a bubbling river, surrounded by trees adorned by crisp fall leaves"/>
                <div className="overlay-text">Lehigh River<br></br>Jim Thorpe, PA<br></br>October 19, 2024</div>
            </div>
            <div className="image-container">
                <img src="./landscape-photos/cinque-terre.jpg" alt="a photo of houses built haphazardly across a cliff, overlooking water gently waving in the wind"/>
                <div className="overlay-text">Riomaggiore<br></br>The Cinque Terre<br></br>La Spezia, Italia<br></br>July 19, 2024</div>
            </div>
            <div className="image-container">
                <img src="./landscape-photos/breakneck-ridge.jpg" alt="a photo of a mountain, wrapped in dense, humid fog, under a cold sky"/>
                <div className="overlay-text">Breakneck Ridge<br></br>Cold Spring, NY<br></br>December 27, 2023</div>
            </div>
        </div>
        <div className="landscape-row">
            <div className="image-container">
                <img src="./landscape-photos/mt-baldy.jpg" alt="a photo of an arid plain, covered in a thin grass, with a dirt path winding away to who knows where"/>
                <div className="overlay-text">Mt. Baldy<br></br>Philmont Scout Ranch<br></br>Cimarron, NM<br></br>August 7, 2019</div>
            </div>
            <div className="image-container">
                <img src="./landscape-photos/philmont.jpg" alt="a photo of a vivid sunset and silhouetted trees in absolute silence"/>
                <div className="overlay-text">Middle Ponil Campsite<br></br>Philmont Scout Ranch<br></br>Cimarron, NM<br></br>August 4, 2019</div>
            </div>
        </div>
    </div>
    </div>
  );
}
