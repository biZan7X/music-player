import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({
	songs,
	setSongs,
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	songInfo,
	setSongInfo,
	audioRef,
}) => {
	useEffect(() => {
		const newSongs = songs.map((index) => {
			if (index.id === currentSong.id) index.active = true;
			else index.active = false;

			return index;
		});

		setSongs(newSongs);
	}, [currentSong]);

	const onClickHandler = () => {
		if (!isPlaying) audioRef.current.play();
		else audioRef.current.pause();

		//* toggling
		setIsPlaying(!isPlaying);
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	const dragHandler = (e) => {
		//* changing the ui
		setSongInfo({ ...songInfo, currentTime: e.target.value });

		//* changing the audio
		audioRef.current.currentTime = e.target.value;
	};

	const skipTrackHandler = (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "forward") {
			setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		} else {
			if (currentIndex === 0) setCurrentSong(songs[songs.length - 1]);
			else setCurrentSong(songs[(currentIndex - 1) % songs.length]);
		}

		playAudio(isPlaying, audioRef);
	};

	return (
		<div className="player-container">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					min={0}
					max={songInfo.duration || 0}
					value={songInfo.currentTime}
					onChange={dragHandler}
					type="range"
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>

			<div className="play-control">
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("backward")}
					className="skip-back"
					size="2x"
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={onClickHandler}
					className="play"
					size="2x"
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("forward")}
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
			</div>
		</div>
	);
};

export default Player;
