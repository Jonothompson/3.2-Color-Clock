window.setInterval(currentTime, 1000);

var $clock = document.querySelector(".clock");

function currentTime() {
	var clockTime = new Date();
	var hours = clockTime.getHours();
	var minutes = clockTime.getMinutes();
	var seconds = clockTime.getSeconds();
	hours = (hours < 10 ? "0" : "") + hours;
	minutes = (minutes < 10 ? "0" : "") + minutes;
	seconds = (seconds < 10 ? "0" : "") + seconds;
	
	$clock.textContent = hours + ":" + minutes + ":" +seconds;
	
	var timeBar = (seconds / 60) * 100;

	var timeBarPercent = String(timeBar) + "%";
	
	document.querySelector(".expandingHr").style.width = timeBarPercent;
}

currentTime();