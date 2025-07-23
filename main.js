function updateClock() {
  const now = new Date();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let hours = now.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  // Proper zero-padding
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours} : ${minutes} : ${seconds} ${ampm}`;
  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // initial call
