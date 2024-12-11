import "./portfolio-item.css";
import { useRef, useEffect } from 'react';

export default function PortfolioItem({ filename, assignment, section, title }) {
    const videoRef = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            videoRef.current.play();
        };

        const handleMouseLeave = () => {
            videoRef.current.pause();
        };

        const itemElement = itemRef.current;
        itemElement.addEventListener('mouseenter', handleMouseEnter);
        itemElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            itemElement.removeEventListener('mouseenter', handleMouseEnter);
            itemElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <a 
            className="pf-item" 
            href={`/web-art/about/${filename}`}
            ref={itemRef}
        >
            <div className={`pf-thumbnail-border-s${section}`}>
                <video 
                    ref={videoRef} 
                    className="pf-thumbnail" 
                    loop 
                    muted 
                    playsInline
                >
                    <source src={`/web-art-portfolio/thumbnail-gifs/${filename}.webm`} type="video/webm"/>
                </video>
            </div>
            <div className="pf-label">
                <p className={`pf-label-assignment-s${section}`}>{ assignment }</p>
                <p className="pf-label-title">{ title }</p>
            </div>
        </a>
    );
}