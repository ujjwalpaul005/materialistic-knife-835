import side_cart_func from "../components/side-cart-export.js";

document.getElementById("U-sideCart").innerHTML = side_cart_func();

let increase;
let decrease;
let removeIt;

// main function --------------------------
let side_cart = () => {
  let bag = JSON.parse(localStorage.getItem("cart")) || [];

  if (bag.length < 1) {
    document.getElementById("U-sideArea").innerHTML = `
    <p id="cart-empty">Your cart is empty</p>`;
  }

  let area = document.querySelector(".U-cardArea");
  area.innerHTML = null;
  let sum = 0;

  bag.forEach((el, index) => {
    let card = document.createElement("div");
    card.setAttribute("class", "U-sideCard");

    let image = document.createElement("img");
    image.src = el.image;

    let sideN = document.createElement("div");
    sideN.setAttribute("class", "U-sideN");

    let name = document.createElement("p");
    name.innerText = el.name;

    let des = document.createElement("p");
    des.innerText = `Supersonic™ Hair Dryer - Copper`;

    let price = document.createElement("p");
    price.innerText = el.price;

    sideN.append(name, des, price);

    let btns = document.createElement("div");
    btns.setAttribute("class", "U-sidebtns");

    let x = document.createElement("div");

    let minus = document.createElement("p");
    minus.innerText = `-`;
    minus.addEventListener("click", () => {
      decrease(index);
    });

    let quant = document.createElement("p");
    quant.innerText = el.quantity;

    let plus = document.createElement("p");
    plus.innerText = `+`;
    plus.addEventListener("click", () => {
      increase(index);
    });

    x.append(minus, quant, plus);

    let rmv = document.createElement("button");
    rmv.innerText = `Remove`;
    rmv.addEventListener("click", () => {
      removeIt(index);
    });

    btns.append(x, rmv);

    card.append(image, sideN, btns);

    area.append(card);

    sum = sum + el.price * el.quantity;
  });

  document.getElementById("open-bag").innerText = `VIEW BAG | $ ${sum}`;
};


// calling the main function ---------------------
side_cart();

// event listners -----------------------------
document.querySelector("#U-sideTop > p").addEventListener("click", () => {
  document.getElementById("U-sideCart").style = "display:none;";
  document.body.style = "overflow-y:auto;";
});


// location to be changed while merging------------------

document.getElementById("open-bag").addEventListener("click", ()=>{
    window.location.href = "./cart.html";
})

// ------------------------------------

document.querySelector("#U-top > h2").addEventListener("click", ()=>{

    document.getElementById("U-sideCart").style = "display:block;"

    if(window.innerWidth > 768){
      document.body.style = "overflow-y:hidden;"
    }
    

    side_cart();
  })



//   functions --------------------------

increase = (i) => {
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

  cart_items[i].quantity++;

  localStorage.setItem("cart", JSON.stringify(cart_items));

  side_cart();
};

decrease = (i) => {
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

  cart_items[i].quantity--;

  if (cart_items[i].quantity < 1) {
    cart_items.splice(i, 1);

    localStorage.setItem("cart", JSON.stringify(cart_items));

    side_cart();
  }

  localStorage.setItem("cart", JSON.stringify(cart_items));

  side_cart();
};

removeIt = (i) => {
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

  cart_items.splice(i, 1);

  localStorage.setItem("cart", JSON.stringify(cart_items));

  side_cart();
};
