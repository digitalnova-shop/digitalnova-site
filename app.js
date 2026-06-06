// PANIER
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// COMPTE
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// ➜ AJOUT PANIER
function addToCart(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Ajouté au panier !");
}

// ➜ AFFICHER PANIER
function loadCart(){
let container = document.getElementById("cart");
if(!container) return;

container.innerHTML = "";

let total = 0;

cart.forEach((item, i)=>{
total += item.price;

container.innerHTML += `
<div class="card">
<p>${item.name}</p>
<p>${item.price}€</p>
<button onclick="removeItem(${i})">Supprimer</button>
</div>
`;
});

container.innerHTML += `<h3>Total: ${total}€</h3>`;
}

// ➜ SUPPRIMER ITEM
function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

// ➜ INSCRIPTION
function register(){
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;

users.push({email, pass});
localStorage.setItem("users", JSON.stringify(users));

alert("Compte créé !");
}

// ➜ LOGIN
function login(){
let email = document.getElementById("loginEmail").value;
let pass = document.getElementById("loginPass").value;

let user = users.find(u=>u.email===email && u.pass===pass);

if(user){
currentUser = user;
localStorage.setItem("currentUser", JSON.stringify(user));
alert("Connecté !");
}else{
alert("Erreur");
}
}

// ➜ CHECKOUT
function checkout(){
if(cart.length===0){
alert("Panier vide");
return;
}

alert("Paiement simulé réussi !");
cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
}
