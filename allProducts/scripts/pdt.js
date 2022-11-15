let pluses = document.querySelectorAll(".U-underline > p");
let dropdown;
let showIt;
let random_num;
let sortIt;
let pdt_data;
let wishlist;
let saveIt;

// let x = "lipstick";

// localStorage.setItem("searchInput", JSON.stringify(x));

let stored = JSON.parse(localStorage.getItem("searchInput"));

pluses.forEach((el)=>{
    el.addEventListener("click", ()=>{
        dropdown(el.parentNode)
    })
})

dropdown = (el) =>{
    // console.log(el.children[0].children[0].innerText);

    let node = "U-"
    node = node + el.children[0].children[0].innerText;

    if(el.children[1].innerText == "+"){
        el.children[1].innerText = "-";
        document.getElementById(node).style = "display:block";
    }else if(el.children[1].innerText == "-"){
        el.children[1].innerText = "+";
        document.getElementById(node).style = "display:none";
    }

    
}
// Only for live server not for netlify link
 let url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${stored}`;


// ------------------THis link is for Netlify link ---------------
// let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${stored}`;

let producting = (url) =>{

    document.getElementById("U-pdtArea").innerHTML = `
            <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340">
        `
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log(data);
        pdt_data = data;
        showIt(pdt_data);
    }).catch((err)=>{
        console.log(err);
    })
}

producting(url);

showIt = (data) =>{
    let area = document.getElementById("U-pdtArea");
    area.innerHTML = null;
    if(data.length <  1){
        document.getElementById("U-pdtArea").innerHTML = `
            <img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif">
        `

    }
    data.forEach((el)=>{
        // console.log(el);
        let card = document.createElement("div");
        card.setAttribute("class", "U-pdtCard");

        let image_card = document.createElement("div");
        image_card.setAttribute("class", "U-image");

        let x = document.createElement("div");
        x.setAttribute("class", "U-new")
        let n = document.createElement("p");
        n.innerText = `NEW`;

        let icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-heart-circle-plus fa-2xl");
        icon.addEventListener("click", ()=>{
            wishlist(el);
        })

        x.append(n, icon);

        let image = document.createElement("img");
        image.src = el.api_featured_image;

        image_card.append(x, image);

        let pdt = document.createElement("div");
        pdt.setAttribute("class", "U-pdtN");
        pdt.innerHTML = `
        <p>${el.name}</p>
        <p>Brand: ${el.brand}</p>
        <p>$ ${el.price}</p>

        <div class="U-rates">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>

        <p>(${random_num()})</p>
        </div>
        `

        card.append(image_card, pdt);

        image.addEventListener("click", ()=>{
            saveIt(el);
        })
        pdt.addEventListener("click", ()=>{
            saveIt(el);
        })
        
        area.append(card);

    })
}

random_num = () =>{
    min = Math.ceil(10);
    max = Math.floor(200);
    return Math.floor(Math.random() * (max - min) + min);
}



// sorting----------
let sorting = document.getElementById("sorting");
sorting.addEventListener("change", ()=>{
    sortIt(sorting.value);
})

sortIt = (value) =>{
    // console.log(value);
    if(value == "lth"){
        pdt_data.sort((x,y) =>{
            return x.price - y.price;
        })
    }else if(value == "htl"){
        pdt_data.sort((x,y) =>{
            return y.price - x.price;
        })
    }

    console.log(pdt_data);
    showIt(pdt_data);
}




// filtering---------
let types = document.querySelectorAll("#U-types > p");



types.forEach((el)=>{
    el.addEventListener("click", ()=>{
        // console.log(el.innerText);
        document.getElementById("U-name").innerText = el.innerText;
        return category(el.innerText);
    })
})

function category(type){
   // Only for live server not for netlify link
  url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`;

    
//     For netlify link 
//     url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`;

    producting(url);
    return url;
}

let tags = document.querySelectorAll("#U-Tags > p");
tags.forEach((el)=>{
    el.addEventListener("click", ()=>{
        
        let new_url = url;
        new_url = new_url + `&product_tags=` + el.innerText;
        producting(new_url);
    })
})


let brands = document.querySelectorAll("#U-Brand > p");
brands.forEach((el)=>{
    el.addEventListener("click", ()=>{
        
        let new_url = url;
        new_url = new_url + `&brand=` + el.innerText;
        producting(new_url);
    })
})

let prices = document.querySelectorAll("#U-Price > p");
prices.forEach((el)=>{
    el.addEventListener("click", ()=>{

        let new_url = url;
        let price = el.children[0].innerText;
        // console.log(el.innerText)
        if(price == 4){
            new_url = new_url + `&price_less_than=` + price;
        }else{
            new_url = new_url + `&price_greater_than=` + price;
        }
        // console.log(new_url);
        producting(new_url);
    })
})





// wishlisting--------
wishlist = (el) =>{
    let wish_pdts = JSON.parse(localStorage.getItem("wish")) || [];

    wish_pdts.push(el);

    localStorage.setItem("wish", JSON.stringify(wish_pdts));

}

saveIt = (el) =>{
    let pdt = {
        name : el.name,
        brand : el.brand,
        price : el.price,
        quantity : 1,
        image : el.api_featured_image,
    }

    localStorage.setItem("product", JSON.stringify(pdt));

    window.location.href = "../product_show_page_folder/product_show_page.html"
}



/* 
<div class="U-pdtCard">
    <div class="U-image">
        <div class="U-new">
        <p>NEW</p>
        <i class="fa-solid fa-heart-circle-plus fa-2xl"></i>
        </div>
        <img
        src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580108-1_470x.jpg?v=1657786475"
        />
    </div>
    <div class="U-pdtN">
        <p>Lipstick</p>
        <p>The Light Cream</p>
        <p>$ 175</p>

        <div class="U-rates">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>

        <p>(5)</p>
        </div>
    </div>
</div>
*/
