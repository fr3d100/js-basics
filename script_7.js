const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
let allRented = true
for(i= 0; i<books.legth; i++){
	if(books[i].rented < 1){
		allRented = false;
	}
}

if(allRented){
	console.log("Tous les livres ont déja été emprunté au moins une fois !");
}
else{
	console.log("Certains livres n'ont pas été empruntés !");
}


//Livre le plus emprunté
maxRented = 0;
for(i= 0; i<books.length; i++){
	if (books[i].rented > maxRented){maxRented = books[i].rented;}
}
//Afichage du/des livre(s) les + loués :
console.log("Voici le/les livre(s) qui a/ont été le plus emprunté(s) ["+ maxRented +" fois] : ");
for(i= 0; i<books.length; i++){
	if(books[i].rented === maxRented){console.log(" > "+books[i].title);}
}

//Livre le - emprunté
minRented = maxRented;
for(i= 0; i<books.length; i++){
	if (books[i].rented < minRented){minRented = books[i].rented;}
}
//Afichage du/des livre(s) les + loués :
console.log("Voici le/les livre(s) qui a/ont été le plus emprunté(s) ["+ minRented +" fois] : ");
for(i= 0; i<books.length; i++){
	if(books[i].rented === minRented){console.log(" > "+books[i].title);}
}

//Livre avec l'ID 873495
for(i= 0; i<books.length; i++){
	if(books[i].id === 873495 ){console.log("Voici les infos du livre #873495" + "\n" + " > Titre : " + books[i].title + "\n" + " > Loué " + books[i].rented + " fois");}
}

//Suppression du livre ID
for(i= 0; i<books.length; i++){
	if(books[i].id === 133712 ){
		books.splice(i,1);
	};
}
console.log("Le livre #133712 a été supprimé ! Voici le nouveau tableau des livres : ");
console.log(books);

//Trie par ordre alphébétique
console.log("Voici les livres classés par ordre alphabétiques : ");
console.log("Liste des inventeurs triés alphabétiquement par nom de famille : ");
sortedArray = books.sort(function(a,b){
  if(a.title < b.title) {return -1;}
  if(a.title > b.title) {return 1;}
    return 0;
})
console.log(sortedArray);