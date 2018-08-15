function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    var s = (i === 1)? '' : 's'
    array.push("I am " + i + " strange loop" + s + ".")
  }
  return array
}