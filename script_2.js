console.log("2.2.1 :");
const number = prompt("De quel nombre veut tu calculer la factorielle ?");
let result = 1;
for(i = 2; i <= number; i++){
	result = result * i;
}

let resultDisplay =` Le résultat est : ${result}`;

console.log(resultDisplay);