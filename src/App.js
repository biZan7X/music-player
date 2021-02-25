import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useRef } from "react";
import { useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import Nav from "./components/Nav";

//state
import data from "./data";

//util
import { playAudio } from "./util";

function App() {
	const [song, setSong] = useState(data);
	const [currentSong, setCurrentSong] = useState(song[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animatePercentage: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);

	const audioRef = useRef();

	//* updating the song info
	const onTimeUpdateHandler = () => {
		const audio = audioRef.current;

		//! calculating the percentage of song played
		const roundedTime = Math.round(songInfo.currentTime);
		const roundedDuration = Math.round(songInfo.duration);
		const roundedPercentage = Math.round(
			(roundedTime / roundedDuration) * 100
		);

		setSongInfo({
			...songInfo,
			currentTime: audio.currentTime,
			duration: audio.duration,
			animatePercentage: roundedPercentage,
		});
	};

	//* auto-skip
	const onEndHandler = async () => {
		let currentIndex = song.findIndex((index) => index.id === currentSong.id);
		await setCurrentSong(song[(currentIndex + 1) % song.length]);

		if (isPlaying) audioRef.current.play();
	};

	return (
		<div className={`App ${libraryStatus ? "library-active" : ""}`}>
			<Nav
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
			/>
			<Song currentSong={currentSong} isPlaying={isPlaying} />
			<Player
				songs={song}
				setSongs={setSong}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				audioRef={audioRef}
			/>
			<Library
				songs={song}
				setSongs={setSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				libraryStatus={libraryStatus}
			/>

			<audio
				ref={audioRef}
				onLoadedMetadata={onTimeUpdateHandler}
				onTimeUpdate={onTimeUpdateHandler}
				src={currentSong.audio}
				onEnded={onEndHandler}
			/>
		</div>
	);
}

export default App;
