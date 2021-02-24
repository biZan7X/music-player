export const playAudio = (isPlaying, audioRef) => {
	if (isPlaying) {
		const audioPromise = audioRef.current.play();

		//^ just an extra precaution that the promise is not undefined
		if (audioPromise !== undefined)
			audioPromise.then((audio) => {
				audioRef.current.play();
			});
	}
};
