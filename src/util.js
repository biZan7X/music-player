import { v4 as uuidv4 } from "uuid";

function chillHop() {
	return [
		{
			name: "She Won't Say",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-1024x1024.jpg",
			artist: "Psalm Trees",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10536",
			color: ["#EAE6D9", "#E3CF72"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Bloom",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
			artist: "Blue Wednesday",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=11235",
			color: ["#9BA4DB", "#5E669D"],
			id: uuidv4(),
			active: false,
		},
	];
}

export default chillHop;
