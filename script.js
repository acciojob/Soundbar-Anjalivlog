//your JS code here. If required.
var sounds = [];

function playSound(soundFile) {
  var audio = new Audio("sounds/" + soundFile);
  audio.play();
  sounds.push(audio); // Store the Audio object in the array
  document.getElementById('buttons').appendChild(audio); // Add the audio element to the HTML
}

function stopSound() {
  sounds.forEach(function(sound) {
    sound.pause();
    sound.currentTime = 0; // This line is to make sure the sound restarts when it is played again
    document.getElementById('buttons').removeChild(sound); // Remove the audio element from the HTML
  });
  sounds = []; // Clear the array
}