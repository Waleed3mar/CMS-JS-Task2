//--------------------------------------------------Task3

let arrFromUsr1 = prompt('Num 1')
arrayFormat = /^[0-9]+$/

let fullArr = []

while (!arrFromUsr1.match(arrayFormat)) {
	arrFromUsr1 = prompt('Num 1 ')
}
let arrFromUsr2 = prompt('Num 2')
fullArr.push(arrFromUsr1)
while (!arrFromUsr2.match(arrayFormat)) {
	arrFromUsr2 = prompt('Num 2')
}
let arrFromUsr3 = prompt('Num 3')
fullArr.push(arrFromUsr2)
while (!arrFromUsr3.match(arrayFormat)) {
	arrFromUsr3 = prompt('Num 3')
}
let arrFromUsr4 = prompt('Num 4')
fullArr.push(arrFromUsr3)
while (!arrFromUsr4.match(arrayFormat)) {
	arrFromUsr4 = prompt('Num 4')
}
let arrFromUsr5 = prompt('Num 5')
fullArr.push(arrFromUsr4)
while (!arrFromUsr5.match(arrayFormat)) {
	arrFromUsr5 = prompt('Num 5')
}
fullArr.push(arrFromUsr5)

let x1 = fullArr.slice()
document.write(`<center> The numbers U have Enterd: ${x1} </center> <br>`)
document.write(`<center> Numbers after being sorted ascending: ${x1.sort((a, b) => a - b)} </center> <br>`)
document.write(`<center> Numbers after being sorted descending: ${x1.sort((a, b) => b - a)} </center>`)

