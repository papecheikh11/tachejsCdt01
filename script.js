let tache = document.getElementById("tache");
let btnAjout = document.getElementById("button-ajouter");
let btnModifier = document.getElementById("button-modifier");

let listeTache = document.getElementById("liste_taches");

btnAjout.addEventListener("click", function () {
  let ligne = listeTache.insertRow(-1);
  let tacheAjoute = ligne.insertCell(0)
  let action = ligne.insertCell(1)
    let supprimer = document.getElementById('supp')

  tacheAjoute.innerHTML = `<tr><td>${tache.value} </td></tr>`
  action.innerHTML = `<button id='edit' onclick = 'modifier()'>Modifier</button><button id='supp'>Supprimer</button>`
  tache.value=''

  supprimer.addEventListener('click', function(){
        // tacheAjoute.innerHTML = '' 
        action.innerHTML = ''  
  })
});

function modifier() {
    btnModifier.style.display = "block"
    btnAjout.style.display = "none"
}

