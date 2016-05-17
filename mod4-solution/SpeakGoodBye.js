(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + byeSpeaker.name);
  byeSpeaker.name = name;
}
window.byeSpeaker = byeSpeaker;
}) (window);