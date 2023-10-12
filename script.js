const tacheInput = document.getElementById("tacheInput");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (tacheInput.value === '') {
    alert("Tu dois ecrire une tache")
  }
  else{
    let li = document.createElement('li')
    li.innerHTML = tacheInput.value
    li.style.alignContent = "left"
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = "<button>Supprimer</button>"
    li.appendChild(span)
  }
  tacheInput.value = ""
}

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
  }
  else if (e.target.tagName === "BUTTON"){
    e.target.parentElement.parentElement.remove()
  }
}, false)



