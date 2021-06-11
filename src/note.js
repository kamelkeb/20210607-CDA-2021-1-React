
/**
 * Prémisses conceptuels à la notion de reducer
 */

// valeur initial de l'accumulateur
const initialValue = 1
const t = [1, 4, 5, 9, 0]

t.map(e => e * 3);


t.reduce(  (acc, e1) => acc * e1 , initialValue )


// Sous le capot de reduce:
const fonctionDeRéduction = (e1, e2) => e1 * e2;
let acc = 1;
const t = [1, 4, 5, 9, 1]; // ce qui lui reste à traiter

//Une étape consiste à faire ce calcul:
acc = fonction(acc, t[0])
t.shift()// enlever le prmier élément du tableau

// après cette étape
console.log(acc) // -> 1
console.log(t)  // -> [4, 5, 9, 1]

// après une deuxième étape
console.log(acc) // -> 4
console.log(t)  // -> [ 5, 9, 1]


          fonctionDeReduction / montantDeTransformation
1                  ->      1       ->      4     ->      20     ->      180 .................
[1, 4, 5, 9, 1..    ->[4, 5, 9, 1..  ->[5, 9, 1..   ->[9, 1..       ->[1..


    // Si j'ai une fonction 
    const reducer = (étatAvant, infoSurLeTypeDeChangementEtValeurDuDelta) => {
       
        // créer et calculer la prochaine valeur de l'état
        // en fonction du type de l'action voulue et de son montant

        //retourne soit le nouvel état calculé, soit l'ancien état
    }// Le but de cette fonction est d'exécuter une seule étape de réducition

    /**
     * Un reducer est une fonction pure qui prendra deux arguments: l'état à l'étape 'n', 
     * et une information sur le type d'action à effectuer
     * et son montant (infos nécessaires pour spécifier le changement de state 
     * voulu), et qui retourne soit l'ancien état sans y avoir touché (pas une copie),
     * soit un tout nouvel état (après l'avoir créé et calculé)
     */