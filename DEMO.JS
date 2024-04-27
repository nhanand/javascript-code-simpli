function varExample() {
  // Scope is Outside of code block
  console.log(x)
  var x = 10
  console.log(x)
}
varExample()

//Let scope is valid inside the block

function letExample() {
  // Only block scope
  console.log(y)
  let y = 20
  console.log(y)
}

letExample()
