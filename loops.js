function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    var s = (i === 1)? '' : 's'
    array.push("I am " + i + " strange loop" + s + ".")
  }
  return array
}

function whileLoop(n) {
  while(n--) {
    console.log(n + 1)
  }
  return 'done'
}

function incrementVariable() {
  i = i + 1
}
function doWhileLoop(array) {
  
}