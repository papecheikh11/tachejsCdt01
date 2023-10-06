let tache = document.getElementById("tache");
let btnAjout = document.getElementById("button-ajouter");
let btnModifier = document.getElementById("button-modifier");

let listeTache = document.getElementById("liste_taches");

btnAjout.addEventListener("click", function () {
  let ligne = listeTache.insertRow(-1);
  let tacheAjoute = ligne.insertCell(0);
  let action = ligne.insertCell(1);

  tacheAjoute.textContent = tache.value;
  let edit = document.createElement("button");
  action.append(edit);
  edit.innerText = "Modifier";
  edit.style.backgroundColor = "green";
  edit.style.color = "white";

  let supp = document.createElement("button");
  action.append(supp);
  supp.innerText = "Supprimer";
  supp.style.backgroundColor = "red";
  supp.style.color = "white";
  tache.value = "";

  supp.addEventListener("click", function () {
    listeTache.removeChild(ligne);
  });

  edit.addEventListener("click", function () {
    tache.value = tacheAjoute.textContent;
    btnModifier.style.display = "block";
    btnAjout.style.display = "none";
  });


  btnModifier.addEventListener("click", function () {

    tacheAjoute.textContent = tache.value
    btnModifier.style.display = "none";
    btnAjout.style.display = "block";
  });
  
});

