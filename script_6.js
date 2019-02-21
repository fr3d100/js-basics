const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


//Constitution d'un  hash des entrepreneurs néés dans les années 70:
const entrepreneurs70s = []
for(i=0; i< entrepreneurs.length; i ++){
  if(entrepreneurs[i].year > 1969 && entrepreneurs[i].year < 1980 ){
    entrepreneurs70s.push(entrepreneurs[i])
  }
}
//Afichage des résultats
console.log("Tableau des entrepreneurs nés dans les années 70 :");
console.log(entrepreneurs70s)

// Affichage de la combinaison "prénom nom" de chaque entrepreneurs
console.log("Tableau des noms complets de tous ces brillants hommes :");
let fullNames = []
for(i=0; i< entrepreneurs.length; i ++){
  fullNames.push(entrepreneurs[i].first +" "+ entrepreneurs[i].last);
}
console.log(fullNames);

//Calcul des âge à date de ces inventeurs :
console.log("Voici l'âge qu'auraient chacun des ces inventeurs en 2019 :");
const currentYear = new Date().getFullYear();
for(i=0; i< entrepreneurs.length; i ++){
  console.log(entrepreneurs[i].first +" "+ entrepreneurs[i].last+" : " + (currentYear - entrepreneurs[i].year ) + " ans");
}

//Trie des inventeurs par nom de famille :
console.log("Liste des inventeurs triés alphabétiquement par nom de famille : ");
sortedArray = entrepreneurs.sort(function(a,b){
  if(a.last < b.last) {return -1;}
  if(a.last > b.last) {return 1;}
    return 0;
})
console.log(sortedArray);