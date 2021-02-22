import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
	return (
		<div className="player-container">
			<div className="time-control">
				<p>start time</p>
				<input type="range" />
				<p>end time</p>
			</div>

			<div className="play-control">
				<FontAwesomeIcon icon={faAngleLeft} />
				<FontAwesomeIcon icon={faPlay} />
				<FontAwesomeIcon icon={faAngleRight} />
			</div>
		</div>
	);
};

export default Player;
