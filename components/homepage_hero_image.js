let resize = () =>{
    let win_width = window.innerWidth;
    let win_height = window.innerHeight;
    console.log(win_width, win_height);
}

let win_size = () =>{
    window.addEventListener("resize", () =>{
        if(window.innerWidth==769){
            console.log("now")
            console.log(window.innerWidth)
        }
    });
}

// 768


let hero_images_t = [
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fos-2022-july-hero-mob.jpg?v=1657144325&width=900",

    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-mob_c5837a08-b788-454f-94e6-c9429deab362_900x.jpg?v=1656625184",

    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-dyson-july-2022-hero-mob_900x.jpg?v=1657144840",

    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-moroccanoil-july-hp-hero-mob-3_900x.jpg?v=1657227496",

]

let normal_images = [
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fos-2022-july-hero-des_2000x.jpg?v=1657144325",

    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_7a459285-a1a6-4c17-8383-f26887d149ba_2000x.jpg?v=1656625184",

    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-dyson-july-2022-hero-des_2000x.jpg?v=1657144840",

    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-moroccanoil-july-hp-hero-des-2_2000x.jpg?v=1657227342",
]

let hero_info = [
    `<h4>Happening Now!</h4>
    <h2>Free Overnight Shipping</h2>
    <p>
        Place your order by July 20 to get free overnight shipping with no minimum purchase!
        
    </p>
    <button>Shop Now</button>`,

    `<h4>Beauty<span style="font-weight:bold">Alfresco</span></h4>
    <h2>Hit Refresh</h2>
    <p>
        It's hot. Sp why not treat yourself to a cooling mist, a cleansing dry shampoo or another instant (or close to instant) refreshers?
        
    </p>
    <button>Shop Now</button>`,

    `<h4>dyson</h4>
    <h2>The Copper Age</h2>
    <p>
        It's here, thanks to Dyson. These new versions of the brand's innovative, in-demand hair tools come in a pretty penny color. Grab yours today!
        
    </p>
    <button>Shop Now</button>`,

    `<h4>moroccanoil</h4>
    <h2>Shine On</h2>
    <p>
        Have you tried the product that pioneered oil-infused hair care and created the worlwide buzz on argan oil? Moroccanoil Treatment Instantly fights frizz and boosts shine for silky, healthy-looking hair.
        
    </p>
    <button>Shop Now</button>`
]

export {normal_images, hero_info, hero_images_t};