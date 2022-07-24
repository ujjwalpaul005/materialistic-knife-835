
import header from "./header.js";
import side_cart_func from "../components/side-cart-export.js"

let side_cart;
let increase;
let decrease;
let removeIt;

document.getElementById("header").innerHTML=header();

document.getElementById("U-wish").addEventListener("click", ()=>{
    window.location.href = "/wishlist/account.html";
})

document.getElementById("U-sign").addEventListener("click", ()=>{
    window.location.href = "/Account/Login/index.html";
})

document.getElementById("U-cart").addEventListener("click", ()=>{

    if(window.innerWidth < 800){
        window.location.href = "/cart.html";
    }else{
            document.getElementById("U-sideCart").style = "display:block;"
        
            if(window.innerWidth > 768){
              document.body.style = "overflow-y:hidden;"
            }
            
        
            side_cart();
    }
    
})

document.getElementById("U-new").addEventListener("click", ()=>{
    let x = "eyeliner";
    localStorage.setItem("searchInput", JSON.stringify(x));
    window.location.href = "/allProducts/collections.html";
})

document.getElementById("P-brand").addEventListener("click", ()=>{
    window.location.href = "/materialistic-knife-835/brands.html";
})

document.getElementById("U-blue").addEventListener("click", ()=>{
    window.location.href = "/materialistic-knife-835/bluewards.html";
})

document.getElementById("U-events").addEventListener("click", ()=>{
    window.location.href = "/VIkas page done by nandlal/eventshai.html";
})

document.getElementById("U-explore").addEventListener("click", ()=>{
    window.location.href = "/Latest on project/nvadakam.html";
})

document.getElementById("U-beauty").addEventListener("click", ()=>{
    window.location.href = "/Latest on project/nope.html";
})

document.getElementById("U-index").addEventListener("click", ()=>{
    console.log("done")
    window.location.href = "/index.html";
})

document.getElementById("U-loc").addEventListener("click", ()=>{
    console.log("done")
    window.location.href = "/materialistic-knife-835/location.html";
})

function ShopPage(event){
    let divS=document.querySelector("#P-search-Div");
divS.style.display="none";

    let div=document.querySelector(".page");
    div.style.display="block";

    let div2=document.querySelector("#pageDiv");
    div2.innerHTML=`
    <div id="P-page1">
<div id="P-box1" class="P-page1Cls">
        <h2>SKIN CARE</h2>
    <ul>
        <li>MAKEUP</li>
        <li>HAIR</li>
        <li>BATH & BODY</li>
        <li>FRAGRANCE</li>
        <li>TOOLS & ACCESSORIES</li>
        <li>HOME & LIFESTYLE</li>
        <li>SUN CARE</li>
        <li>MEN</li>
        <li>GIFTS</li>
    </ul>
    
</div>
<div id="P-box2" class="P-page1Cls">
    <h2>BY CATEGORY</h2>
    <ul>
        <li>Shop All</li>
        <li>Cleansers</li>
        <li>Exfoilators & Peels</li>
        <li>Eye Care</li>
        <li>Up Care</li>
        <li>Moisturizers</li>
        <li>Sun Care</li>
        <li>Tools & Devices</li>
        <li>Treatment & Serums</li>
        <li>Vitamins & Supplements</li>
        <li>Value & Gift Sets</li>
    </ul>    
</div>
<div id="P-box3" class="P-page1Cls">
    <h2>BY BRAND</h2>
    <ul>
        <li>111Skin</li>
        <li>Augustinus Bader</li>
        <li>Dr. Barbara Sturm</li>
        <li>EltaMD</li>
        <li>IS Clinical</li>
        <li>Kiehl's</li>
        <li>La Mer</li>
        <li>M-61</li>
        <li>OSEA</li>
        <li>Revive</li>
        <li>SkinCeuticals</li>
        <li>Tata Harper</li>
    </ul>
</div>
<div id="P-box4" class="P-page1Cls">
    <ul>
        <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596" alt=""> </li>
        <li><h2 style="font-size: 13px;">Best Seller: M-61 PowerGlow® Peel</h2></li>
        <li><p>The 1-step exfoliating glow peel that resurfaces, clarifies and firms</p></li>
    </ul>
</div>
</div>
    `

    // document.querySelector("#shop").style.border="2px solid gray";
}
function ShopPage2(){
    let div=document.querySelector(".page");
    div.style.display="none";
    let div2=document.querySelector("#pageDiv");
    div2.style.display="none";
  
}

function NewPage(){
let divS=document.querySelector("#P-search-Div");
divS.style.display="none";

let div= document.querySelector(".page2");
div.style.display="block";
div.innerHTML=`
<div id="P-page2">
        <div id="P-boxNew1">
            <ul>
                <li><h2>BY CATEGORY</h2></li>
                <li>Shop All</li>
                <li>Skincare</li>
                <li>Makeup</li>
                <li>Hair</li>
                <li>Bath & Body</li>
                <li>Fragrance</li>
                <li>Tools & Accessories</li>
                <li>Wellness</li>
                <li>Gifts</li>
                <li>Wedding Essentials</li>
            </ul>
        </div>
        <div id="P-boxNew2">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_303x303.jpg?v=1657286475" alt=""></li>
                <li><h2>New Brand Alert!</h2></li>
                <li>EltaMD UV Sheer Broad-Spectrum SPF 50+</li>
            </ul>
        </div>
        <div id="P-boxNew3">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/vaction_edit_303x303.jpg?v=1655303891" alt=""></li>
                <li><h2>The Vaccation Edit</h2></li>
                <li>$350+ worth of summer essentials for $99!</li>
            </ul>
        </div>
    </div>
`;

}
function NewPage2(){
let div= document.querySelector(".page2");
div.style.display="none";
}

function BrandPage(){
let divS=document.querySelector("#P-search-Div");
divS.style.display="none";

let div= document.querySelector(".page3");
div.style.display="block";

div.innerHTML=`
<div id="P-page3">
        <div id="P-boxBrand1">
            <h2>SHOP ALL BRANDS</h2>
        </div>
        <div id="P-boxBrand2">
            <ul>
                <li><h2>BEST SELLERS</h2></li>
                <li>Augustinus Bader</li>
                <li>Chantecaille</li>
                <li>diptyque</li>
                <li>Dr. Barbara Sturm</li>
                <li>Dyson</li>
                <li>La Mer</li>
                <li>Lune + Aster</li>
                <li>M-61</li>
                <li>NARS</li>
                <li>Olaplex</li>
                <li>Oribe</li>
                <li>SkinCeuticals</li>
                <li>TOM FORD</li>
                <li>Trish McEvoy</li>
                <li>Trish McEvoy</li>
                <li>VIRTUE</li>
            </ul>
        </div>
        <div id="P-boxBrand3">
            <ul>
                <li><h2>#NEWATBLUE</h2></li>
                <li>Act + Acre</li>
                <li>Boucleme</li>
                <li>EltaMD</li>
                <li>Esker</li>
                <li>Holy Curls</li>
                <li>PCA Skin</li>
                <li>R+Co BLEU</li>
                <li>Sisley-Paris</li>
                <li>Solawave</li>
                <li>Sunday II Sunday</li>
                <li>Vella</li>
                <li>vVARDIS</li>
            </ul>
        </div>
        <div id="P-boxBrand4">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_md_nav_303x303.jpg?v=1656446190" alt=""></li>
                <li><h2> New to Bluemercury: EltaMD </h2></li>
                <li>Shop the cult-favorite sunscreen brand!</li>
            </ul>
        </div>
    </div>
</div>
`
}
function BrandPage2(){
let div= document.querySelector(".page3");
div.style.display="none";
}

function ExplorePage(){
let divS=document.querySelector("#P-search-Div");
divS.style.display="none";

let div= document.querySelector(".page4");
div.style.display="block";

div.innerHTML=`
<div id="P-page4">
        <div id="P-boxExplore1">
            <ul>
                <li><h2>FEATURED</h2></li>
                <li>Wedding Essentials</li>
                <li>#ShowUsYourBag</li>
                <li>The Founders Series</li>
                <li>Blue Notes</li>
                <li>Buying Guides</li>
                <li>Conscious Beauty</li>
                <li>MORE</li>
            </ul>
        </div>
        <div id="P-boxExplore2">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/wedding_gifts_303x303.jpg?v=1655846348" alt=""></li>
                <li><h2> Wedding Season Essentials </h2></li>
                <li> Must-have products for the bridal party and guests!</li>
            </ul>
        </div>
        <div id="P-boxExplore3">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/esker_navigation_303x303.jpg?v=1655305025" alt=""></li>
                <li><h2> The Founders Series </h2></li>
                <li> Learn more about Esker founder Shannon Davenport</li>
            </ul>
        </div>
    </div>
`
}
function ExplorePage2(){
let div= document.querySelector(".page4");
div.style.display="none";
}

function EventsPage(){
let divS=document.querySelector("#P-search-Div");
divS.style.display="none";

let div= document.querySelector(".page5");
div.style.display="block";

div.innerHTML=`
<div id="P-page5">
        <div id="P-boxExplore1">
            <ul>
                <li><img style="margin-top: -20px;" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury-navigation-feature_47f58b5b-2c3b-4a9b-8f47-d4105a65cfc9_303x303.jpg?v=1654606349" alt=""></li>
                <li><h2 style="margin-top: -6px;">Bluemercury #Masterclass</h2></li>
                <li style="margin-top: -22px;"> Join us for live virtual shopping events!</li>
            </ul>
        </div>
        <div id="P-boxExplore2">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_303x303.jpg?v=1657733426" alt=""></li>
                <li><h2>$20 off $100 with an In-Store Consultation! </h2></li>
                <li style="margin-top: 0px;"> Book your one-on-one appointment at your local store</li>
            </ul>
        </div>
    </div>
`
}
function EventsPage2(){
let div= document.querySelector(".page5");
div.style.display="none";
}

function BluePage(){
let divS=document.querySelector("#P-search-Div");
divS.style.display="none";

let div= document.querySelector(".page6");
div.style.display="block";

div.innerHTML=`
<div id="P-page6">
    <div id="P-boxBlue1">
        <ul>
            <li><h2>MY ACCOUNT</h2></li>
            <li> Account Overview</li>
            <li>My Purchases</li>
            <li>My BlueRewards</li>
            <li>My Wishlist</li>
            <li> Details + Preferences</li>
        </ul>
    </div>
    <div id="P-boxBlue2">
        <ul>
            <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372" alt=""></li>
            <li><h2> Earn $10 for every $250 </h2></li>
            <li> Free to Join! Learn More ></li>
        </ul>
    </div>
</div>
`
}
function BluePage2(){
let div= document.querySelector(".page6");
div.style.display="none";
}

function BeautyPage(){
let divS=document.querySelector("#P-search-Div");
divS.style.display="none";

let div= document.querySelector(".page7");
div.style.display="block";

div.innerHTML= `
<div id="P-page7">
        <div id="P-boxBeauty1">
            <ul>
                <li><h2>BY CATEGORY</h2></li>
                <li>Body</li>
                <li>Candles</li>
                <li>Hair</li>
                <li>Makeup</li>
                <li>Perfumes</li>
                <li>Skin Care</li>
                <li>Sun Care</li>
                <li>Tools</li>
                <li>Wellness</li>
            </ul>
        </div>
        <div id="P-boxBeauty2">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/BAL_NAV_FINAL_303x303.jpg?v=1652904364" alt=""></li>
                <li><h2> Beauty Alfresco</h2></li>
                <li> Our curated collection of seasonal essentials</li>
            </ul>
        </div>
        <div id="P-boxBeauty3">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty_alfresco_nav_303x303.jpg?v=1651859182" alt=""></li>
                <li><h2>Dewy, Glowy Skin</h2></li>
                <li>Shop these hydrating, brightening products!</li>
            </ul>
        </div>
    </div>
`
}
function BeautyPage2(){
let div= document.querySelector(".page7");
div.style.display="none";
}

// -----------------------------foooter-------------------------------------//

import footer from "./footer.js";

document.getElementById("P-container").innerHTML=footer();

// document.getElementById("btn1_P").addEventListener("click", Accept_Decline);

// function Accept_Decline(){
//     let div=document.getElementById("P-footer2Box1");
//     div.style.display="none";
// }





// side cart function ----------------------------

// main function --------------------------
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