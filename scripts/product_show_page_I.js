
let get1=JSON.parse(localStorage.getItem("product"));

// let get1=[
//     {api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651",
//     brand: "colourpop",
//     category: "lipstick",
//     created_at: "2018-07-08T21:47:49.858Z",
//     currency: "CAD",
//     description: "Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.",
//     id: 1046,
//     image_link: "https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803",
//     name: "Lippie Stix",
//     price: "5.5",
//     price_sign: "$",
//     product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/1046.json"
// }
// ];


let side_cart;
let increase;
let decrease;
let removeIt;


let cont= document.querySelector("#P_container2");

import { Pdisplay, Pdisplay2 } from "./product_show_page_E.js";


Pdisplay(get1, cont);
Pdisplay2(get1,cont);


document.getElementById("P_left").addEventListener("click", ()=>{
    
    let bag = JSON.parse(localStorage.getItem("cart")) || [];

    bag.push(get1);

    localStorage.setItem("cart", JSON.stringify(bag));
    
    document.getElementById("U-sideCart").style = "display:block;"

    if(window.innerWidth > 768){
      document.body.style = "overflow-y:hidden;"
    }
    

    side_cart();
})



side_cart = () => {
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



  // event listners -----------------------------
document.querySelector("#U-sideTop > p").addEventListener("click", () => {
    document.getElementById("U-sideCart").style = "display:none;";
    document.body.style = "overflow-y:auto;";
  });

