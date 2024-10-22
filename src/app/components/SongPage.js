'use client';

import { useEffect, useRef, useState } from 'react';
import "./lyric-page.css";

const SongPage = ({ albumCover, songTitle, artistName, youtubeId, lyrics }) => {
  const playerRef = useRef(null);  // Reference for the iframe element
  const [player, setPlayer] = useState(null);  // State to hold the YouTube player object
  const [isPlaying, setIsPlaying] = useState(false);  // State to track whether the video is playing

  // Load the YouTube IFrame API when the component mounts
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: youtubeId,
        playerVars: {
          'playsinline': 1,
          'enablejsapi': 1,
        },
        events: {
          'onReady': (event) => {
            setPlayer(event.target);
          },
          'onStateChange': (event) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          }
        }
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, [youtubeId]);

  // Function to toggle play/pause
  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();  // Pause the video if it's currently playing
      } else {
        player.playVideo();  // Play the video if it's currently paused
      }
      setIsPlaying(!isPlaying);  // Toggle the play/pause state
    }
  };

  return (
    <div className="container-spacer">
      <div className="album-cover-container" dangerouslySetInnerHTML={{ __html: albumCover }}>
      </div>
      <div className="title-container">
        {songTitle} - {artistName}
      </div>
      <div className="music-player">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div style={{ position: 'absolute', visibility: 'hidden', height: 0 }}>
          <div id="youtube-player"></div>
        </div>
      </div>
      <div className="lyrics-container">
        <div dangerouslySetInnerHTML={{ __html: lyrics }}></div>
      </div>
    </div>
  );
}

export default SongPage;
