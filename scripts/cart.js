// let pdt = [
//   {
//     name: "CoverGirl Outlast Longwear Lipstick",
//     price: 10.99,
//     quantity: 2,
//     image:
//       "https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png",
//   },

//   {
//     name: "CoverGirl Colorlicious Lipstick",
//     price: 10.49,
//     quantity: 1,
//     image:
//       "https://d3t32hsnjxo7q6.cloudfront.net/i/c88809fbffe05fb9594103e635387152_ra,w158,h184_pa,w158,h184.jpg",
//   },
// ];

// localStorage.setItem("cart", JSON.stringify(pdt));

let removeIt;
let increase;
let decrease;
let sliding;
let showSlider;
let saveIt;

let cart_func = () => {
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

  let sum = 0;

  for (let i = 0; i < cart_items.length; i++) {
    let temp = cart_items[i].price * cart_items[i].quantity;
    sum = sum + temp;
  }

  document.getElementById("total").innerText = "$ " + sum;
  document.getElementById("cart_quant").innerText = cart_items.length;

  let cart = document.getElementById("U-items");
  cart.innerHTML = `
    <div class="U-flex">
    <h3>Ready to Ship</h3>
      <div class="U-hide">
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
    </div>
  `;

  cart_items.forEach((el, index) => {
    let card = document.createElement("div");
    card.setAttribute("class", "U-cart");

    let cart2 = document.createElement("div");
    cart2.setAttribute("class", "U-cart2");

    let cart2_1 = document.createElement("div");
    cart2_1.setAttribute("class", "U-cart2_1");

    let image = document.createElement("img");
    image.src = el.image;

    let cart2_1_1 = document.createElement("div");
    cart2_1_1.setAttribute("class", "U-cart2_1_1");

    let cartN = document.createElement("div");
    cartN.setAttribute("class", "U-cartN");

    let name = document.createElement("p");
    name.innerText = el.name;

    let des = document.createElement("p");
    des.innerText = `UV Daily Broad-Spectrum SPF 40`;

    cartN.append(name, des);

    let price = document.createElement("p");
    price = el.price;

    cart2_1_1.append(cartN, price);
    cart2_1.append(image, cart2_1_1);

    let cart2_2 = document.createElement("div");
    cart2_2.setAttribute("class", "U-cart2_2");

    let uq = document.createElement("div");
    uq.setAttribute("class", "U-q");

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

    uq.append(minus, quant, plus);

    let rm1 = document.createElement("button");
    rm1.setAttribute("id", "U-rm1");
    rm1.setAttribute("class", "U-hide");
    rm1.innerText = `Remove`;
    rm1.addEventListener("click", () => {
      removeIt(index);
    });

    cart2_2.append(uq, rm1);
    cart2.append(cart2_1, cart2_2);

    let cartT = document.createElement("div");
    cartT.setAttribute("class", "U-cartT");

    let rm2 = document.createElement("button");
    rm2.setAttribute("id", "U-rm2");
    rm2.setAttribute("class", "U-hideL");
    rm2.innerText = `Remove`;
    rm2.addEventListener("click", () => {
      removeIt(index);
    });

    let elT = document.createElement("p");
    elT.innerText = "$ " + el.price * el.quantity;

    cartT.append(rm2, elT);

    card.append(cart2, cartT);

    cart.append(card);
  });
};

cart_func();

increase = (i) => {
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

  cart_items[i].quantity++;

  localStorage.setItem("cart", JSON.stringify(cart_items));

  cart_func();
};

decrease = (i) => {
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

  cart_items[i].quantity--;

  if (cart_items[i].quantity < 1) {
    cart_items.splice(i, 1);

    localStorage.setItem("cart", JSON.stringify(cart_items));

    cart_func();
  }

  localStorage.setItem("cart", JSON.stringify(cart_items));

  cart_func();
};

removeIt = (i) => {
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

  cart_items.splice(i, 1);

  localStorage.setItem("cart", JSON.stringify(cart_items));

  cart_func();
};




// sliders -------------
const url = `https://makeup-api.herokuapp.com/api/v1/products.json?`;

let eye_liner_url = url + `product_type=eyeliner&brand=maybelline`
let nail_polish_url = url + `product_type=nail_polish&brand=dior`
 

sliding = (url, id) =>{
  fetch(url).then((res)=>{
    console.log("res", res);
    return res.json();
  }).then((data)=>{
    console.log(data)
    showSlider(data, id);
  }).catch((err)=>{
    console.log(err);
  })
}

showSlider = (data, id) =>{
  let area = document.getElementById(id);

  data.forEach((el)=>{
    let card = document.createElement("div");
    card.setAttribute("class", "U-card");

    let image = document.createElement("img");
    image.src = el.api_featured_image;

    let h4 = document.createElement("h4");
    h4.innerText = el.name;
    // h4.style = "width: 100px; text-overflow:eclipse;"

    let p = document.createElement("p");
    p.innerText = `$ ${el.price}`;

    card.addEventListener("click", ()=>{
      saveIt(el);
    })
    card.append(image, h4, p);

    area.append(card);
  })
}


sliding(eye_liner_url, "eye_liner")

sliding(nail_polish_url, "nail_polish")





saveIt = (el) =>{
  let pdt = {
    name : el.name,
    image : el.api_featured_image,
    brand : el.brand,
    price : el.price,
    quantity : 1,
  }

  localStorage.setItem("product", JSON.stringify(pdt));
}
