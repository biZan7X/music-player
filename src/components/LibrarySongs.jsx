import React from "react";
import { playAudio } from "../util";

const LibrarySongs = ({
	song,
	setCurrentSong,
	audioRef,
	isPlaying,
	songs,
	setSongs,
}) => {
	//! PROMISE : even before the song gets attached to the audioRef , our code executes
	const onClickHandler = () => {
		setCurrentSong(song);

		playAudio(isPlaying, audioRef);

		//* updating the active state of the list of song
		const newSongs = songs.map((index) => {
			if (index.id === song.id) index.active = true;
			else index.active = false;

			return index;
		});

		setSongs(newSongs);
	};

	return (
		<div
			onClick={onClickHandler}
			className={`library-song ${song.active ? "selected-song" : ""}`}
		>
			<img src={song.cover} alt="song" />

			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySongs;
