// =====================
// PRODUITS
// =====================
const products = [
{id:1,name:"TikTok Pack",price:14.99,img:"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"},
{id:2,name:"Canva Pack",price:19.99,img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71"},
{id:3,name:"CapCut Pack",price:11.99,img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d"},
{id:4,name:"AI Business Kit",price:9.99,img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"},
{id:5,name:"YouTube Growth",price:12.99,img:"https://images.unsplash.com/photo-1611162618071-b39a2ec055fb"}
];

// =====================
// PANIER
// =====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
const p = products.find(x=>x.id===id);
cart.push(p);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Ajouté !");
}

function loadCart(){
let box=document.getElementById("cart");
if(!box)return;

let total=0;
box.innerHTML="";

cart.forEach((p,i)=>{
total+=p.price;

box.innerHTML+=`
<div class="card">
<h3>${p.name}</h3>
<p>${p.price}€</p>
<button class="btn" onclick="removeItem(${i})">Supprimer</button>
</div>
`;
});

box.innerHTML+=`<h2>Total: ${total.toFixed(2)}€</h2>`;
}

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}

// =====================
// SHOP LOAD
// =====================
function loadShop(){
let box=document.getElementById("shop");
if(!box)return;

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

// =====================
// LOGIN
// =====================
function login(){
let email=document.getElementById("email").value;
localStorage.setItem("user",email);
alert("Connecté !");
}

// =====================
// DASHBOARD
// =====================
function loadDashboard(){
let box=document.getElementById("dash");
let user=localStorage.getItem("user");

box.innerHTML=`
<h2>Bienvenue ${user}</h2>
<p>Produits dans panier: ${cart.length}</p>
`;
}

// =====================
// REVIEWS SYSTEM ⭐
// =====================
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function addReview(){
let name=document.getElementById("rname").value;
let text=document.getElementById("rtext").value;

reviews.push({name,text});
localStorage.setItem("reviews",JSON.stringify(reviews));
loadReviews();
}

function loadReviews(){
let box=document.getElementById("reviews");
if(!box)return;

box.innerHTML="";

reviews.forEach((r,i)=>{
box.innerHTML+=`
<div class="card">
<h3>${r.name}</h3>
<p>${r.text}</p>
<button class="btn" onclick="deleteReview(${i})">Supprimer</button>
</div>
`;
});
}

function deleteReview(i){
reviews.splice(i,1);
localStorage.setItem("reviews",JSON.stringify(reviews));
loadReviews();
}
