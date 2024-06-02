let rFormat = /^[0-9]+/
do {
	var r = prompt("What is the value of circle raduis? ");
} while (!r.match(rFormat));

let area = Math.PI * r * r;
alert("Area = " + area);


// ---------------------------------------------------------------------------------
do {
	var square = prompt("What is the value U want to Calc its square root? ");
} while (!square.match(rFormat));

let squareRoot = Math.sqrt(square);
alert(`square Root of ${square} =  ${squareRoot}`);



// ---------------------------------------------------------------------------------
do {
	var angle = prompt("Enter The angle: ");
} while (!angle.match(rFormat));
let cosAngle = Math.round(Math.cos(angle * (Math.PI / 180)));
document.write(`cos ${angle}<sup>o</sup> is ${cosAngle.toPrecision(4)}`)