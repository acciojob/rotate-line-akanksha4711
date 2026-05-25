//your JS code here. If required.
const line = document.getElementById("line");
let deg = 0;
setInterval(() => {
	line.style.transform = `rotate(${deg}deg)`;
	deg += 2;
}, 20)