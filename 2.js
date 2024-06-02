//--------------------------------------------------Task2

// disappointment and un-believable! are 14 charachters
let x = "Palestine will always remain free amidst all this disappointment and its people are writing an un-believable! history!"
let y = x.split(" ");
// console.log(y);

let longest = y[0]
for (let i in y) {
	// console.log(y[i].length);
	if (longest.length < y[i].length) {
		longest = y[i];
	}
}
console.log(longest)



