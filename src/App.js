import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";

//util
import data from "./util";

function App() {
	const [song, setSong] = useState(data);
	const [currentSong, setCurrentSong] = useState(song[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div className="App">
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
			<Library songs={song} />
		</div>
	);
}

export default App;
