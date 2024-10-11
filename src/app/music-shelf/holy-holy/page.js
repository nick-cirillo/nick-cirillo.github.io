'use client'; 

import "../lyric-page.css";
import { useEffect, useRef, useState } from 'react';

const Page = () => {
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
			videoId: 'H1M3boFfeng',
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
	  }, []);
  
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
	<div>
	<div className="back-button-container">
		<a id="back-button" href="/music-shelf" className="back-button">&#x2190;</a>
	</div>
    <div className="container-spacer">
      <div className="album-cover-container">
        <span></span>
		<span style={{color:"#feca0a"}}>@</span>
		<span style={{color:"#e6bd2d"}}>[</span>
		<span style={{color:"#e7bd2d"}}>[</span>
		<span style={{color:"#e5bc2f"}}>[</span>
		<span style={{color:"#e0bb37"}}>M</span>
		<span style={{color:"#f7c816"}}>@</span>
		<span style={{color:"#dcb636"}}>]</span>
		<span style={{color:"#e2bc36"}}>|</span>
		<span style={{color:"#e8c02f"}}>]</span>
		<span style={{color:"#e0bb38"}}>%</span>
		<span style={{color:"#e4bd33"}}>R</span>
		<span style={{color:"#efc422"}}>Q</span>
		<span style={{color:"#e7c031"}}>#</span>
		<span style={{color:"#ebc128"}}>%</span>
		<span style={{color:"#e1ba36"}}>|</span>
		<span style={{color:"#f0c421"}}>@</span>
		<span style={{color:"#e2bc36"}}>Q</span>
		<span style={{color:"#e9c231"}}>j</span>
		<span style={{color:"#ebc12b"}}>%</span>
		<span style={{color:"#f7c714"}}>%</span>
		<span style={{color:"#feca0a"}}>@</span>
		<span style={{color:"#ffca0a"}}>@</span>
		<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</span>
		<br/>
			<span style={{color:"#feca09"}}>@</span>
			<span style={{color:"#fac810"}}>@</span>
			<span style={{color:"#fac711"}}>@</span>
			<span style={{color:"#fac810"}}>@</span>
			<span style={{color:"#f4c41a"}}>@</span>
			<span style={{color:"#fbc810"}}>@</span>
			<span style={{color:"#f9c712"}}>@</span>
			<span style={{color:"#f5c516"}}>@</span>
			<span style={{color:"#f4c31a"}}>@</span>
			<span style={{color:"#f7c615"}}>@</span>
			<span style={{color:"#f7c614"}}>@</span>
			<span style={{color:"#f9c811"}}>@</span>
			<span style={{color:"#f6c516"}}>@</span>
			<span style={{color:"#f4c419"}}>@</span>
			<span style={{color:"#fbc810"}}>@</span>
			<span style={{color:"#f3c31a"}}>@</span>
			<span style={{color:"#fac712"}}>@</span>
			<span style={{color:"#f6c616"}}>@</span>
			<span style={{color:"#f3c31a"}}>@</span>
			<span style={{color:"#fec90a"}}>@</span>
			<span style={{color:"#fec90a"}}>@</span>
			<span style={{color:"#ffca0a"}}>@</span>
			<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</span>
			<br/>
				<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</span>
				<br/>
					<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</span>
					<br/>
						<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</span>
						<span style={{color:"#fec90a"}}>@</span>
						<span style={{color:"#feca0a"}}>@</span>
						<span style={{color:"#edc121"}}>M</span>
						<span style={{color:"#c4a849"}}>C</span>
						<span style={{color:"#ac9a5d"}}>&quot;&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<span style={{color:"#b4a05f"}}>|</span>
						<span style={{color:"#b7a156"}}>*</span>
						<span style={{color:"#c0a54b"}}>T</span>
						<span style={{color:"#cfaf3b"}}>%</span>
						<span style={{color:"#fac711"}}>@</span>
						<span style={{color:"#feca09"}}>@</span>
						<span style={{color:"#ffc90a"}}>@</span>
						<span style={{color:"#feca09"}}>@</span>
						<span style={{color:"#f2c41b"}}>@</span>
						<span style={{color:"#bba352"}}>T</span>
						<span style={{color:"#a39466"}}>`</span>
						<span style={{color:"#a29366"}}>`</span>
						<span style={{color:"#ad9b5b"}}>^</span>
						<span style={{color:"#b7a053"}}>*</span>
						<span style={{color:"#d6b336"}}>%</span>
						<span style={{color:"#f4c518"}}>R</span>
						<span style={{color:"#feca0b"}}>@</span>
						<span style={{color:"#feca0a"}}>@</span>
						<span style={{color:"#ffca0a"}}>@</span>
						<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@</span>
						<br/>
							<span style={{color:"#ffca0a"}}>@@@@</span>
							<span style={{color:"#feca0a"}}>@</span>
							<span style={{color:"#f1c11c"}}>@</span>
							<span style={{color:"#f6c515"}}>@</span>
							<span style={{color:"#feca0a"}}>@</span>
							<span style={{color:"#ffca0a"}}>@</span>
							<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</span>
							<span style={{color:"#fec909"}}>@</span>
							<span style={{color:"#fac912"}}>@</span>
							<span style={{color:"#ab9a64"}}>&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span style={{color:"#c2ada4"}}>g</span>
							<span style={{color:"#9b918d"}}>,&nbsp;</span>
							<span style={{color:"#edc11f"}}>#</span>
							<span style={{color:"#feca0a"}}>@</span>
							<span style={{color:"#e2bc32"}}>M</span>
							<span style={{color:"#ccb181"}}>g</span>
							<span style={{color:"#9e9186"}}>,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span style={{color:"#a59663"}}>`</span>
							<span style={{color:"#c5a946"}}>*</span>
							<span style={{color:"#f5c516"}}>8</span>
							<span style={{color:"#feca0a"}}>@</span>
							<span style={{color:"#ffca0a"}}>@</span>
							<span style={{color:"#ffca0a"}}>@@@@@@@@@</span>
							<br/>
								<span style={{color:"#dda42e"}}>M</span>
								<span style={{color:"#e0a62d"}}>M</span>
								<span style={{color:"#c0804b"}}>|</span>
								<span style={{color:"#d59638"}}>|</span>
								<span style={{color:"#c88044"}}>|</span>
								<span style={{color:"#ba6b54"}}>|</span>
								<span style={{color:"#b15054"}}>;</span>
								<span style={{color:"#c1774a"}}>|</span>
								<span style={{color:"#d79935"}}>*</span>
								<span style={{color:"#cb8141"}}>|</span>
								<span style={{color:"#deb130"}}>]</span>
								<span style={{color:"#feca0b"}}>@</span>
								<span style={{color:"#feca0a"}}>@</span>
								<span style={{color:"#feca09"}}>@</span>
								<span style={{color:"#feca0a"}}>@</span>
								<span style={{color:"#feca09"}}>@</span>
								<span style={{color:"#fcc90e"}}>@</span>
								<span style={{color:"#feca0c"}}>@</span>
								<span style={{color:"#feca0a"}}>@</span>
								<span style={{color:"#ffca0a"}}>@</span>
								<span style={{color:"#ffca0a"}}>@@</span>
								<span style={{color:"#fec90a"}}>@</span>
								<span style={{color:"#d6b73b"}}>M</span>
								<span style={{color:"#bfb386"}}>{"}"}</span>
								<span style={{color:"#b8ac7f"}}>u</span>
								<span style={{color:"#dcc369"}}>2</span>
								<span style={{color:"#e9bf26"}}>#</span>
								<span style={{color:"#feca0a"}}>@</span>
								<span style={{color:"#feca09"}}>@</span>
								<span style={{color:"#ffca0a"}}>@</span>
								<span style={{color:"#ffca0a"}}>@@@@@@@</span>
								<span style={{color:"#feca09"}}>@</span>
								<span style={{color:"#fdcb0d"}}>@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span style={{color:"#c5afa4"}}>g</span>
								<span style={{color:"#ecc9b8"}}>$</span>
								<span style={{color:"#fdd4c2"}}>&amp;</span>
								<span style={{color:"#fdd3c2"}}>&amp;</span>
								<span style={{color:"#f9d3c2"}}>&amp;</span>
								<span style={{color:"#deb835"}}>#</span>
								<span style={{color:"#ccaf65"}}>y</span>
								<span style={{color:"#e6c098"}}>@</span>
								<span style={{color:"#ecc59a"}}>@</span>
								<span style={{color:"#ecc49a"}}>@</span>
								<span style={{color:"#e1bf98"}}>@</span>
								<span style={{color:"#b4a18d"}}>w&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span style={{color:"#e9bf23"}}>8</span>
								<span style={{color:"#ffca0a"}}>@</span>
								<span style={{color:"#ffca0a"}}>@@@@@@@@@</span>
								<br/>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#ba454b"}}>|</span>
									<span style={{color:"#b65251"}}>`</span>
									<span style={{color:"#b85851"}}>&quot;</span>
									<span style={{color:"#b55251"}}>&apos;</span>
									<span style={{color:"#b75751"}}>|</span>
									<span style={{color:"#ba6150"}}>|</span>
									<span style={{color:"#bb6450"}}>|</span>
									<span style={{color:"#b74a4e"}}>&apos;</span>
									<span style={{color:"#b35152"}}>&apos;</span>
									<span style={{color:"#c88043"}}>|</span>
									<span style={{color:"#d79834"}}>*</span>
									<span style={{color:"#d99c32"}}>*</span>
									<span style={{color:"#d69a37"}}>*</span>
									<span style={{color:"#d59336"}}>|</span>
									<span style={{color:"#ae938d"}}>*</span>
									<span style={{color:"#a98c95"}}>\&nbsp;</span>
									<span style={{color:"#ab818d"}}>=</span>
									<span style={{color:"#b6a6c2"}}>%</span>
									<span style={{color:"#c1b7ba"}}>m</span>
									<span style={{color:"#d8bd70"}}>Q</span>
									<span style={{color:"#e3be3d"}}>M</span>
									<span style={{color:"#fbc90f"}}>@</span>
									<span style={{color:"#ffca0a"}}>@</span>
									<span style={{color:"#ffca0a"}}>@@@</span>
									<span style={{color:"#ffc909"}}>@</span>
									<span style={{color:"#fecb0b"}}>@</span>
									<span style={{color:"#cbad44"}}>C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span style={{color:"#bfa9a1"}}>$</span>
									<span style={{color:"#fcd4c2"}}>&amp;</span>
									<span style={{color:"#f2cfbe"}}>B</span>
									<span style={{color:"#e8c7b8"}}>M</span>
									<span style={{color:"#f9d2c1"}}>$</span>
									<span style={{color:"#f5d0c0"}}>E</span>
									<span style={{color:"#e6c6b8"}}>&amp;</span>
									<span style={{color:"#a2967b"}}>`</span>
									<span style={{color:"#daba98"}}>W</span>
									<span style={{color:"#d4b697"}}>W</span>
									<span style={{color:"#d4b695"}}>%</span>
									<span style={{color:"#ecc599"}}>@</span>
									<span style={{color:"#ecc59a"}}>@</span>
									<span style={{color:"#debd99"}}>M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span style={{color:"#c8ab44"}}>]</span>
									<span style={{color:"#ffca0a"}}>@</span>
									<span style={{color:"#ffca0a"}}>@@@@@@@@@</span>
									<br/>
										<span style={{color:"#b17d5c"}}>j</span>
										<span style={{color:"#c6994d"}}>Q</span>
										<span style={{color:"#b9654f"}}>;</span>
										<span style={{color:"#ce843c"}}>w</span>
										<span style={{color:"#c47645"}}>|</span>
										<span style={{color:"#b64b4f"}}>&apos;</span>
										<span style={{color:"#ba464b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454a"}}>|</span>
										<span style={{color:"#ba464b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454c"}}>|</span>
										<span style={{color:"#ba454a"}}>`</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba454b"}}>|||</span>
										<span style={{color:"#ba454b"}}>|</span>
										<span style={{color:"#ba464b"}}>|</span>
										<span style={{color:"#b44f54"}}>`</span>
										<span style={{color:"#b98fa4"}}>|</span>
										<span style={{color:"#bc93aa"}}>|</span>
										<span style={{color:"#ad9178"}}>*</span>
										<span style={{color:"#fdca0d"}}>@</span>
										<span style={{color:"#feca0a"}}>@</span>
										<span style={{color:"#ffca0a"}}>@</span>
										<span style={{color:"#ffca0a"}}>@</span>
										<span style={{color:"#fec909"}}>@</span>
										<span style={{color:"#deba36"}}>[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
										<span style={{color:"#ae9d96"}}>z</span>
										<span style={{color:"#fbd4c2"}}>&amp;</span>
										<span style={{color:"#edcabb"}}>&amp;</span>
										<span style={{color:"#e3c4b6"}}>M</span>
										<span style={{color:"#e7c6b8"}}>5</span>
										<span style={{color:"#f8d1bf"}}>&amp;</span>
										<span style={{color:"#f4d0c0"}}>&amp;</span>
										<span style={{color:"#b2a091"}}>y</span>
										<span style={{color:"#e5c198"}}>@</span>
										<span style={{color:"#dab996"}}>@</span>
										<span style={{color:"#d8b996"}}>g</span>
										<span style={{color:"#e7c299"}}>@</span>
										<span style={{color:"#ecc59a"}}>@</span>
										<span style={{color:"#ecc59a"}}>@</span>
										<span style={{color:"#c4ac94"}}>W&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
										<span style={{color:"#f0c31b"}}>@</span>
										<span style={{color:"#ffca0a"}}>@</span>
										<span style={{color:"#ffca0a"}}>@@@@@@@@@</span>
										<br/>
											<span style={{color:"#feca0a"}}>@</span>
											<span style={{color:"#fec90a"}}>@</span>
											<span style={{color:"#feca0a"}}>@</span>
											<span style={{color:"#fec90a"}}>@</span>
											<span style={{color:"#fecb0a"}}>@</span>
											<span style={{color:"#d2ac43"}}>Q</span>
											<span style={{color:"#b18162"}}>/</span>
											<span style={{color:"#b15356"}}>&apos;</span>
											<span style={{color:"#b54d50"}}>&apos;</span>
											<span style={{color:"#b55652"}}>&apos;</span>
											<span style={{color:"#c27d48"}}>y</span>
											<span style={{color:"#e4b726"}}>@</span>
											<span style={{color:"#efc01c"}}>@</span>
											<span style={{color:"#da9e31"}}>m</span>
											<span style={{color:"#dda12d"}}>@</span>
											<span style={{color:"#d29539"}}>@</span>
											<span style={{color:"#c27047"}}>|</span>
											<span style={{color:"#c77942"}}>z</span>
											<span style={{color:"#d39237"}}>g</span>
											<span style={{color:"#dca42e"}}>@</span>
											<span style={{color:"#d69634"}}>m</span>
											<span style={{color:"#c6894a"}}>m</span>
											<span style={{color:"#b74a4e"}}>|</span>
											<span style={{color:"#b54c51"}}>&apos;</span>
											<span style={{color:"#b36165"}}>;</span>
											<span style={{color:"#b97a7d"}}>/</span>
											<span style={{color:"#b4797d"}}>w</span>
											<span style={{color:"#b36e7c"}}>;</span>
											<span style={{color:"#b15358"}}>&apos;</span>
											<span style={{color:"#b9474c"}}>|</span>
											<span style={{color:"#b8494d"}}>|</span>
											<span style={{color:"#b9474c"}}>|</span>
											<span style={{color:"#b56c55"}}>&quot;</span>
											<span style={{color:"#e8bc24"}}>%</span>
											<span style={{color:"#feca0a"}}>@</span>
											<span style={{color:"#ffca0a"}}>@</span>
											<span style={{color:"#feca09"}}>@</span>
											<span style={{color:"#f8c815"}}>@</span>
											<span style={{color:"#a79762"}}>,&nbsp;&nbsp;&nbsp;&nbsp;</span>
											<span style={{color:"#9f9793"}}>!</span>
											<span style={{color:"#b9aaa2"}}>w</span>
											<span style={{color:"#ac9e99"}}>\</span>
											<span style={{color:"#eecaba"}}>&amp;</span>
											<span style={{color:"#fdd4c2"}}>&amp;</span>
											<span style={{color:"#fdd4c2"}}>&amp;</span>
											<span style={{color:"#fdd4c2"}}>&amp;</span>
											<span style={{color:"#fdd4c2"}}>&amp;</span>
											<span style={{color:"#f9d3c1"}}>$</span>
											<span style={{color:"#e3c5b8"}}>@</span>
											<span style={{color:"#ab9b8d"}}>\</span>
											<span style={{color:"#d9b997"}}>g</span>
											<span style={{color:"#ebc59a"}}>@</span>
											<span style={{color:"#ecc59a"}}>@</span>
											<span style={{color:"#ecc59a"}}>@@</span>
											<span style={{color:"#ecc59a"}}>@</span>
											<span style={{color:"#ebc49b"}}>@</span>
											<span style={{color:"#a29489"}}>,</span>
											<span style={{color:"#988f87"}}>~&nbsp;&nbsp;&nbsp;&nbsp;</span>
											<span style={{color:"#9d8f6c"}}>,</span>
											<span style={{color:"#eabf21"}}>@</span>
											<span style={{color:"#feca0a"}}>@</span>
											<span style={{color:"#ffca0a"}}>@</span>
											<span style={{color:"#ffca0a"}}>@@@@@@@@@</span>
											<br/>
												<span style={{color:"#ffca0a"}}>@@@@@@</span>
												<span style={{color:"#f6c514"}}>@</span>
												<span style={{color:"#eebe1c"}}>@</span>
												<span style={{color:"#fbc90f"}}>@</span>
												<span style={{color:"#feca0a"}}>@</span>
												<span style={{color:"#feca09"}}>@</span>
												<span style={{color:"#ffca0a"}}>@</span>
												<span style={{color:"#ffca0a"}}>@@@@@@@@</span>
												<span style={{color:"#fec909"}}>@</span>
												<span style={{color:"#fccb0e"}}>@</span>
												<span style={{color:"#b3aaa2"}}>]</span>
												<span style={{color:"#bab4de"}}>@</span>
												<span style={{color:"#b7b2d3"}}>@</span>
												<span style={{color:"#b8b1db"}}>@</span>
												<span style={{color:"#bbb4df"}}>@</span>
												<span style={{color:"#bbb4df"}}>@</span>
												<span style={{color:"#bab3dd"}}>@</span>
												<span style={{color:"#b5aed7"}}>@</span>
												<span style={{color:"#b6afd9"}}>@</span>
												<span style={{color:"#b3abce"}}>@</span>
												<span style={{color:"#c4acad"}}>N</span>
												<span style={{color:"#b15c5f"}}>`</span>
												<span style={{color:"#b45753"}}>|</span>
												<span style={{color:"#c27d49"}}>|</span>
												<span style={{color:"#e9bc23"}}>%</span>
												<span style={{color:"#f5c81a"}}>@</span>
												<span style={{color:"#cdb67c"}}>]</span>
												<span style={{color:"#c5b17c"}}>%</span>
												<span style={{color:"#a69b84"}}>y</span>
												<span style={{color:"#9d9277"}}>=</span>
												<span style={{color:"#948c77"}}>.</span>
												<span style={{color:"#9d928d"}}>,</span>
												<span style={{color:"#bca8a1"}}>w</span>
												<span style={{color:"#cfb6ab"}}>w</span>
												<span style={{color:"#e3c3b6"}}>$</span>
												<span style={{color:"#fdd4c2"}}>&amp;</span>
												<span style={{color:"#fdd4c2"}}>&amp;&amp;&amp;</span>
												<span style={{color:"#d49e98"}}>g</span>
												<span style={{color:"#c6666b"}}>|</span>
												<span style={{color:"#c06266"}}>j</span>
												<span style={{color:"#e0bc97"}}>@</span>
												<span style={{color:"#ecc59a"}}>@</span>
												<span style={{color:"#ecc59a"}}>@</span>
												<span style={{color:"#ecc59a"}}>@@</span>
												<span style={{color:"#ecc599"}}>@</span>
												<span style={{color:"#debd99"}}>M</span>
												<span style={{color:"#b3a08f"}}>y</span>
												<span style={{color:"#c0ab94"}}>@&nbsp;&nbsp;</span>
												<span style={{color:"#9b8d6c"}}>,</span>
												<span style={{color:"#dab531"}}>@</span>
												<span style={{color:"#feca0a"}}>@</span>
												<span style={{color:"#feca0a"}}>@</span>
												<span style={{color:"#ffca0a"}}>@</span>
												<span style={{color:"#ffca0a"}}>@@@@@@@@@@</span>
												<br/>
													<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@</span>
													<span style={{color:"#fec909"}}>@</span>
													<span style={{color:"#dcba38"}}>[</span>
													<span style={{color:"#989ea8"}}>y</span>
													<span style={{color:"#b8b2dc"}}>@</span>
													<span style={{color:"#bbb4dd"}}>@</span>
													<span style={{color:"#a4a5b9"}}>C</span>
													<span style={{color:"#97a8ab"}}>?</span>
													<span style={{color:"#b9b9c1"}}>f</span>
													<span style={{color:"#b4b2b6"}}>f</span>
													<span style={{color:"#c1becd"}}>y</span>
													<span style={{color:"#afaac8"}}>]</span>
													<span style={{color:"#bbb4df"}}>@</span>
													<span style={{color:"#a3a8b0"}}>U</span>
													<span style={{color:"#91a194"}}>:</span>
													<span style={{color:"#ab6266"}}>`</span>
													<span style={{color:"#ba464b"}}>|</span>
													<span style={{color:"#b54e50"}}>!</span>
													<span style={{color:"#a97877"}}>`</span>
													<span style={{color:"#959d9d"}}>:</span>
													<span style={{color:"#9ba2a9"}}>|</span>
													<span style={{color:"#a4a1ac"}}>[</span>
													<span style={{color:"#a8a5b7"}}>[</span>
													<span style={{color:"#b6b0d6"}}>@</span>
													<span style={{color:"#c6bad2"}}>@</span>
													<span style={{color:"#cbbab3"}}>7</span>
													<span style={{color:"#eeccbb"}}>B</span>
													<span style={{color:"#fdd4c1"}}>&amp;</span>
													<span style={{color:"#fdd4c2"}}>&amp;</span>
													<span style={{color:"#e3c5b7"}}>P</span>
													<span style={{color:"#dbbc8f"}}>J</span>
													<span style={{color:"#e8c37b"}}>D</span>
													<span style={{color:"#e7c482"}}>Q</span>
													<span style={{color:"#dab861"}}>@</span>
													<span style={{color:"#bea55b"}}>H</span>
													<span style={{color:"#ecc59b"}}>@</span>
													<span style={{color:"#ecc49a"}}>@</span>
													<span style={{color:"#ecc59a"}}>@</span>
													<span style={{color:"#ecc59a"}}>@</span>
													<span style={{color:"#e7c39a"}}>@</span>
													<span style={{color:"#d5b797"}}>@</span>
													<span style={{color:"#d9b796"}}>@</span>
													<span style={{color:"#ddbc97"}}>@</span>
													<span style={{color:"#e3c099"}}>@</span>
													<span style={{color:"#a49689"}}>c</span>
													<span style={{color:"#eac025"}}>@</span>
													<span style={{color:"#feca09"}}>@</span>
													<span style={{color:"#ffc909"}}>@</span>
													<span style={{color:"#ffca0a"}}>@</span>
													<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@</span>
													<br/>
														<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@</span>
														<span style={{color:"#feca0a"}}>@</span>
														<span style={{color:"#feca0a"}}>@</span>
														<span style={{color:"#feca0a"}}>@</span>
														<span style={{color:"#feca0a"}}>@</span>
														<span style={{color:"#feca0a"}}>@</span>
														<span style={{color:"#feca0a"}}>@</span>
														<span style={{color:"#ffca0a"}}>@</span>
														<span style={{color:"#fec909"}}>@</span>
														<span style={{color:"#fcca0f"}}>@</span>
														<span style={{color:"#c2b191"}}>Q</span>
														<span style={{color:"#bab2de"}}>@</span>
														<span style={{color:"#bbb4df"}}>@</span>
														<span style={{color:"#b0abcd"}}>@&nbsp;</span>
														<span style={{color:"#96a79a"}}>!</span>
														<span style={{color:"#b8b7c3"}}>]</span>
														<span style={{color:"#bebbd1"}}>p</span>
														<span style={{color:"#bab3de"}}>@</span>
														<span style={{color:"#bbb4e0"}}>@</span>
														<span style={{color:"#b8b3db"}}>@</span>
														<span style={{color:"#b3add4"}}>@</span>
														<span style={{color:"#b6afd6"}}>@</span>
														<span style={{color:"#b6a8c9"}}>@</span>
														<span style={{color:"#b8a3c1"}}>@</span>
														<span style={{color:"#b0727d"}}>/</span>
														<span style={{color:"#b54c51"}}>!</span>
														<span style={{color:"#b4636c"}}>|</span>
														<span style={{color:"#b76874"}}>;</span>
														<span style={{color:"#b87584"}}>|</span>
														<span style={{color:"#b38798"}}>|</span>
														<span style={{color:"#b29cb2"}}>M</span>
														<span style={{color:"#a899ac"}}>?</span>
														<span style={{color:"#89928f"}}>`</span>
														<span style={{color:"#ada19a"}}>]</span>
														<span style={{color:"#e2be4b"}}>@</span>
														<span style={{color:"#f6c815"}}>@</span>
														<span style={{color:"#feca0b"}}>@</span>
														<span style={{color:"#feca09"}}>@</span>
														<span style={{color:"#fdc90f"}}>@</span>
														<span style={{color:"#feca0a"}}>@</span>
														<span style={{color:"#fdca0d"}}>@</span>
														<span style={{color:"#ebbe24"}}>@</span>
														<span style={{color:"#ecc026"}}>@</span>
														<span style={{color:"#c7ac4f"}}>V</span>
														<span style={{color:"#d4b68f"}}>M</span>
														<span style={{color:"#d8b892"}}>M</span>
														<span style={{color:"#d9b88e"}}>M</span>
														<span style={{color:"#d7b792"}}>M</span>
														<span style={{color:"#d8b98f"}}>M</span>
														<span style={{color:"#ddbb7b"}}>5</span>
														<span style={{color:"#d9b556"}}>y</span>
														<span style={{color:"#fdca0d"}}>@</span>
														<span style={{color:"#fec90a"}}>@</span>
														<span style={{color:"#ffca0a"}}>@</span>
														<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@</span>
														<br/>
															<span style={{color:"#ffca0a"}}>@</span>
															<span style={{color:"#fec909"}}>@</span>
															<span style={{color:"#fec909"}}>@</span>
															<span style={{color:"#fdca0e"}}>@</span>
															<span style={{color:"#f9c811"}}>@</span>
															<span style={{color:"#ffc909"}}>@</span>
															<span style={{color:"#ffca0a"}}>@</span>
															<span style={{color:"#ffca0a"}}>@@@</span>
															<span style={{color:"#fec90a"}}>@</span>
															<span style={{color:"#fbc90f"}}>@</span>
															<span style={{color:"#ebc12d"}}>M</span>
															<span style={{color:"#dfbd69"}}>$</span>
															<span style={{color:"#e9c487"}}>g</span>
															<span style={{color:"#dbbd86"}}>g</span>
															<span style={{color:"#c2a85e"}}>]</span>
															<span style={{color:"#baa375"}}>P</span>
															<span style={{color:"#ae9c83"}}>\</span>
															<span style={{color:"#e8c262"}}>$</span>
															<span style={{color:"#e9c47f"}}>g</span>
															<span style={{color:"#e8c59a"}}>&amp;</span>
															<span style={{color:"#eac7b1"}}>$</span>
															<span style={{color:"#e3c4ba"}}>&amp;</span>
															<span style={{color:"#c2b6c7"}}>Q</span>
															<span style={{color:"#c1bdd7"}}>$</span>
															<span style={{color:"#afaac9"}}>]</span>
															<span style={{color:"#b4afd4"}}>@</span>
															<span style={{color:"#bbb4de"}}>@</span>
															<span style={{color:"#bcb4df"}}>@</span>
															<span style={{color:"#b5afd5"}}>M</span>
															<span style={{color:"#9ea7b2"}}>[</span>
															<span style={{color:"#98acab"}}>|</span>
															<span style={{color:"#c1c0c7"}}>|</span>
															<span style={{color:"#9f9ca4"}}>*</span>
															<span style={{color:"#c2c0ce"}}>n</span>
															<span style={{color:"#b2acd3"}}>3</span>
															<span style={{color:"#bbb4e0"}}>@</span>
															<span style={{color:"#b3aec0"}}>[</span>
															<span style={{color:"#ccbdbe"}}>%</span>
															<span style={{color:"#af727d"}}>;</span>
															<span style={{color:"#b25a61"}}>`</span>
															<span style={{color:"#b2555c"}}>&apos;</span>
															<span style={{color:"#ac5b5c"}}>&apos;</span>
															<span style={{color:"#af5456"}}>&apos;</span>
															<span style={{color:"#a55f62"}}>&apos;</span>
															<span style={{color:"#b27c83"}}>|</span>
															<span style={{color:"#ac5f64"}}>&apos;</span>
															<span style={{color:"#b05455"}}>&apos;</span>
															<span style={{color:"#b15e56"}}>`</span>
															<span style={{color:"#c06c4c"}}>|</span>
															<span style={{color:"#b64a4f"}}>!</span>
															<span style={{color:"#b45854"}}>`</span>
															<span style={{color:"#d19d3b"}}>]</span>
															<span style={{color:"#fcc90f"}}>@</span>
															<span style={{color:"#fec909"}}>@</span>
															<span style={{color:"#fec909"}}>@</span>
															<span style={{color:"#feca0a"}}>@</span>
															<span style={{color:"#feca0a"}}>@</span>
															<span style={{color:"#feca09"}}>@</span>
															<span style={{color:"#feca09"}}>@</span>
															<span style={{color:"#feca0a"}}>@</span>
															<span style={{color:"#feca0a"}}>@</span>
															<span style={{color:"#fec909"}}>@</span>
															<span style={{color:"#ffca0a"}}>@</span>
															<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@</span>
															<br/>
																<span style={{color:"#feca0a"}}>@</span>
																<span style={{color:"#efc624"}}>@</span>
																<span style={{color:"#aecda9"}}>W</span>
																<span style={{color:"#b6b783"}}>V</span>
																<span style={{color:"#f9c711"}}>@</span>
																<span style={{color:"#ffc909"}}>@</span>
																<span style={{color:"#ffc909"}}>@</span>
																<span style={{color:"#fec909"}}>@</span>
																<span style={{color:"#feca0c"}}>@</span>
																<span style={{color:"#f1c31d"}}>@</span>
																<span style={{color:"#e3bb35"}}>M</span>
																<span style={{color:"#c6aa60"}}>%</span>
																<span style={{color:"#d5b9aa"}}>]</span>
																<span style={{color:"#fdd4c2"}}>&amp;</span>
																<span style={{color:"#fdd4c1"}}>&amp;</span>
																<span style={{color:"#fdd4c3"}}>&amp;</span>
																<span style={{color:"#fad3c0"}}>$</span>
																<span style={{color:"#f8d1c0"}}>&amp;</span>
																<span style={{color:"#f8d2c1"}}>&amp;</span>
																<span style={{color:"#f9d2c2"}}>&amp;</span>
																<span style={{color:"#fad3c1"}}>$</span>
																<span style={{color:"#fad3c1"}}>$</span>
																<span style={{color:"#fad2c1"}}>$</span>
																<span style={{color:"#f6d1c0"}}>&amp;</span>
																<span style={{color:"#f1ccbc"}}>R</span>
																<span style={{color:"#bdaba0"}}>W</span>
																<span style={{color:"#b7b8b6"}}>F</span>
																<span style={{color:"#86958f"}}>.</span>
																<span style={{color:"#969ba3"}}>w</span>
																<span style={{color:"#a9a3c0"}}>]</span>
																<span style={{color:"#bbb3df"}}>@</span>
																<span style={{color:"#aaa7c2"}}>[&nbsp;</span>
																<span style={{color:"#9fa4a8"}}>j</span>
																<span style={{color:"#b0aebb"}}>v</span>
																<span style={{color:"#b0aacb"}}>@</span>
																<span style={{color:"#bbb4dd"}}>@</span>
																<span style={{color:"#bab3de"}}>@</span>
																<span style={{color:"#b9b2db"}}>@</span>
																<span style={{color:"#b3add3"}}>M</span>
																<span style={{color:"#b4aed2"}}>M</span>
																<span style={{color:"#b1aad0"}}>Q</span>
																<span style={{color:"#bbb3e0"}}>@</span>
																<span style={{color:"#aeaccb"}}>@</span>
																<span style={{color:"#a8a7c1"}}>@</span>
																<span style={{color:"#bcb9c7"}}>]</span>
																<span style={{color:"#a7a4b5"}}>j</span>
																<span style={{color:"#bbb4df"}}>@</span>
																<span style={{color:"#c6aa4f"}}>]</span>
																<span style={{color:"#fcca0e"}}>@</span>
																<span style={{color:"#e5b627"}}>@</span>
																<span style={{color:"#cb883f"}}>w</span>
																<span style={{color:"#c27147"}}>|</span>
																<span style={{color:"#b55052"}}>&apos;</span>
																<span style={{color:"#b54f51"}}>&apos;</span>
																<span style={{color:"#bf764b"}}>|</span>
																<span style={{color:"#db9f33"}}>M</span>
																<span style={{color:"#d49637"}}>|</span>
																<span style={{color:"#f8c814"}}>@</span>
																<span style={{color:"#feca0a"}}>@</span>
																<span style={{color:"#ffca0a"}}>@</span>
																<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@</span>
																<br/>
																	<span style={{color:"#f1c620"}}>@</span>
																	<span style={{color:"#6bbade"}}>@</span>
																	<span style={{color:"#98c0bc"}}>U</span>
																	<span style={{color:"#fdca0d"}}>@</span>
																	<span style={{color:"#eabf24"}}>M</span>
																	<span style={{color:"#dfb838"}}>M</span>
																	<span style={{color:"#d3b24e"}}>[</span>
																	<span style={{color:"#caac5f"}}>n</span>
																	<span style={{color:"#caac5f"}}>]</span>
																	<span style={{color:"#d8b44b"}}>@</span>
																	<span style={{color:"#deb73a"}}>g</span>
																	<span style={{color:"#deb72f"}}>@</span>
																	<span style={{color:"#ebc34b"}}>@</span>
																	<span style={{color:"#efc550"}}>@</span>
																	<span style={{color:"#ecc459"}}>@</span>
																	<span style={{color:"#e8bf3b"}}>@</span>
																	<span style={{color:"#f5c416"}}>@</span>
																	<span style={{color:"#fcc90e"}}>@</span>
																	<span style={{color:"#fdc90d"}}>@</span>
																	<span style={{color:"#fbc810"}}>@</span>
																	<span style={{color:"#f9c711"}}>@</span>
																	<span style={{color:"#f8c612"}}>@</span>
																	<span style={{color:"#f8c612"}}>@</span>
																	<span style={{color:"#fbc80f"}}>@</span>
																	<span style={{color:"#fdc90c"}}>@</span>
																	<span style={{color:"#feca0a"}}>@</span>
																	<span style={{color:"#eec01c"}}>@</span>
																	<span style={{color:"#e8be21"}}>@</span>
																	<span style={{color:"#f8c912"}}>@</span>
																	<span style={{color:"#e4be30"}}>M</span>
																	<span style={{color:"#b2a9a7"}}>)</span>
																	<span style={{color:"#b6afd7"}}>@</span>
																	<span style={{color:"#bbb3df"}}>@</span>
																	<span style={{color:"#9ea1b0"}}>w&nbsp;</span>
																	<span style={{color:"#c5c6c5"}}>1</span>
																	<span style={{color:"#a7a6a6"}}>+</span>
																	<span style={{color:"#a9a6af"}}>p</span>
																	<span style={{color:"#a9a4bf"}}>@</span>
																	<span style={{color:"#aea9c8"}}>M</span>
																	<span style={{color:"#bdbaca"}}>[</span>
																	<span style={{color:"#bab8ba"}}>*</span>
																	<span style={{color:"#bbb9c5"}}>g</span>
																	<span style={{color:"#b3acd1"}}>%</span>
																	<span style={{color:"#bbb4e0"}}>@</span>
																	<span style={{color:"#bbb4e0"}}>@</span>
																	<span style={{color:"#a3a0b8"}}>]</span>
																	<span style={{color:"#b6b4c5"}}>u</span>
																	<span style={{color:"#c8ac4d"}}>]</span>
																	<span style={{color:"#feca0a"}}>@</span>
																	<span style={{color:"#ffca0a"}}>@</span>
																	<span style={{color:"#fec909"}}>@</span>
																	<span style={{color:"#fec90a"}}>@</span>
																	<span style={{color:"#d8ad39"}}>L</span>
																	<span style={{color:"#b8484d"}}>&apos;</span>
																	<span style={{color:"#ba454b"}}>|</span>
																	<span style={{color:"#ba454b"}}>|</span>
																	<span style={{color:"#ba454b"}}>|</span>
																	<span style={{color:"#b44f52"}}>!</span>
																	<span style={{color:"#cc9541"}}>]</span>
																	<span style={{color:"#f2c31a"}}>8</span>
																	<span style={{color:"#feca0a"}}>@</span>
																	<span style={{color:"#feca0a"}}>@</span>
																	<span style={{color:"#ffca0a"}}>@</span>
																	<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@</span>
																	<br/>
																		<span style={{color:"#e1bd32"}}>@</span>
																		<span style={{color:"#6db8db"}}>R</span>
																		<span style={{color:"#9fbcb0"}}>M</span>
																		<span style={{color:"#c1be79"}}>$</span>
																		<span style={{color:"#d6b342"}}>@</span>
																		<span style={{color:"#dfb839"}}>g</span>
																		<span style={{color:"#eabf21"}}>@</span>
																		<span style={{color:"#fdca0b"}}>@</span>
																		<span style={{color:"#fec909"}}>@</span>
																		<span style={{color:"#ffca0a"}}>@</span>
																		<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@</span>
																		<span style={{color:"#fec90a"}}>@</span>
																		<span style={{color:"#fac912"}}>@</span>
																		<span style={{color:"#d5b741"}}>M</span>
																		<span style={{color:"#c3b96e"}}>j</span>
																		<span style={{color:"#b4b284"}}>|</span>
																		<span style={{color:"#8e9ab6"}}>|</span>
																		<span style={{color:"#9ba2c2"}}>%</span>
																		<span style={{color:"#a8a6c5"}}>M</span>
																		<span style={{color:"#aba7cb"}}>M</span>
																		<span style={{color:"#a3a3bf"}}>N</span>
																		<span style={{color:"#9fa2b4"}}>m</span>
																		<span style={{color:"#adaac9"}}>@</span>
																		<span style={{color:"#bab3de"}}>@</span>
																		<span style={{color:"#bbb4e0"}}>@</span>
																		<span style={{color:"#bbb4e0"}}>@</span>
																		<span style={{color:"#a6abbd"}}>M</span>
																		<span style={{color:"#8ea797"}}>=</span>
																		<span style={{color:"#afb3b6"}}>]</span>
																		<span style={{color:"#91a09c"}}>;</span>
																		<span style={{color:"#909a9d"}}>,</span>
																		<span style={{color:"#bcb4df"}}>@</span>
																		<span style={{color:"#b2acce"}}>M&nbsp;</span>
																		<span style={{color:"#cbbc83"}}>)</span>
																		<span style={{color:"#fcc90d"}}>@</span>
																		<span style={{color:"#fec90a"}}>@</span>
																		<span style={{color:"#ffca0a"}}>@</span>
																		<span style={{color:"#ffca0a"}}>@</span>
																		<span style={{color:"#ffc909"}}>@</span>
																		<span style={{color:"#feca0a"}}>@</span>
																		<span style={{color:"#f3c418"}}>@</span>
																		<span style={{color:"#c88744"}}>w</span>
																		<span style={{color:"#b45252"}}>`</span>
																		<span style={{color:"#ba454b"}}>|</span>
																		<span style={{color:"#ba454b"}}>|</span>
																		<span style={{color:"#ba454b"}}>|</span>
																		<span style={{color:"#b9474c"}}>|</span>
																		<span style={{color:"#b56255"}}>~</span>
																		<span style={{color:"#e1b62c"}}>]</span>
																		<span style={{color:"#fec909"}}>@</span>
																		<span style={{color:"#ffca0a"}}>@</span>
																		<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@</span>
																		<br/>
																			<span style={{color:"#feca0a"}}>@</span>
																			<span style={{color:"#feca0a"}}>@</span>
																			<span style={{color:"#ffc90a"}}>@</span>
																			<span style={{color:"#feca09"}}>@</span>
																			<span style={{color:"#feca09"}}>@</span>
																			<span style={{color:"#ffca0a"}}>@</span>
																			<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@</span>
																			<span style={{color:"#feca0a"}}>@</span>
																			<span style={{color:"#feca0a"}}>@</span>
																			<span style={{color:"#f3c51c"}}>@</span>
																			<span style={{color:"#aa9f70"}}>C&nbsp;</span>
																			<span style={{color:"#768aa1"}}>~</span>
																			<span style={{color:"#708eaf"}}>U</span>
																			<span style={{color:"#738ba7"}}>\</span>
																			<span style={{color:"#708eae"}}>U</span>
																			<span style={{color:"#718ca9"}}>)</span>
																			<span style={{color:"#738ca7"}}>\</span>
																			<span style={{color:"#758da6"}}>~</span>
																			<span style={{color:"#758da8"}}>~</span>
																			<span style={{color:"#768ca5"}}>&quot;</span>
																			<span style={{color:"#738da7"}}>*</span>
																			<span style={{color:"#7a93b3"}}>m</span>
																			<span style={{color:"#979dbc"}}>]</span>
																			<span style={{color:"#b1acd2"}}>%</span>
																			<span style={{color:"#b2acce"}}>%</span>
																			<span style={{color:"#b6afd5"}}>%</span>
																			<span style={{color:"#b9b1db"}}>@</span>
																			<span style={{color:"#bbb4de"}}>@</span>
																			<span style={{color:"#c0b4ae"}}>Q</span>
																			<span style={{color:"#cab577"}}>@</span>
																			<span style={{color:"#bda86e"}}>Q</span>
																			<span style={{color:"#e0c07e"}}>g</span>
																			<span style={{color:"#d3b57a"}}>y</span>
																			<span style={{color:"#e7be2d"}}>%</span>
																			<span style={{color:"#feca0a"}}>@</span>
																			<span style={{color:"#ffca0a"}}>@</span>
																			<span style={{color:"#ffca0a"}}>@@</span>
																			<span style={{color:"#ffca09"}}>@</span>
																			<span style={{color:"#feca09"}}>@</span>
																			<span style={{color:"#eec226"}}>@</span>
																			<span style={{color:"#b54c50"}}>&apos;</span>
																			<span style={{color:"#ba464b"}}>|</span>
																			<span style={{color:"#ba454b"}}>|</span>
																			<span style={{color:"#ba454b"}}>|</span>
																			<span style={{color:"#ba454b"}}>|</span>
																			<span style={{color:"#b7494e"}}>|</span>
																			<span style={{color:"#bf8a4c"}}>/</span>
																			<span style={{color:"#feca0a"}}>@</span>
																			<span style={{color:"#fec90a"}}>@</span>
																			<span style={{color:"#ffca0a"}}>@</span>
																			<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@</span>
																			<br/>
																				<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@@@</span>
																				<span style={{color:"#fec90a"}}>@</span>
																				<span style={{color:"#beb26f"}}>U</span>
																				<span style={{color:"#6c92b8"}}>[</span>
																				<span style={{color:"#7090b1"}}>)</span>
																				<span style={{color:"#6c92b9"}}>[</span>
																				<span style={{color:"#6a94c0"}}>\</span>
																				<span style={{color:"#6b94bb"}}>U</span>
																				<span style={{color:"#6994bf"}}>C</span>
																				<span style={{color:"#6896c4"}}>h</span>
																				<span style={{color:"#6697c6"}}>[</span>
																				<span style={{color:"#6399cc"}}>[</span>
																				<span style={{color:"#5f9bd2"}}>H</span>
																				<span style={{color:"#6692be"}}>]</span>
																				<span style={{color:"#6a91b7"}}>]</span>
																				<span style={{color:"#6c92b9"}}>U</span>
																				<span style={{color:"#718eab"}}>L</span>
																				<span style={{color:"#748da8"}}>;</span>
																				<span style={{color:"#758da6"}}>&quot;</span>
																				<span style={{color:"#84a5c7"}}>y</span>
																				<span style={{color:"#bebbbd"}}>j</span>
																				<span style={{color:"#dec2b7"}}>$</span>
																				<span style={{color:"#efcabb"}}>$</span>
																				<span style={{color:"#e5c3ac"}}>&amp;</span>
																				<span style={{color:"#ecc8b5"}}>$</span>
																				<span style={{color:"#fcd5c2"}}>&amp;</span>
																				<span style={{color:"#dec2b5"}}>g</span>
																				<span style={{color:"#c4b0a0"}}>m</span>
																				<span style={{color:"#cbaf60"}}>]</span>
																				<span style={{color:"#feca09"}}>@</span>
																				<span style={{color:"#ffca0a"}}>@</span>
																				<span style={{color:"#ffca0a"}}>@@</span>
																				<span style={{color:"#f9c714"}}>@</span>
																				<span style={{color:"#ccae42"}}>M</span>
																				<span style={{color:"#b3a796"}}>z</span>
																				<span style={{color:"#b38178"}}>w</span>
																				<span style={{color:"#bc756c"}}>|</span>
																				<span style={{color:"#bd6d68"}}>|</span>
																				<span style={{color:"#bd6d68"}}>|</span>
																				<span style={{color:"#bd6f68"}}>|</span>
																				<span style={{color:"#b5716c"}}>=</span>
																				<span style={{color:"#b68d8c"}}>s</span>
																				<span style={{color:"#a79663"}}>`</span>
																				<span style={{color:"#e0b82c"}}>%</span>
																				<span style={{color:"#fec90a"}}>@</span>
																				<span style={{color:"#ffca0a"}}>@</span>
																				<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@</span>
																				<br/>
																					<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@@</span>
																					<span style={{color:"#fec909"}}>@</span>
																					<span style={{color:"#f4c61a"}}>@</span>
																					<span style={{color:"#bab681"}}>)</span>
																					<span style={{color:"#6e8fb2"}}>)</span>
																					<span style={{color:"#6b92ba"}}>U</span>
																					<span style={{color:"#6c91b8"}}>)</span>
																					<span style={{color:"#6398ca"}}>[</span>
																					<span style={{color:"#6396c6"}}>]</span>
																					<span style={{color:"#6a90b4"}}>]</span>
																					<span style={{color:"#6694c2"}}>]</span>
																					<span style={{color:"#6892bd"}}>]</span>
																					<span style={{color:"#6992bc"}}>]</span>
																					<span style={{color:"#6b91b9"}}>h</span>
																					<span style={{color:"#5a9cd9"}}>k</span>
																					<span style={{color:"#6990ba"}}>]</span>
																					<span style={{color:"#6e8fb1"}}>j</span>
																					<span style={{color:"#6b90b6"}}>w</span>
																					<span style={{color:"#5e9cd5"}}>H</span>
																					<span style={{color:"#6991ba"}}>]</span>
																					<span style={{color:"#7190b0"}}>w</span>
																					<span style={{color:"#bbb377"}}>w</span>
																					<span style={{color:"#deb831"}}>@</span>
																					<span style={{color:"#f6c615"}}>@</span>
																					<span style={{color:"#e8bf33"}}>@</span>
																					<span style={{color:"#e2bb3f"}}>N</span>
																					<span style={{color:"#e9c252"}}>@</span>
																					<span style={{color:"#e8c046"}}>@</span>
																					<span style={{color:"#f3c418"}}>@</span>
																					<span style={{color:"#feca09"}}>@</span>
																					<span style={{color:"#feca0a"}}>@</span>
																					<span style={{color:"#feca0a"}}>@</span>
																					<span style={{color:"#edc121"}}>@</span>
																					<span style={{color:"#d8b534"}}>M</span>
																					<span style={{color:"#bca450"}}>[&nbsp;&nbsp;</span>
																					<span style={{color:"#fdfcfc"}}>$</span>
																					<span style={{color:"#fdfdfd"}}>$</span>
																					<span style={{color:"#d5d4d3"}}>P</span>
																					<span style={{color:"#c17071"}}>z</span>
																					<span style={{color:"#91abae"}}>y</span>
																					<span style={{color:"#d5d3d2"}}>$</span>
																					<span style={{color:"#fefefe"}}>$</span>
																					<span style={{color:"#fdfdfd"}}>$&nbsp;&nbsp;&nbsp;</span>
																					<span style={{color:"#b39e56"}}>*</span>
																					<span style={{color:"#c5a845"}}>*</span>
																					<span style={{color:"#e4bb27"}}>M</span>
																					<span style={{color:"#fbc910"}}>@</span>
																					<span style={{color:"#feca09"}}>@</span>
																					<span style={{color:"#feca0a"}}>@</span>
																					<span style={{color:"#feca09"}}>@</span>
																					<span style={{color:"#feca0a"}}>@</span>
																					<span style={{color:"#ffca0a"}}>@</span>
																					<span style={{color:"#ffca0a"}}>@@@@</span>
																					<br/>
																						<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@@@</span>
																						<span style={{color:"#feca0a"}}>@</span>
																						<span style={{color:"#ebc227"}}>@</span>
																						<span style={{color:"#6f98bc"}}>[</span>
																						<span style={{color:"#718eac"}}>;</span>
																						<span style={{color:"#6994bf"}}>h</span>
																						<span style={{color:"#649acd"}}>[</span>
																						<span style={{color:"#6894c0"}}>[</span>
																						<span style={{color:"#5c9cd7"}}>m</span>
																						<span style={{color:"#6d90b1"}}>]</span>
																						<span style={{color:"#6c8eb2"}}>]</span>
																						<span style={{color:"#6a92ba"}}>/</span>
																						<span style={{color:"#6d90b5"}}>)</span>
																						<span style={{color:"#6793bd"}}>]</span>
																						<span style={{color:"#6396c7"}}>b</span>
																						<span style={{color:"#6794c0"}}>]</span>
																						<span style={{color:"#6298cd"}}>@</span>
																						<span style={{color:"#6c92b9"}}>p</span>
																						<span style={{color:"#708eae"}}>=</span>
																						<span style={{color:"#718ead"}}>;</span>
																						<span style={{color:"#6c95bc"}}>[</span>
																						<span style={{color:"#6c91b5"}}>*</span>
																						<span style={{color:"#bfa751"}}>]</span>
																						<span style={{color:"#feca0a"}}>@</span>
																						<span style={{color:"#feca0a"}}>@</span>
																						<span style={{color:"#fec90a"}}>@</span>
																						<span style={{color:"#feca0b"}}>@</span>
																						<span style={{color:"#feca0a"}}>@</span>
																						<span style={{color:"#feca0a"}}>@</span>
																						<span style={{color:"#feca0c"}}>@</span>
																						<span style={{color:"#d6b437"}}>M</span>
																						<span style={{color:"#aa9961"}}>&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																						<span style={{color:"#aba9a8"}}>]</span>
																						<span style={{color:"#d8d8d8"}}>F</span>
																						<span style={{color:"#e9e9e9"}}>&amp;</span>
																						<span style={{color:"#b2bdc0"}}>L</span>
																						<span style={{color:"#a196a1"}}>[</span>
																						<span style={{color:"#dedddd"}}>&amp;</span>
																						<span style={{color:"#dfdede"}}>Z</span>
																						<span style={{color:"#c9c8c9"}}>[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																						<span style={{color:"#d4b238"}}>*</span>
																						<span style={{color:"#fec909"}}>@</span>
																						<span style={{color:"#ffc909"}}>@</span>
																						<span style={{color:"#ffca0a"}}>@</span>
																						<span style={{color:"#ffca0a"}}>@@@</span>
																						<br/>
																							<span style={{color:"#ffca0a"}}>@@@@@@@@@@@@@@@@@</span>
																							<span style={{color:"#feca0a"}}>@</span>
																							<span style={{color:"#feca0a"}}>@</span>
																							<span style={{color:"#eac228"}}>M</span>
																							<span style={{color:"#8097aa"}}>/</span>
																							<span style={{color:"#5f98cf"}}>p</span>
																							<span style={{color:"#6e90b3"}}>j</span>
																							<span style={{color:"#6d91b5"}}>U</span>
																							<span style={{color:"#629bcf"}}>[</span>
																							<span style={{color:"#6498c9"}}>[</span>
																							<span style={{color:"#6098ce"}}>]</span>
																							<span style={{color:"#5c9bd5"}}>@</span>
																							<span style={{color:"#6c92b8"}}>w</span>
																							<span style={{color:"#6d92b6"}}>v</span>
																							<span style={{color:"#758ca5"}}>`</span>
																							<span style={{color:"#708fb2"}}>*</span>
																							<span style={{color:"#6f91b3"}}>r</span>
																							<span style={{color:"#6a93bd"}}>[</span>
																							<span style={{color:"#6d8fb2"}}>{'{'}</span>
																							<span style={{color:"#6f90b1"}}>?</span>
																							<span style={{color:"#6c93b8"}}>j</span>
																							<span style={{color:"#6993bd"}}>y</span>
																							<span style={{color:"#6994bf"}}>w</span>
																							<span style={{color:"#6896c3"}}>]</span>
																							<span style={{color:"#6894bf"}}>[</span>
																							<span style={{color:"#7996af"}}>w</span>
																							<span style={{color:"#90a9b1"}}>p</span>
																							<span style={{color:"#96abab"}}>m</span>
																							<span style={{color:"#a1b4a9"}}>g</span>
																							<span style={{color:"#bab880"}}>)</span>
																							<span style={{color:"#d2bb53"}}>%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																							<span style={{color:"#f0f0f0"}}>$</span>
																							<span style={{color:"#fafaf9"}}>$</span>
																							<span style={{color:"#ac9ca7"}}>j</span>
																							<span style={{color:"#d64451"}}>%</span>
																							<span style={{color:"#cdb5b8"}}>]</span>
																							<span style={{color:"#fdfefd"}}>$</span>
																							<span style={{color:"#9a9997"}}>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																							<span style={{color:"#ad995e"}}>^</span>
																							<span style={{color:"#fdca0d"}}>@</span>
																							<span style={{color:"#ffca0a"}}>@</span>
																							<span style={{color:"#ffca0a"}}>@@@</span>
																							<br/>
																								<span style={{color:"#ffca0a"}}>@@@</span>
																								<span style={{color:"#feca0a"}}>@</span>
																								<span style={{color:"#feca0a"}}>@</span>
																								<span style={{color:"#ffca0a"}}>@</span>
																								<span style={{color:"#feca0a"}}>@</span>
																								<span style={{color:"#feca0a"}}>@</span>
																								<span style={{color:"#fec909"}}>@</span>
																								<span style={{color:"#ffca0a"}}>@</span>
																								<span style={{color:"#ffca0a"}}>@@@@@@@</span>
																								<span style={{color:"#feca0a"}}>@</span>
																								<span style={{color:"#eec422"}}>@</span>
																								<span style={{color:"#799bb6"}}>]</span>
																								<span style={{color:"#6493c1"}}>]</span>
																								<span style={{color:"#6895c2"}}>h</span>
																								<span style={{color:"#718cac"}}>]</span>
																								<span style={{color:"#6497c6"}}>[</span>
																								<span style={{color:"#619bcf"}}>%</span>
																								<span style={{color:"#6991b9"}}>]</span>
																								<span style={{color:"#609acf"}}>H</span>
																								<span style={{color:"#6197cd"}}>]</span>
																								<span style={{color:"#6198cc"}}>M</span>
																								<span style={{color:"#6298cc"}}>%</span>
																								<span style={{color:"#6297ca"}}>p</span>
																								<span style={{color:"#6a92ba"}}>p</span>
																								<span style={{color:"#6f90b3"}}>*</span>
																								<span style={{color:"#6b93bc"}}>w</span>
																								<span style={{color:"#6894c1"}}>/</span>
																								<span style={{color:"#6597c6"}}>[</span>
																								<span style={{color:"#6991bb"}}>{'{'}</span>
																								<span style={{color:"#6a93bd"}}>U</span>
																								<span style={{color:"#6696c5"}}>p</span>
																								<span style={{color:"#6994bf"}}>{'{'}</span>
																								<span style={{color:"#6b92ba"}}>j</span>
																								<span style={{color:"#6c92b8"}}>w</span>
																								<span style={{color:"#6b91b8"}}>*</span>
																								<span style={{color:"#6498c9"}}>w</span>
																								<span style={{color:"#6893be"}}>%</span>
																								<span style={{color:"#6696c2"}}>[</span>
																								<span style={{color:"#778ca1"}}>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																								<span style={{color:"#b8b6b6"}}>]</span>
																								<span style={{color:"#c2a3a7"}}>U</span>
																								<span style={{color:"#a1a1b7"}}>[</span>
																								<span style={{color:"#48b5cc"}}>%</span>
																								<span style={{color:"#52aec0"}}>b</span>
																								<span style={{color:"#cdcdcb"}}>T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																								<span style={{color:"#d3b03b"}}>]</span>
																								<span style={{color:"#ffca0a"}}>@</span>
																								<span style={{color:"#ffca0a"}}>@@@</span>
																								<br/>
																									<span style={{color:"#deba35"}}>Q</span>
																									<span style={{color:"#d3c442"}}>M</span>
																									<span style={{color:"#efc41e"}}>#</span>
																									<span style={{color:"#b1aa67"}}>M</span>
																									<span style={{color:"#f1c41a"}}>%</span>
																									<span style={{color:"#efc223"}}>M</span>
																									<span style={{color:"#c2a963"}}>r</span>
																									<span style={{color:"#bda55f"}}>(</span>
																									<span style={{color:"#c8ab64"}}>k</span>
																									<span style={{color:"#d7b53c"}}>J</span>
																									<span style={{color:"#feca0a"}}>@</span>
																									<span style={{color:"#fec90a"}}>@</span>
																									<span style={{color:"#feca0a"}}>@</span>
																									<span style={{color:"#feca0a"}}>@</span>
																									<span style={{color:"#feca09"}}>@</span>
																									<span style={{color:"#feca09"}}>@</span>
																									<span style={{color:"#feca0a"}}>@</span>
																									<span style={{color:"#feca09"}}>@</span>
																									<span style={{color:"#b0aa7b"}}>H</span>
																									<span style={{color:"#6a93bb"}}>U</span>
																									<span style={{color:"#6697c7"}}>[</span>
																									<span style={{color:"#5e98cf"}}>@</span>
																									<span style={{color:"#6199ce"}}>@</span>
																									<span style={{color:"#6a91b8"}}>]</span>
																									<span style={{color:"#6b92b9"}}>k</span>
																									<span style={{color:"#6497c7"}}>]</span>
																									<span style={{color:"#6892bb"}}>%</span>
																									<span style={{color:"#6597c7"}}>w</span>
																									<span style={{color:"#6298ca"}}>]</span>
																									<span style={{color:"#6595c4"}}>*</span>
																									<span style={{color:"#6893bc"}}>H</span>
																									<span style={{color:"#6398ca"}}>m</span>
																									<span style={{color:"#5f9ad0"}}>[</span>
																									<span style={{color:"#6397ca"}}>%</span>
																									<span style={{color:"#6694c1"}}>*</span>
																									<span style={{color:"#6794c1"}}>H</span>
																									<span style={{color:"#6397c8"}}>w</span>
																									<span style={{color:"#6a95c0"}}>[</span>
																									<span style={{color:"#6c90b5"}}>)</span>
																									<span style={{color:"#6a93bb"}}>/</span>
																									<span style={{color:"#6198cc"}}>@</span>
																									<span style={{color:"#6b94bc"}}>]</span>
																									<span style={{color:"#6d92b7"}}>/</span>
																									<span style={{color:"#6993bb"}}>(</span>
																									<span style={{color:"#609ad1"}}>%</span>
																									<span style={{color:"#6393c2"}}>]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																									<span style={{color:"#829ba9"}}>\</span>
																									<span style={{color:"#ba8899"}}>[</span>
																									<span style={{color:"#df4152"}}>%</span>
																									<span style={{color:"#df3f50"}}>@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																									<span style={{color:"#c7a945"}}>]</span>
																									<span style={{color:"#ffca0a"}}>@</span>
																									<span style={{color:"#ffca0a"}}>@@@</span>
																									<br/>
																										<span style={{color:"#79b078"}}>;</span>
																										<span style={{color:"#adb566"}}>]</span>
																										<span style={{color:"#92b570"}}>v</span>
																										<span style={{color:"#7da47f"}}>~</span>
																										<span style={{color:"#93a674"}}>&quot;</span>
																										<span style={{color:"#c3a86b"}}>{'{'}</span>
																										<span style={{color:"#f6c716"}}>@</span>
																										<span style={{color:"#e6bd29"}}>M</span>
																										<span style={{color:"#bfa665"}}>U</span>
																										<span style={{color:"#c2a66f"}}>[</span>
																										<span style={{color:"#d2b340"}}>O</span>
																										<span style={{color:"#e5bf30"}}>M</span>
																										<span style={{color:"#c3b054"}}>[</span>
																										<span style={{color:"#c7bb54"}}>[</span>
																										<span style={{color:"#eac72d"}}>[</span>
																										<span style={{color:"#d5b941"}}>]</span>
																										<span style={{color:"#baab5f"}}>j</span>
																										<span style={{color:"#c9af4b"}}>|</span>
																										<span style={{color:"#b7b37f"}}>[</span>
																										<span style={{color:"#718fb0"}}>/</span>
																										<span style={{color:"#6892bc"}}>]</span>
																										<span style={{color:"#6299cc"}}>H</span>
																										<span style={{color:"#6296c9"}}>@</span>
																										<span style={{color:"#5a9cd8"}}>k</span>
																										<span style={{color:"#6796c3"}}>h</span>
																										<span style={{color:"#6a92b9"}}>p</span>
																										<span style={{color:"#6b92ba"}}>]</span>
																										<span style={{color:"#6793bf"}}>H</span>
																										<span style={{color:"#6697c6"}}>w</span>
																										<span style={{color:"#6597c8"}}>w</span>
																										<span style={{color:"#6597c9"}}>w</span>
																										<span style={{color:"#6994be"}}>w</span>
																										<span style={{color:"#6b92b9"}}>U</span>
																										<span style={{color:"#708ead"}}>*</span>
																										<span style={{color:"#6e90b1"}}>*</span>
																										<span style={{color:"#6b92ba"}}>j</span>
																										<span style={{color:"#6f91b3"}}>r</span>
																										<span style={{color:"#6794c0"}}>g</span>
																										<span style={{color:"#6299cd"}}>H</span>
																										<span style={{color:"#6296c9"}}>]</span>
																										<span style={{color:"#5f9bd2"}}>@</span>
																										<span style={{color:"#6695c2"}}>]</span>
																										<span style={{color:"#6793c0"}}>]</span>
																										<span style={{color:"#639bcf"}}>@</span>
																										<span style={{color:"#6695c4"}}>[</span>
																										<span style={{color:"#6196ca"}}>]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																										<span style={{color:"#8ea5b9"}}>]</span>
																										<span style={{color:"#46b5ce"}}>M</span>
																										<span style={{color:"#709eaa"}}>C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																										<span style={{color:"#f2c41a"}}>@</span>
																										<span style={{color:"#ffca0a"}}>@</span>
																										<span style={{color:"#ffca0a"}}>@@@</span>
																										<br/>
																											<span style={{color:"#95aa78"}}>;</span>
																											<span style={{color:"#8da378"}}>~&nbsp;</span>
																											<span style={{color:"#6ea07f"}}>.&nbsp;&nbsp;</span>
																											<span style={{color:"#b8bc5d"}}>?</span>
																											<span style={{color:"#99a876"}}>^</span>
																											<span style={{color:"#a49c7b"}}>:</span>
																											<span style={{color:"#ceb06d"}}>[</span>
																											<span style={{color:"#a7b178"}}>j</span>
																											<span style={{color:"#7ca07f"}}>`</span>
																											<span style={{color:"#a29d76"}}>&apos;&nbsp;</span>
																											<span style={{color:"#81bb73"}}>j</span>
																											<span style={{color:"#7bad7b"}}>{"}"}&nbsp;</span>
																											<span style={{color:"#6e91b6"}}>)</span>
																											<span style={{color:"#6794c1"}}>\</span>
																											<span style={{color:"#6397c9"}}>@</span>
																											<span style={{color:"#6894c2"}}>)</span>
																											<span style={{color:"#5b9bd6"}}>H</span>
																											<span style={{color:"#5f9ad1"}}>@</span>
																											<span style={{color:"#6993bd"}}>]</span>
																											<span style={{color:"#6398cb"}}>H</span>
																											<span style={{color:"#6495c5"}}>g</span>
																											<span style={{color:"#5b9cd7"}}>m</span>
																											<span style={{color:"#6697c7"}}>[</span>
																											<span style={{color:"#6397c7"}}>@</span>
																											<span style={{color:"#6b92b9"}}>)</span>
																											<span style={{color:"#6695c2"}}>p</span>
																											<span style={{color:"#7192b0"}}>{'{'}</span>
																											<span style={{color:"#74a0a7"}}>]</span>
																											<span style={{color:"#729cab"}}>*</span>
																											<span style={{color:"#6f94b2"}}>*</span>
																											<span style={{color:"#6c91b7"}}>)</span>
																											<span style={{color:"#6298cc"}}>@</span>
																											<span style={{color:"#6495c6"}}>]</span>
																											<span style={{color:"#6398cc"}}>H</span>
																											<span style={{color:"#6597c6"}}>)</span>
																											<span style={{color:"#6695c3"}}>H</span>
																											<span style={{color:"#6596c7"}}>]</span>
																											<span style={{color:"#6398cc"}}>H</span>
																											<span style={{color:"#6794c1"}}>#</span>
																											<span style={{color:"#6694c1"}}>]</span>
																											<span style={{color:"#6e94bb"}}>C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																											<span style={{color:"#ca5e6d"}}>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																											<span style={{color:"#f2c41b"}}>#</span>
																											<span style={{color:"#eec220"}}>N</span>
																											<span style={{color:"#feca09"}}>@</span>
																											<span style={{color:"#feca0a"}}>@</span>
																											<span style={{color:"#ffca0a"}}>@</span>
																											<br/>
																												<span style={{color:"#7da07d"}}>`</span>
																												<span style={{color:"#6dae7d"}}>^</span>
																												<span style={{color:"#6ba580"}}>`&nbsp;&nbsp;&nbsp;&nbsp;</span>
																												<span style={{color:"#69a67f"}}>`</span>
																												<span style={{color:"#7d9880"}}>`</span>
																												<span style={{color:"#c0a873"}}>N</span>
																												<span style={{color:"#aa9d7d"}}>j</span>
																												<span style={{color:"#ad9a7b"}}>=</span>
																												<span style={{color:"#b59f79"}}>[&nbsp;</span>
																												<span style={{color:"#6fafa8"}}>w</span>
																												<span style={{color:"#7493a9"}}>(</span>
																												<span style={{color:"#6b92ba"}}>(</span>
																												<span style={{color:"#6496c8"}}>@</span>
																												<span style={{color:"#6297cb"}}>[</span>
																												<span style={{color:"#6097cc"}}>@</span>
																												<span style={{color:"#5e9bd4"}}>H</span>
																												<span style={{color:"#6694c2"}}>\</span>
																												<span style={{color:"#6496c8"}}>@</span>
																												<span style={{color:"#6795c1"}}>)</span>
																												<span style={{color:"#5c99d2"}}>@</span>
																												<span style={{color:"#5f9ad1"}}>@</span>
																												<span style={{color:"#6994bf"}}>]</span>
																												<span style={{color:"#6795c1"}}>)</span>
																												<span style={{color:"#6396c8"}}>@</span>
																												<span style={{color:"#6a9cbb"}}>[&nbsp;</span>
																												<span style={{color:"#5eb27d"}}>)</span>
																												<span style={{color:"#67a87e"}}>`</span>
																												<span style={{color:"#6fa9a6"}}>y</span>
																												<span style={{color:"#6596c7"}}>H</span>
																												<span style={{color:"#6497c9"}}>)</span>
																												<span style={{color:"#6497c7"}}>H</span>
																												<span style={{color:"#6795c1"}}>]</span>
																												<span style={{color:"#6a99be"}}>H</span>
																												<span style={{color:"#6cad98"}}>r</span>
																												<span style={{color:"#779aa1"}}>r</span>
																												<span style={{color:"#6795c1"}}>)</span>
																												<span style={{color:"#6b94bd"}}>h</span>
																												<span style={{color:"#6497c6"}}>]</span>
																												<span style={{color:"#6796c3"}}>\</span>
																												<span style={{color:"#6b95bd"}}>[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																												<span style={{color:"#bba758"}}>|</span>
																												<span style={{color:"#9cac6f"}}>/</span>
																												<span style={{color:"#ddbb34"}}>]</span>
																												<span style={{color:"#fbc90f"}}>@</span>
																												<span style={{color:"#ffca0a"}}>@</span>
																												<br/>
																													<span style={{color:"#c9bc52"}}>m</span>
																													<span style={{color:"#a3957d"}}>-</span>
																													<span style={{color:"#a8a480"}}>?</span>
																													<span style={{color:"#ab9f7b"}}>]</span>
																													<span style={{color:"#b9a276"}}>[</span>
																													<span style={{color:"#b69f77"}}>[</span>
																													<span style={{color:"#bea475"}}>o</span>
																													<span style={{color:"#bba275"}}>g</span>
																													<span style={{color:"#baa274"}}>H</span>
																													<span style={{color:"#b5a078"}}>/</span>
																													<span style={{color:"#b19e7c"}}>*</span>
																													<span style={{color:"#9b9e9f"}}>;</span>
																													<span style={{color:"#6e93b7"}}>[</span>
																													<span style={{color:"#6993be"}}>j</span>
																													<span style={{color:"#6895c4"}}>p</span>
																													<span style={{color:"#6197cd"}}>[</span>
																													<span style={{color:"#6299cd"}}>p</span>
																													<span style={{color:"#6596c6"}}>H</span>
																													<span style={{color:"#6297cb"}}>]</span>
																													<span style={{color:"#6198cb"}}>@</span>
																													<span style={{color:"#6397cb"}}>H</span>
																													<span style={{color:"#6397c9"}}>]</span>
																													<span style={{color:"#6197cb"}}>@</span>
																													<span style={{color:"#6299cb"}}>H</span>
																													<span style={{color:"#6895c0"}}>]</span>
																													<span style={{color:"#6c91b8"}}>j</span>
																													<span style={{color:"#6995bf"}}>@</span>
																													<span style={{color:"#76a0a6"}}>\</span>
																													<span style={{color:"#739f83"}}>&apos;</span>
																													<span style={{color:"#6aa67e"}}>`&nbsp;</span>
																													<span style={{color:"#6aa87f"}}>,</span>
																													<span style={{color:"#5eb281"}}>r</span>
																													<span style={{color:"#6796c3"}}>\</span>
																													<span style={{color:"#6198cc"}}>@</span>
																													<span style={{color:"#6995c0"}}>)</span>
																													<span style={{color:"#6696c5"}}>M</span>
																													<span style={{color:"#6995c2"}}>/</span>
																													<span style={{color:"#6993bc"}}>j</span>
																													<span style={{color:"#74a0a9"}}>/</span>
																													<span style={{color:"#72a69d"}}>*</span>
																													<span style={{color:"#6eada0"}}>r</span>
																													<span style={{color:"#6e92b2"}}>a</span>
																													<span style={{color:"#6694c2"}}>H</span>
																													<span style={{color:"#6198cc"}}>]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																													<span style={{color:"#68a97f"}}>`</span>
																													<span style={{color:"#67a97f"}}>r</span>
																													<span style={{color:"#c5b353"}}>]</span>
																													<span style={{color:"#fec909"}}>@</span>
																													<br/>
																														<span style={{color:"#b69e8d"}}>m</span>
																														<span style={{color:"#ac9888"}}>m</span>
																														<span style={{color:"#af9a7d"}}>*</span>
																														<span style={{color:"#aa997c"}}>r</span>
																														<span style={{color:"#bca375"}}>j</span>
																														<span style={{color:"#bba274"}}>)</span>
																														<span style={{color:"#c1a774"}}>c</span>
																														<span style={{color:"#af9a79"}}>v</span>
																														<span style={{color:"#afa389"}}>r</span>
																														<span style={{color:"#8497aa"}}>&gt;</span>
																														<span style={{color:"#6995c1"}}>\</span>
																														<span style={{color:"#6895c3"}}>H</span>
																														<span style={{color:"#6495c6"}}>[</span>
																														<span style={{color:"#6399cc"}}>p</span>
																														<span style={{color:"#6696c4"}}>M</span>
																														<span style={{color:"#6397c8"}}>]</span>
																														<span style={{color:"#6098cc"}}>@</span>
																														<span style={{color:"#5e9ad2"}}>H</span>
																														<span style={{color:"#6197cd"}}>[</span>
																														<span style={{color:"#6297ca"}}>p</span>
																														<span style={{color:"#6597c7"}}>H</span>
																														<span style={{color:"#6695c2"}}>[</span>
																														<span style={{color:"#6a94bd"}}>p</span>
																														<span style={{color:"#6794c2"}}>[</span>
																														<span style={{color:"#6695c3"}}>p</span>
																														<span style={{color:"#819db8"}}>\</span>
																														<span style={{color:"#b09d8f"}}>m</span>
																														<span style={{color:"#b69e8d"}}>m</span>
																														<span style={{color:"#b69e8d"}}>m</span>
																														<span style={{color:"#b39e90"}}>j</span>
																														<span style={{color:"#b49e90"}}>j</span>
																														<span style={{color:"#b39e8f"}}>j</span>
																														<span style={{color:"#a89a92"}}>;</span>
																														<span style={{color:"#a5afc0"}}>2</span>
																														<span style={{color:"#a4a8b5"}}>g</span>
																														<span style={{color:"#6f91b5"}}>*</span>
																														<span style={{color:"#6498ca"}}>[</span>
																														<span style={{color:"#78979f"}}>~</span>
																														<span style={{color:"#6e98b8"}}>]&nbsp;</span>
																														<span style={{color:"#6e9cb9"}}>j&nbsp;</span>
																														<span style={{color:"#6f93b7"}}>M</span>
																														<span style={{color:"#7b9aa3"}}>&quot;</span>
																														<span style={{color:"#9ca3ac"}}>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																														<span style={{color:"#9d9e8c"}}>,</span>
																														<span style={{color:"#a19c8c"}}>w</span>
																														<span style={{color:"#9fa08e"}}>w</span>
																														<span style={{color:"#c0a669"}}>|</span>
																														<span style={{color:"#caab61"}}>|</span>
																														<br/>
																															<span style={{color:"#bda28f"}}>!</span>
																															<span style={{color:"#bca18f"}}>!</span>
																															<span style={{color:"#bca28e"}}>!</span>
																															<span style={{color:"#baa08f"}}>m</span>
																															<span style={{color:"#b59d8c"}}>m</span>
																															<span style={{color:"#b29c8a"}}>m</span>
																															<span style={{color:"#ad9b8b"}}>r&nbsp;</span>
																															<span style={{color:"#708fb2"}}>&lt;</span>
																															<span style={{color:"#6597c7"}}>]</span>
																															<span style={{color:"#6695c3"}}>H</span>
																															<span style={{color:"#6298cb"}}>]</span>
																															<span style={{color:"#6598c9"}}>p</span>
																															<span style={{color:"#6396c7"}}>N</span>
																															<span style={{color:"#6199cf"}}>[</span>
																															<span style={{color:"#6099ce"}}>]</span>
																															<span style={{color:"#6298cc"}}>@</span>
																															<span style={{color:"#6297c9"}}>H</span>
																															<span style={{color:"#6797c4"}}>[</span>
																															<span style={{color:"#6b92ba"}}>q</span>
																															<span style={{color:"#6595c7"}}>%</span>
																															<span style={{color:"#6697c7"}}>m</span>
																															<span style={{color:"#7296b9"}}>M</span>
																															<span style={{color:"#96a3b2"}}>)</span>
																															<span style={{color:"#b19e90"}}>m</span>
																															<span style={{color:"#bca28f"}}>!</span>
																															<span style={{color:"#bda18f"}}>!</span>
																															<span style={{color:"#bca28e"}}>!</span>
																															<span style={{color:"#af9b8d"}}>L</span>
																															<span style={{color:"#f7d1c1"}}>&amp;</span>
																															<span style={{color:"#fdd4c2"}}>&amp;</span>
																															<span style={{color:"#f7d0bf"}}>@</span>
																															<span style={{color:"#efccbd"}}>B</span>
																															<span style={{color:"#f4cfbe"}}>$</span>
																															<span style={{color:"#f6d1c1"}}>&amp;</span>
																															<span style={{color:"#8e95a3"}}>v</span>
																															<span style={{color:"#6f92b7"}}>F</span>
																															<span style={{color:"#8196a5"}}>r</span>
																															<span style={{color:"#65ad86"}}>L</span>
																															<span style={{color:"#929e8d"}}>j</span>
																															<span style={{color:"#ab998d"}}>r</span>
																															<span style={{color:"#6cad80"}}>j</span>
																															<span style={{color:"#889c87"}}>`</span>
																															<span style={{color:"#60ad7d"}}>r</span>
																															<span style={{color:"#9e978a"}}>j</span>
																															<span style={{color:"#909f89"}}>,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																															<span style={{color:"#aa988b"}}>]</span>
																															<span style={{color:"#bca28f"}}>!</span>
																															<span style={{color:"#bca28f"}}>!</span>
																															<span style={{color:"#bca28e"}}>!</span>
																															<span style={{color:"#bca28f"}}>!</span>
																															<span style={{color:"#bda18f"}}>!</span>
																															<br/>
																																<span style={{color:"#bda28f"}}>!</span>
																																<span style={{color:"#bca18e"}}>j</span>
																																<span style={{color:"#bca18f"}}>j</span>
																																<span style={{color:"#b69f8e"}}>k</span>
																																<span style={{color:"#bfa696"}}>|</span>
																																<span style={{color:"#ceb1a3"}}>g</span>
																																<span style={{color:"#e2c1b4"}}>&amp;</span>
																																<span style={{color:"#d9bdb3"}}>&amp;</span>
																																<span style={{color:"#9ca4b1"}}>p</span>
																																<span style={{color:"#718fb1"}}>|</span>
																																<span style={{color:"#6d92b8"}}>j</span>
																																<span style={{color:"#6b92ba"}}>%</span>
																																<span style={{color:"#6893c0"}}>|</span>
																																<span style={{color:"#6696c4"}}>]</span>
																																<span style={{color:"#6695c4"}}>r</span>
																																<span style={{color:"#6796c4"}}>j</span>
																																<span style={{color:"#6696c4"}}>[</span>
																																<span style={{color:"#7899ba"}}>j</span>
																																<span style={{color:"#98a2b0"}}>[</span>
																																<span style={{color:"#ada6a3"}}>g</span>
																																<span style={{color:"#b19e90"}}>m</span>
																																<span style={{color:"#b99f8d"}}>m</span>
																																<span style={{color:"#bca28e"}}>!</span>
																																<span style={{color:"#bca18e"}}>!</span>
																																<span style={{color:"#bda28f"}}>!</span>
																																<span style={{color:"#bda28f"}}>!!</span>
																																<span style={{color:"#bca28e"}}>!</span>
																																<span style={{color:"#b9a18e"}}>m</span>
																																<span style={{color:"#cab1a6"}}>J</span>
																																<span style={{color:"#fdd4c1"}}>&amp;</span>
																																<span style={{color:"#f8d3c2"}}>$</span>
																																<span style={{color:"#c4ada2"}}>\</span>
																																<span style={{color:"#b69f91"}}>j</span>
																																<span style={{color:"#ad9a8c"}}>r</span>
																																<span style={{color:"#b49f8e"}}>[</span>
																																<span style={{color:"#85a188"}}>.</span>
																																<span style={{color:"#af9c8d"}}>]</span>
																																<span style={{color:"#5fb17e"}}>|</span>
																																<span style={{color:"#aa978a"}}>]&nbsp;&nbsp;</span>
																																<span style={{color:"#5db37e"}}>j</span>
																																<span style={{color:"#6aa67f"}}>`</span>
																																<span style={{color:"#5db07d"}}>/</span>
																																<span style={{color:"#59b67c"}}>)</span>
																																<span style={{color:"#77937f"}}>,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																<span style={{color:"#979393"}}>,</span>
																																<span style={{color:"#a4a1a0"}}>=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																<span style={{color:"#bdb2a5"}}>]</span>
																																<span style={{color:"#d7c8b8"}}>Q</span>
																																<span style={{color:"#cdc5bb"}}>7</span>
																																<span style={{color:"#afaead"}}>w&nbsp;&nbsp;</span>
																																<span style={{color:"#ad998a"}}>]</span>
																																<span style={{color:"#bda18e"}}>!</span>
																																<span style={{color:"#bda28f"}}>!</span>
																																<span style={{color:"#bda28f"}}>!!!!</span>
																																<br/>
																																	<span style={{color:"#bca28f"}}>!</span>
																																	<span style={{color:"#b6a398"}}>]</span>
																																	<span style={{color:"#efc9ba"}}>$</span>
																																	<span style={{color:"#fcd5c3"}}>&amp;</span>
																																	<span style={{color:"#d8bdb1"}}>]</span>
																																	<span style={{color:"#f1cdbd"}}>&amp;</span>
																																	<span style={{color:"#e2c4b6"}}>F</span>
																																	<span style={{color:"#ccb1a1"}}>|</span>
																																	<span style={{color:"#bca596"}}>s</span>
																																	<span style={{color:"#ad9d93"}}>m</span>
																																	<span style={{color:"#b09e93"}}>m</span>
																																	<span style={{color:"#b09c8f"}}>m</span>
																																	<span style={{color:"#ae9e95"}}>m</span>
																																	<span style={{color:"#aba3a0"}}>m</span>
																																	<span style={{color:"#aca4a0"}}>m</span>
																																	<span style={{color:"#b0a29a"}}>m</span>
																																	<span style={{color:"#b69e8f"}}>m</span>
																																	<span style={{color:"#bca18e"}}>!</span>
																																	<span style={{color:"#bca18f"}}>!</span>
																																	<span style={{color:"#bda28f"}}>!</span>
																																	<span style={{color:"#bda28f"}}>!!!!!!</span>
																																	<span style={{color:"#bda18f"}}>!</span>
																																	<span style={{color:"#b59e8f"}}>[</span>
																																	<span style={{color:"#d3b8ac"}}>g</span>
																																	<span style={{color:"#fdd4c2"}}>&amp;</span>
																																	<span style={{color:"#f7d1c1"}}>$</span>
																																	<span style={{color:"#b4a195"}}>Y</span>
																																	<span style={{color:"#b3a18f"}}>k</span>
																																	<span style={{color:"#96a78c"}}>{'{'}</span>
																																	<span style={{color:"#a29f8e"}}>L</span>
																																	<span style={{color:"#8aa88a"}}>r&nbsp;</span>
																																	<span style={{color:"#999a8c"}}>&apos;</span>
																																	<span style={{color:"#64a97d"}}>.</span>
																																	<span style={{color:"#73a481"}}>.</span>
																																	<span style={{color:"#62b080"}}>\</span>
																																	<span style={{color:"#709e7e"}}>,</span>
																																	<span style={{color:"#6da27e"}}>.</span>
																																	<span style={{color:"#66a87d"}}>~</span>
																																	<span style={{color:"#69a67f"}}>`</span>
																																	<span style={{color:"#57b97e"}}>\&nbsp;</span>
																																	<span style={{color:"#5fb07e"}}>)&nbsp;&nbsp;&nbsp;</span>
																																	<span style={{color:"#c3c2c3"}}>A</span>
																																	<span style={{color:"#cdb9a5"}}>]</span>
																																	<span style={{color:"#e8c299"}}>@</span>
																																	<span style={{color:"#ecc59a"}}>@</span>
																																	<span style={{color:"#e1bf99"}}>@</span>
																																	<span style={{color:"#bea88f"}}>W&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																	<span style={{color:"#b19e8c"}}>g</span>
																																	<span style={{color:"#e5c199"}}>@</span>
																																	<span style={{color:"#ecc59a"}}>@</span>
																																	<span style={{color:"#ecc59a"}}>@</span>
																																	<span style={{color:"#ecc59a"}}>@</span>
																																	<span style={{color:"#b3a596"}}>H&nbsp;</span>
																																	<span style={{color:"#b79e8d"}}>m</span>
																																	<span style={{color:"#bda18e"}}>!</span>
																																	<span style={{color:"#bda18f"}}>!</span>
																																	<span style={{color:"#bda28f"}}>!</span>
																																	<span style={{color:"#bda28f"}}>!!!!</span>
																																	<br/>
																																		<span style={{color:"#bca28e"}}>!</span>
																																		<span style={{color:"#b69f8e"}}>m</span>
																																		<span style={{color:"#c1a99b"}}>|</span>
																																		<span style={{color:"#cfb3a5"}}>T</span>
																																		<span style={{color:"#e9c6b8"}}>$</span>
																																		<span style={{color:"#fcd4c2"}}>&amp;</span>
																																		<span style={{color:"#e6c6b8"}}>&amp;</span>
																																		<span style={{color:"#b19c8e"}}>]</span>
																																		<span style={{color:"#bca28f"}}>!</span>
																																		<span style={{color:"#bda28f"}}>!</span>
																																		<span style={{color:"#bda28f"}}>!!!!!!!!!!!!!!</span>
																																		<span style={{color:"#bca18f"}}>!</span>
																																		<span style={{color:"#bca28f"}}>!</span>
																																		<span style={{color:"#ab9a92"}}>*</span>
																																		<span style={{color:"#a19894"}}>&lt;</span>
																																		<span style={{color:"#c7b2a9"}}>]</span>
																																		<span style={{color:"#ccb2a6"}}>|</span>
																																		<span style={{color:"#b7a090"}}>;</span>
																																		<span style={{color:"#bca28f"}}>(</span>
																																		<span style={{color:"#a39f8d"}}>/</span>
																																		<span style={{color:"#84a587"}}>r</span>
																																		<span style={{color:"#94a48c"}}>&quot;</span>
																																		<span style={{color:"#98a38c"}}>(</span>
																																		<span style={{color:"#63ad7e"}}>r</span>
																																		<span style={{color:"#64ab7d"}}>L</span>
																																		<span style={{color:"#719e7e"}}>`</span>
																																		<span style={{color:"#55bb7e"}}>(</span>
																																		<span style={{color:"#62ab7d"}}>;</span>
																																		<span style={{color:"#5ab67d"}}>[</span>
																																		<span style={{color:"#56ba7e"}}>r</span>
																																		<span style={{color:"#67a97e"}}>`</span>
																																		<span style={{color:"#58b67d"}}>r</span>
																																		<span style={{color:"#55bb7b"}}>(&nbsp;</span>
																																		<span style={{color:"#68a880"}}>&apos;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																		<span style={{color:"#bea68f"}}>?</span>
																																		<span style={{color:"#e5c09a"}}>8</span>
																																		<span style={{color:"#d3b695"}}>%</span>
																																		<span style={{color:"#cdb294"}}>Q</span>
																																		<span style={{color:"#c0aa92"}}>L</span>
																																		<span style={{color:"#c4ad96"}}>T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																		<span style={{color:"#bea791"}}>F</span>
																																		<span style={{color:"#dabc99"}}>@</span>
																																		<span style={{color:"#cbb094"}}>z</span>
																																		<span style={{color:"#d1b596"}}>Q</span>
																																		<span style={{color:"#d9bb99"}}>M</span>
																																		<span style={{color:"#a99a8c"}}>*&nbsp;&nbsp;</span>
																																		<span style={{color:"#b9a08f"}}>j</span>
																																		<span style={{color:"#bda28f"}}>!</span>
																																		<span style={{color:"#bda28f"}}>!!!!!!</span>
																																		<br/>
																																			<span style={{color:"#bda28f"}}>!</span>
																																			<span style={{color:"#bca28f"}}>!</span>
																																			<span style={{color:"#bca28e"}}>!</span>
																																			<span style={{color:"#bda18e"}}>!</span>
																																			<span style={{color:"#b2a099"}}>j</span>
																																			<span style={{color:"#fdd3c1"}}>&amp;</span>
																																			<span style={{color:"#fdd4c1"}}>&amp;</span>
																																			<span style={{color:"#d4baad"}}>W</span>
																																			<span style={{color:"#baa59a"}}>(</span>
																																			<span style={{color:"#b7a191"}}>!</span>
																																			<span style={{color:"#bca28f"}}>!</span>
																																			<span style={{color:"#bda28f"}}>!</span>
																																			<span style={{color:"#bda28f"}}>!!!!!!!!!!!!</span>
																																			<span style={{color:"#bca28f"}}>!</span>
																																			<span style={{color:"#bda18e"}}>!</span>
																																			<span style={{color:"#bca18e"}}>!</span>
																																			<span style={{color:"#b69e8e"}}>m</span>
																																			<span style={{color:"#b8a293"}}>y</span>
																																			<span style={{color:"#bca18f"}}>j</span>
																																			<span style={{color:"#bda18e"}}>!</span>
																																			<span style={{color:"#bca28f"}}>!</span>
																																			<span style={{color:"#bda18f"}}>!</span>
																																			<span style={{color:"#b89f8d"}}>m</span>
																																			<span style={{color:"#6ab282"}}>)</span>
																																			<span style={{color:"#8a9e87"}}>`</span>
																																			<span style={{color:"#66a97e"}}>`</span>
																																			<span style={{color:"#6fa07e"}}>`</span>
																																			<span style={{color:"#5eb17d"}}>]</span>
																																			<span style={{color:"#54bb7c"}}>]</span>
																																			<span style={{color:"#6ea27d"}}>`</span>
																																			<span style={{color:"#66ac7d"}}>:</span>
																																			<span style={{color:"#60b07e"}}>\</span>
																																			<span style={{color:"#60af7e"}}>\</span>
																																			<span style={{color:"#5cb37e"}}>r</span>
																																			<span style={{color:"#64ab7d"}}>`</span>
																																			<span style={{color:"#66ab7f"}}>j</span>
																																			<span style={{color:"#75967f"}}>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																			<span style={{color:"#a89a8b"}}>?</span>
																																			<span style={{color:"#b09f8f"}}>/</span>
																																			<span style={{color:"#a4978b"}}>r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																			<span style={{color:"#958d86"}}>&apos;</span>
																																			<span style={{color:"#a5978b"}}>&lt;</span>
																																			<span style={{color:"#ac9c8e"}}>*</span>
																																			<span style={{color:"#a3968a"}}>&quot;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																			<span style={{color:"#baa18f"}}>[</span>
																																			<span style={{color:"#bda28f"}}>!</span>
																																			<span style={{color:"#bda28f"}}>!!!!!!</span>
																																			<br/>
																																				<span style={{color:"#bda28f"}}>!!!</span>
																																				<span style={{color:"#bca18f"}}>!</span>
																																				<span style={{color:"#b89f8e"}}>m</span>
																																				<span style={{color:"#bfa696"}}>L</span>
																																				<span style={{color:"#c5aa9a"}}>|</span>
																																				<span style={{color:"#bca494"}}>j</span>
																																				<span style={{color:"#b29c8c"}}>m</span>
																																				<span style={{color:"#bda595"}}>j</span>
																																				<span style={{color:"#bba08e"}}>k</span>
																																				<span style={{color:"#bda28f"}}>!</span>
																																				<span style={{color:"#bda28f"}}>!!!!!!!!!!!!!!!!!!!!!</span>
																																				<span style={{color:"#bda18e"}}>!</span>
																																				<span style={{color:"#b9a18e"}}>m</span>
																																				<span style={{color:"#949d8a"}}>,</span>
																																				<span style={{color:"#b49d8c"}}>m</span>
																																				<span style={{color:"#a9978a"}}>m</span>
																																				<span style={{color:"#86aa88"}}>/</span>
																																				<span style={{color:"#6cab7f"}}>r</span>
																																				<span style={{color:"#baa28f"}}>k</span>
																																				<span style={{color:"#b9a791"}}>k</span>
																																				<span style={{color:"#b79e8e"}}>m</span>
																																				<span style={{color:"#abac92"}}>m</span>
																																				<span style={{color:"#a6af92"}}>m</span>
																																				<span style={{color:"#b3a992"}}>m</span>
																																				<span style={{color:"#9f988c"}}>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																				<span style={{color:"#b69e8d"}}>]</span>
																																				<span style={{color:"#bda18e"}}>!</span>
																																				<span style={{color:"#bda28f"}}>!</span>
																																				<span style={{color:"#bda28f"}}>!!!!</span>
																																				<br/>
																																					<span style={{color:"#9b8d85"}}>`</span>
																																					<span style={{color:"#baa18f"}}>%</span>
																																					<span style={{color:"#bda18f"}}>!</span>
																																					<span style={{color:"#bda28f"}}>!</span>
																																					<span style={{color:"#bda28f"}}>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</span>
																																					<span style={{color:"#bda18e"}}>!</span>
																																					<span style={{color:"#bca28f"}}>!</span>
																																					<span style={{color:"#bca28e"}}>!</span>
																																					<span style={{color:"#bca18f"}}>k</span>
																																					<span style={{color:"#b9a590"}}>k</span>
																																					<span style={{color:"#bca18f"}}>!</span>
																																					<span style={{color:"#bda28f"}}>!</span>
																																					<span style={{color:"#bda28f"}}>!</span>
																																					<span style={{color:"#bca28f"}}>!</span>
																																					<span style={{color:"#bca28e"}}>!</span>
																																					<span style={{color:"#a5958a"}}>&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
																																					<span style={{color:"#bca28f"}}>!</span>
																																					<span style={{color:"#bda28f"}}>!</span>
																																					<span style={{color:"#bda28f"}}>!!!!</span>
																																					<br/>
																																						<br/>

        </div>
        <div className="title-container">
            Holy, Holy - Geordie Greep
		</div>
		<div className="music-player">
			<button onClick={handlePlayPause}>
        		{isPlaying ? 'Pause' : 'Play'}
      		</button>
			<div style={{ position: 'absolute', visibility: 'hidden', height: 0 }}>
			{/* <div style={{ width: '640px', height: '360px' }}> */}
          		<div id="youtube-player"></div>
        	</div>
		</div>
    <div className="lyrics-container">
      I could tell you were lonely<br/>
      From the moment you walked in<br/>
      From the way you had your makeup on<br/>
      From the way you&apos;d done your hair<br/>
      From the way you sat down next to me<br/>
      From the way you ordered your drink<br/>
      From the moment you put your hand on my knee<br/>
      I knew I&apos;d have you with ease<br/>
      Do you come here often?<br/>
      Do you know how this thing works?<br/>
      Do you go to bed with a different man every night?<br/>
      Don&apos;t tell me I&apos;m the first<br/><br/>

      You must have heard about me<br/>
      Everyone knows my name<br/>
      Everyone knows I&apos;m holy<br/>
      Holy, holy, holy, holy<br/>
      All the revolutionaries (Holy, holy)<br/>
      All the Jihadis too (Holy, holy)<br/>
      &apos;Round the world, I&apos;m holy (Holy, holy)<br/><br/>

      Holy, holy, holy, holy<br/>
      Holy, holy, holy, holy<br/>
      Holy, holy, holy, holy<br/>
      Holy, holy<br/><br/>
      
      Do you know my name?<br/>
      Of course, you know my name<br/>
      Everyone does, it&apos;s true<br/>
      It&apos;s true, it&apos;s true, it&apos;s true<br/>
      That I&apos;m known around here<br/>
      The barmaids know my name<br/>
      I&apos;ve had them all before<br/>
      You are new, I&apos;ll have you too<br/>
      It&apos;s time to give in<br/>
      From the shores of Havana<br/>
      To Moscow and Tokyo<br/>
      In French Guyanese, in Cantonese<br/>
      Everyone knows my name<br/><br/>

      Holy<br/>
      All the revolutionaries (Holy, holy)<br/>
      All the Jihadis too (Holy, holy)<br/>
      Everyone knows I&apos;m holy (Holy, holy)<br/>
      How &apos;bout we dance some salsa? (Holy, holy)<br/>
      I&apos;ll spin you round and round (Holy, holy)<br/>
      On the dance floor, I&apos;m holy (Holy, holy)<br/>
      How &apos;bout we take this further? (Holy, holy)<br/>
      I&apos;ll meet you in the bathroom (Holy, holy)<br/>
      I&apos;ll bet your pussy is holy too<br/><br/>

      I&apos;ll arrive at around 7pm<br/>
      And I want you to get there no later than 10<br/>
      I want you to be dressed like a sophisticated tart<br/>
      With too much makeup on, will that be alright?<br/>
      And I want you to sit down next to me, as if by chance<br/>
      I want it to seem like we&apos;ve never met before<br/>
      How much will that cost?<br/>
      I want you to look unsure of yourself<br/>
      And I want you to look at me as if I&apos;m attractive<br/>
      I want your eyes to say, &quot;Take me&quot;<br/>
      And I want your lips to be unimpressed<br/>
      And I want you to ask the waiter if I really am who I say I am<br/>
      And I want you to blush<br/>
      I want you to shoot a smug look at the other girls<br/>
      To make them jealous I chose you<br/>
      When I tell you your pussy is holy<br/>
      I want you to slap me and then kiss me<br/>
      Make sure everybody&apos;s watching, kiss me and then walk away<br/>
      Walk to the bathroom, I&apos;ll follow after<br/>
      Don&apos;t worry, we won&apos;t do anything<br/>
      We&apos;ll just loiter there fifteen minutes or so<br/>
      Then I&apos;ll choose your new lipstick and we&apos;ll walk back out<br/>
      And I want you to tell me I&apos;m a perfect dancer<br/>
      And I want you to tell me I smell great<br/>
      I want you to make me look taller<br/>
      Could you kneel down the whole time?<br/>
      How much will that cost?<br/>
      I want you to put your hand on my knee<br/>
      Will that be alright?<br/>
      I want you to look at me as if you&apos;re lost<br/>
      How much will that cost?<br/><br/>
      
      Thank you so much<br/>
      We&apos;ll meet the same time next week<br/>
      And the next week after that too<br/>
      And the next week after that<br/>
      And the next month, and the next...<br/>
      
    </div>
    </div>
	</div>
  );
}

export default Page;