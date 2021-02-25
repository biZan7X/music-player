export const playAudio = (isPlaying, audioRef) => {
	if (isPlaying) {
		const audioPromise = audioRef.current.play();

		//^ if the audio got loaded
		if (audioPromise !== undefined)
			audioPromise.then((audio) => {
				audioRef.current.play();
			});
	}
};
