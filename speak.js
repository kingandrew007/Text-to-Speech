function speak() {
  let text = document.getElementById("input").value;
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
