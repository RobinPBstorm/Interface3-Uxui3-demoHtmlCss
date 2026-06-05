function validationProposition() {
    let input = document.querySelector("#entrée-utilisateur")
    
    if (input.value.length == 1) {
        lettreTrouvees.push(input.value)

        if (!motCache.includes(input.value)) {
            tentativeActuelle = tentativeActuelle - 1
            
            if (tentativeActuelle <= 0) {
                let boutton = document.querySelector("#boutton-validation")
                boutton.setAttribute("disabled", true)
            }
        }

        rafraichirMotAffiche()
        rafraichirTentativeAffiche()
    }
    else {
        if (input.value == motCache) {
            for(let compteur = 0; compteur < motCache.length; compteur = compteur +1) {
                lettreTrouvees.push(input.value[compteur])
            }
        }
        
        rafraichirMotAffiche()
        rafraichirTentativeAffiche()
    }

    input.value = ""
}
function rafraichirMotAffiche() {
    let motAffiche = ""
    for(let compteur = 0; compteur < motCache.length; compteur = compteur +1) {
        if (lettreTrouvees.includes(motCache[compteur])) {
            motAffiche += motCache[compteur]
        }
        else {
            motAffiche += "_ "
        }
    }

    let h1 = document.querySelector("#motCache")
    h1.innerHTML = motAffiche
}

function rafraichirTentativeAffiche() {
    let tentativeAffiche = ""
    for(let compteur = 0; 
        compteur < tentativeActuelle; 
        compteur = compteur +1) {
            tentativeAffiche += "♥️"
    }
    for(let compteur = 0; 
        compteur < tentativeMax - tentativeActuelle; 
        compteur = compteur +1) {
            tentativeAffiche += "🖤"
    }

    let divTentative = document.querySelector("#tentativeRestante")
    divTentative.innerHTML = tentativeAffiche
}
function restart() {
    tentativeActuelle = tentativeMax
    motCache = donnerMot()
    lettreTrouvees = []
    
    rafraichirMotAffiche()
    rafraichirTentativeAffiche()
}
function donnerMot() {
    let mots = ["lunette", "table", "informatique", "code", "chat"]
    /* Math.floor => arrondi en dessous 
        Math.random => nombre aléatoire à virgule entre 0 et 1
        mots.length => taille du tableau
    */
    return mots[Math.floor(Math.random()*mots.length)]
}

let tentativeMax = 6
let tentativeActuelle = tentativeMax
let motCache = "chaise"
let lettreTrouvees = []

rafraichirMotAffiche()
rafraichirTentativeAffiche()
