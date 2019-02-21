console.log("2.2.2 - la pyramide :");
const floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

//Boucle générale qui affichera une nouvelle ligne à chaque tour
for(i=0; i<floor; i ++) {
	line = [];
	//boucle pour les " "
	for(j=0; j<floor-i; j++){
		line.push(" ");
	}
	//Boucle pour les #
	for(k=0; k<i+1; k++){
		line.push("#");
	}
	console.log(line.join(""))
}
