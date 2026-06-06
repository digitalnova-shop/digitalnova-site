
// =========================
// PRODUITS BUSINESS
// =========================
const products = [
{id:1,name:"TikTok Viral Pack",price:14.99,img:"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"},
{id:2,name:"Canva Pro Bundle",price:19.99,img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71"},
{id:3,name:"CapCut Effects Pro",price:11.99,img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d"},
{id:4,name:"ChatGPT Business Kit",price:9.99,img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"},
{id:5,name:"YouTube Growth Pack",price:12.99,img:"https://images.unsplash.com/photo-1611162618071-b39a2ec055fb"},
{id:6,name:"Notion Productivity System",price:18.99,img:"https://images.unsplash.com/photo-1553877522-43269d4ea984"},
{id:7,name:"AI Marketing Mastery",price:22.99,img:"https://images.unsplash.com/photo-1556761175-b413da4baf72"},
{id:8,name:"Freelance Starter Kit",price:16.99,img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d"},
{id:9,name:"Instagram Growth System",price:14.49,img:"https://images.unsplash.com/photo-1611162616475-46b635cb6868"},
{id:10,name:"Ultimate Creator Bundle",price:29.99,img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d"}
];

// =========================
// PANIER
// =========================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =========================
// USER SYSTEM
// =========================
let user = JSON.parse(localStorage.getItem("user")) || null;

// =========================
// ADD TO CART
// =========================
function addToCart(id){
const p = products.find(x=>x.id===id);
cart.push(p);
localStorage.setItem("cart",JSON.stringify(cart));

// animation simple
alert("🔥 Ajouté au panier !");
}

// =========================
// LOAD SHOP
// =========================
function loadShop(){
const box=document.getElementById("shop");
if(!box) return;

box.innerHTML="";

products.forEach(p=>{
box.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p class="price">${p.price}€</p>
<button class="btn" onclick="addToCart(${p.id})">Ajouter</button>
</div>
`;
});
}

// =========================
// CART
// =========================
function loadCart(){
const box=document.getElementById("cart");
if(!box) return;

let total=0;
box.innerHTML="";

cart.forEach((p,i)=>{
total+=p.price;

box.innerHTML+=`
<div class="card">
<h3>${p.name}</h3>
<p>${p.price}€</p>
<button onclick="removeItem(${i})">Supprimer</button>
</div>
`;
});

box.innerHTML+=`
<h2>Total: ${total.toFixed(2)}€</h2>
<button class="btn" onclick="goCheckout()">Checkout Stripe</button>
`;
}

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}

// =========================
// AUTH SYSTEM
// =========================
function register(){
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

user={email,pass};
localStorage.setItem("user",JSON.stringify(user));

alert("Compte créé !");
}

function login(){
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

let u = JSON.parse(localStorage.getItem("user"));

if(u && u.email===email && u.pass===pass){
localStorage.setItem("user",JSON.stringify(u));
alert("Connecté !");
window.location.href="dashboard.html";
}else{
alert("Erreur login");
}
}

// =========================
// DASHBOARD
// =========================
function loadDashboard(){
const box=document.getElementById("dash");
if(!box) return;

if(!user){
box.innerHTML="Non connecté";
return;
}

box.innerHTML=`
<h2>Bienvenue ${user.email}</h2>
<p>Produits dans panier: ${cart.length}</p>
<p>Statut: PREMIUM USER 🔥</p>
`;
}

// =========================
// STRIPE CHECKOUT (READY)
// =========================
function goCheckout(){
window.location.href="checkout.html";
}
