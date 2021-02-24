import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({
	songs,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`library ${libraryStatus ? "active-library" : ""}`}>
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map((song) => {
					return (
						<LibrarySongs
							setCurrentSong={setCurrentSong}
							song={song}
							songs={songs}
							setSongs={setSongs}
							audioRef={audioRef}
							isPlaying={isPlaying}
							key={song.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Library;
