function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    s = "I am " + ${i} + " strange loop.";
    array.push(s)
  }
  return array
}