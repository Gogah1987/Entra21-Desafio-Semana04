var meusInteresses = [];

const buttonElement = document.querySelector("button");
const limparButtonElement = document.querySelector("#limpar");
const inputElement = document.querySelector("input");
const listaElement = document.querySelector("ul");

function adicionarInteresse() {
  const interesse = inputElement.value.trim(); 
  if (interesse) {
    meusInteresses.push(interesse);
    inputElement.value = ""; 
    inputElement.focus();
    renderizarLista();
    } else {
    alert("Por favor, insira um interesse válido.");
  }
  // Salvar os interesses no localStorage
  localStorage.setItem("meusInteresses", JSON.stringify(meusInteresses));
  console.log(meusInteresses); 
}

function renderizarLista() {
  listaElement.innerHTML = ""; 
  meusInteresses.forEach(function (interesse) {
    const liElement = document.createElement("li");
    liElement.textContent = interesse;
    liElement.classList.add("itemList");
    listaElement.appendChild(liElement);
  });
}

function carregarInteresses() {
  const interessesSalvos = localStorage.getItem("meusInteresses");
  if (interessesSalvos) {
    meusInteresses = JSON.parse(interessesSalvos);
    renderizarLista();
  }
}

function limparLista() {
  meusInteresses = []; 
  listaElement.innerHTML = ""; 
  localStorage.removeItem("meusInteresses"); 
  inputElement.focus(); 
}

buttonElement.addEventListener("click", adicionarInteresse);
limparButtonElement.addEventListener("click", limparLista);
inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    adicionarInteresse();
  }
});
carregarInteresses();