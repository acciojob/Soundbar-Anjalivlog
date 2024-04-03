//your JS code here. If required.
var sounds = [];

function playSound(soundFile) {
  var audio = new Audio("sounds/" + soundFile);
  audio.play();
  sounds.push(audio); // Store the Audio object in the array
}

function stopSound() {
  sounds.forEach(function(sound) {
    sound.pause();
    sound.currentTime = 0; // This line is to make sure the sound restarts when it is played again
  });
}