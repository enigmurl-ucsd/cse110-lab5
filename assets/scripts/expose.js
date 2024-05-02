// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	const image = document.querySelector("#expose img");
	const hornPicker = document.getElementById("horn-select");
	const volume = document.getElementById("volume");
	const volumeImage = document.querySelector("#volume-controls img");
	const audio = document.querySelector("audio");
	const submit = document.querySelector("button");

	const jsConfetti = new JSConfetti()

	let hornType = ""
	
	hornPicker.addEventListener("change", e => {
		const value = event.target.value;
		image.src = "assets/images/" + value + ".svg";
		console.log(value);

		hornType = value;
	});

	volume.addEventListener("input", e => {
		const value = event.target.value;
		let name;
		if (value == 0) {
			name = "volume-level-0.svg";
		} else if (value < 33) {
			name = "volume-level-1.svg";
		} else if (value < 67) {
			name = "volume-level-2.svg";
		} else {
			name = "volume-level-3.svg";
		}

		volumeImage.src = "assets/icons/" + name;
		audio.volume = parseInt(name) / 100.0;
	});


	submit.onclick = () => {
		audio.play();
		jsConfetti.addConfetti();		
	};

}
