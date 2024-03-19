var nom
var nombre = []

    while (true) 
        {
          nom = prompt ("Entrez votre prénom");
        if (nom =="") 
        {
            break;
         }
        nombre.push(nom);
        }
console.log (nombre)
alert ("Nombes d'essai : " + nombre)
alert ("Nombre de nom saisie : " + nombre.length)

