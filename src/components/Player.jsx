import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	const audioRef = useRef();
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	const onClickHandler = () => {
		if (!isPlaying) audioRef.current.play();
		else audioRef.current.pause();

		//* toggling
		setIsPlaying(!isPlaying);
	};

	//* updating the song info
	const onTimeUpdateHandler = () => {
		const audio = audioRef.current;
		setSongInfo({
			...songInfo,
			currentTime: audio.currentTime,
			duration: audio.duration,
		});
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

	return (
		<div className="player-container">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					min={0}
					max={songInfo.duration}
					value={songInfo.currentTime}
					onChange={dragHandler}
					type="range"
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>

			<div className="play-control">
				<FontAwesomeIcon
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
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
			</div>

			<audio
				ref={audioRef}
				onLoadedMetadata={onTimeUpdateHandler}
				onTimeUpdate={onTimeUpdateHandler}
				src={currentSong.audio}
			/>
		</div>
	);
};

export default Player;
