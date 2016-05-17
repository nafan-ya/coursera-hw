(function (window) {
var helloSpeaker = {};
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + helloSpeaker.name);
helloSpeaker.name = name;
}
window.helloSpeaker = helloSpeaker;
}) (window);