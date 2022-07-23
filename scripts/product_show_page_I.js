
// let get1=JSON.parse(localStorage.getItem("set1"));

let get1=[
    {api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651",
    brand: "colourpop",
    category: "lipstick",
    created_at: "2018-07-08T21:47:49.858Z",
    currency: "CAD",
    description: "Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.",
    id: 1046,
    image_link: "https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803",
    name: "Lippie Stix",
    price: "5.5",
    price_sign: "$",
    product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/1046.json"
}
];

let cont= document.querySelector("#P_container2");

import { Pdisplay, Pdisplay2 } from "./product_show_page_E.js";


Pdisplay(get1, cont);
Pdisplay2(get1,cont);



