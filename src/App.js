import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useRef } from "react";
import { useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import Nav from "./components/Nav";

//util
import data from "./data";

function App() {
	const [song, setSong] = useState(data);
	const [currentSong, setCurrentSong] = useState(song[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);

	const audioRef = useRef();

	//* updating the song info
	const onTimeUpdateHandler = () => {
		const audio = audioRef.current;
		setSongInfo({
			...songInfo,
			currentTime: audio.currentTime,
			duration: audio.duration,
		});
	};

	return (
		<div className="App">
			<Nav
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
			/>
			<Song currentSong={currentSong} />
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
			/>
		</div>
	);
}

export default App;
