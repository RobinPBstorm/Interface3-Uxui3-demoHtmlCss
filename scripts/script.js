console.log("Bienvenue dans ce cours de JS.")
var name = "Robin"
console.log(name)
console.log(typeof name)

name = "Paula"
console.log(name)
console.log(typeof name)

name = 14
console.log(name)
console.log(typeof name)
/* var est plutôt déconseillé */

/* prompt va attendre l'entrée de l'utilisateur 
pour la stocker dans une variable  */
let age = prompt("Quel est votre age?")

/* alert ouvre un popup avec notre message */
alert(age)

/* opérations mathématiques */
/* + addition */
/* - soustraction */
/* / division */
/* * multiplication */
/* % modulo = reste de la division entière*/
console.log(5 / 2) // 2.5
// 5 => 4 + 1 => reste de la division par 2 = 1
console.log(5 % 2) // 1

/* opérations génériques */
name = "Alice"
/* + = concaténation = colle les chaines de caractères */
console.log("Mon nom est "+ name)

/* la différence ente addition et concaténation 
tient dans les 2 valuers qu'on manipule:
number + number = addition
number + string = concaténation
string + string = concaténation
*/

/* slice = ressort une partie d'un texte ou d'un tableau 
    /!\ on indique les positions à partir de zero
    slice(position_depart, position_fin_non_incluse)
*/
console.log("Alice".slice(0,2))

function cliqueBoutton() {
    alert('coucou')

    let maDiv = document.querySelector("#contenu-boutton")
    maDiv.innerHTML = ""

    let maPhrase = document.createElement("p")
    maPhrase.innerHTML = "J'aime les chats !"
    maDiv.append(maPhrase) 

    let monImage = document.createElement("img")
    monImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAESK_7TivTqwhHZtM-9I8HEl-HyNdrH0cA&s"
    maDiv.append(monImage)
}

function addition(chiffre1, chiffre2) {
    let somme = chiffre1 + chiffre2
    return somme
}
console.log(addition(2,2))

/* structure conditionnelle */

age = prompt("Quelle est votre age?")

/* si age est strictement plus petit que 18 */
if (age < 18) {
/* alors */    
    console.log("Vous étes mineur-e")
}
/* sinon */
else {
/* alors ceci */
    console.log("Vous étes majeur-e")
}

/* structure itérative */
let compteur = 1

while(compteur <= 5) {
    console.log(compteur)
    compteur = compteur + 1
}

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

