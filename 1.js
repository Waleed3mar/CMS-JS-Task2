//--------------------------------------------------Task1

let nameFormat = /^[A-Za-z]+$/
let namee = prompt("Enter your Name: ")
while (!namee.match(nameFormat)) {
	namee = prompt("Inavalid! only Characters Allowed - Enter your Name again: ")
}


let phoneFormat = /^[0-9]{8}$/
let phone = prompt("Enter your Phone: ")
while (!phone.match(phoneFormat)) {
	phone = prompt("Inavalid! Phone should be 8 numbers - Enter your Phone again: ")
}

let mobileFormat = /^(01)(0|1|2|5)[0-9]{8}$/
let mobile = prompt("Enter your Mobile: ")
while (!mobile.match(mobileFormat)) {
	mobile = prompt("Inavalid!  Enter your Mobile: ")
}

let emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/

let email = prompt("Enter your email: ")
while (!email.match(emailFormat)) {
	email = prompt("Inavalid!  Enter your Email: ")
}

let colorFormat = /(red|green|blue)/i
let color = prompt("choose color (red, green, or blue): ")
while (!color.match(colorFormat)) {
	color = prompt("Inavalid!, Colors: red, green, or blue ")
}

document.write("<div style=color:" + color + ">" + ` Welcome Dear Guest ${namee}<br> Telephone: ${phone}<br> Mobile: ${mobile} <br> Email: ${email}` + "</div>")