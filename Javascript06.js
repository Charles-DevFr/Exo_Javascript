//Exercice 1

<<<<<<< HEAD
var taille = parseInt(prompt("Entrez la taille de votre tableau"));

    if (isNaN(taille) || taille <= 0) 
    {
        alert ("Entrez un nombre pour la taille du tableau. ");
    }
    else
    {
        var tableau = [];
            
            for (var i = 0; i < taille; i++)
            {
                var valeur = parseInt(prompt("Entrez une valeur " + (i + 1) + " : "));
                    if (isNaN(valeur))
                    {
                        alert("Entrez un nombre valide. ");
                        i--;
                    }
                    else {
                        tableau.push(valeur);
                    }
            }
            console.log ("Le tableau créé est :" , tableau);
    }
=======
>>>>>>> a2290c0690960edf90f403ec06f32698964b6aba
