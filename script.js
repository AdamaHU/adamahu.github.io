console.log('shbldf')

for (let i = 0; i < 21; i = i + 2) {
  console.log(i)
}

let printNumbersTill = (N) => {
    for (let i = 1; i < N + 1; i++) {
        console.log(i)
    }
}

let greetingsTo = (name) => {
    return 'Hello ' + name + '!'
}
console.log(greetingsTo('Adam'))

let printValues = [10, 102, 1234, 124345]
printValues.forEach((element) => {
    console.log(element)
})