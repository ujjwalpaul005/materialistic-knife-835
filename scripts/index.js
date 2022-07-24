import { normal_images, hero_info, hero_images_t} from "../components/homepage_hero_image.js";

let sliding;
let showSlider;
let saveIt;

let hero_btns = document.querySelectorAll("#U-heroButtons > button");
let hero_btns_t = document.querySelectorAll("#U-heroButtons-t > button");

let colorIt = (x) => {
  hero_btns.forEach((el) => {
    el.style = "background-color: white";
  });

  hero_btns_t.forEach((el) => {
    el.style = "background-color: white";
  });

  let info = document.getElementById("U-heroInfo");
  let info_t = document.getElementById("U-heroInfo-t");
  
  if(x == 0){
    info.style = "color:white";
    info.innerHTML = hero_info[0];

    info_t.style = "color:white";
    info_t.innerHTML = hero_info[0];
  }
  else if(x == 1){
    info.style = "left: auto; right: 4%; width: 40%;";
    info.innerHTML = hero_info[1];

    info_t.style = "top:10%;";
    info_t.innerHTML = hero_info[1];
  }
  else if(x == 2){
    info.style = "color:#293c5d; text-align: center;";
    info.innerHTML = hero_info[2];

    info_t.style = "color:#293c5d;";
    info_t.innerHTML = hero_info[2];
  }
  else if(x == 3){
    info.style = "color:#293c5d; width: 40%";
    info.innerHTML = hero_info[3];

    info_t.style = "color:#293c5d;";
    info_t.innerHTML = hero_info[3];
  }
};

let changeIt = (el) => {
  if (el.id == "U-one" || el.id == "U-one-t") {
    document.getElementById("U-heroImg").src = normal_images[0];
    document.getElementById("U-heroImg-t").src = hero_images_t[0];
    colorIt(0);
    el.style = "background-color: #293c5d;";

  } else if (el.id == "U-two" || el.id == "U-two-t") {
    document.getElementById("U-heroImg").src = normal_images[1];
    document.getElementById("U-heroImg-t").src = hero_images_t[1];
    colorIt(1);
    el.style = "background-color: #293c5d;";

  } else if (el.id == "U-three" || el.id == "U-three-t") {
    document.getElementById("U-heroImg").src = normal_images[2];
    document.getElementById("U-heroImg-t").src = hero_images_t[2];    
    colorIt(2);
    el.style = "background-color: #293c5d;";

  } else if (el.id == "U-four" || el.id == "U-four-t") {
    document.getElementById("U-heroImg").src = normal_images[3];
    document.getElementById("U-heroImg-t").src = hero_images_t[3];
    colorIt(3);
    el.style = "background-color: #293c5d;";

  }
};

hero_btns.forEach((el) => {
  document.getElementById(el.id).addEventListener("click", () => {
    changeIt(el);
  });
});

hero_btns_t.forEach((el) => {
    document.getElementById(el.id).addEventListener("click", () => {
      changeIt(el);
    });
  });

let i = 0;

setInterval(()=>{
  if(i>3){
    i = 0;
  }

  if(window.innerWidth > 768){
    changeIt(hero_btns[i]);
  }else{
    changeIt(hero_btns_t[i]);
  }

  // console.log(i);
  i++;
}, 3000)




// sliders --------
const url = `https://makeup-api.herokuapp.com/api/v1/products.json?`;

let lipstick_url = url + `brand=maybelline&product_type=lipstick`
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


sliding(lipstick_url, "lipstick")

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
/*
<div class="U-card">
    <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060725473294-1_470x.jpg?v=1657168470">

    <h4>RODIAL</h4>
    <p>$61</p>
</div>
*/