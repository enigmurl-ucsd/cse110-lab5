// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	const img = document.querySelector("#explore img");
	const text = document.getElementById("text-to-speak");
	const button = document.querySelector("#explore button");
	const voiceSelect = document.getElementById("voice-select");
	const synth = window.speechSynthesis;

	let voices = []
	function populate() {
		voices = synth.getVoices();
		voices.forEach((v, i) => {
			const name = v.name;
			const option = document.createElement("option");
			option.value = i;
			option.innerText = `${name} (${v.lang})`;
			voiceSelect.appendChild(option);
		});
	}

	populate();
	if (synth.onvoiceschanged !== undefined) {
		synth.onvoiceschanged = populate;
	}

	button.onclick = () => {
		const index = voiceSelect.value;
		if (index !== "select") {
			const utterThis = new SpeechSynthesisUtterance(text.value);
			utterThis.voice = voices[index];
			img.src = 'assets/images/smiling-open.png'
			utterThis.addEventListener('end', () => {
				img.src = 'assets/images/smiling.png'
			});
			synth.speak(utterThis);
		}
	};
}
