import "./portfolio-item.css";
import Image from 'next/image';

export default function PortfolioItem({ filename, assignment, section, title }) {
    return (
        // <a className="pf-item" href={`/web-art/about/${filename}`}>
        <a className="pf-item" href={`/web-art/${filename}`}>
            <div className={`pf-thumbnail-border-s${section}`}>
                {/* <Image 
                    className="pf-image" 
                    src={`/web-art-portfolio/thumbnail-gifs/${filename}.webm`}
                    alt={title}
                    // layout="intrinsic"
                    width={100}
                    height={100}
                /> */}
                <video className="pf-thumbnail" autoPlay loop muted playsInline>
                    <source src={`/web-art-portfolio/thumbnail-gifs/${filename}.webm`} type="video/webm"/>
                </video>
            </div>
            <div className="pf-label">
                <p className="pf-label-assignment">{ assignment }</p>
                <p className="pf-label-title">{ title }</p>
            </div>
        </a>
    );
  }