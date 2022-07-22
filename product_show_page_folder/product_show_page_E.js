


    let Pdisplay=(get1,cont2)=>{

        let div1=document.createElement("div");
        div1.style.width="100px";
        div1.style.height="100px";
        div1.style.border="2px solid gray";
        div1.style.marginBottom="5px"
        let img1=document.createElement("img");
        img1.src=get1[0].image_link;
        img1.style.width="100%";
        img1.style.height="100%"
        div1.append(img1);

        let div2=document.createElement("div");
        div2.style.width="100px";
        div2.style.height="100px";
        div2.style.border="2px solid gray";
        div2.style.marginBottom="5px"
        let img2=document.createElement("img");
        img2.src=get1[0].image_link;
        img2.style.width="100%";
        img2.style.height="100%"
        div2.append(img2);


        let div3=document.createElement("div");
        div3.style.width="100px";
        div3.style.height="100px";
        div3.style.border="2px solid gray";
        div3.style.marginBottom="5px"
        let img3=document.createElement("img");
        img3.src=get1[0].image_link;
        img3.style.width="100%";
        img3.style.height="100%"
        div3.append(img3);


        let div4=document.createElement("div");
        div4.style.width="100px";
        div4.style.height="100px";
        div4.style.border="2px solid gray";
        let img4=document.createElement("img");
        img4.src=get1[0].image_link;
        img4.style.width="100%";
        img4.style.height="100%"
        div4.append(img4);


        let div5=document.createElement("div");
        div5.classList.add("P_4Boxes");
        div5.append(div1, div2,div3,div4);



        let img= document.createElement("img");
            img.src=get1[0].image_link;

           let para=document.createElement("p");
           para.innerText=`>${get1[0].name}`;
           para.classList.add("P_para");

            let div=document.createElement("div");
            div.classList.add("img_div")
            div.append(img);

            let div6=document.createElement("div");
            div6.classList.add("P_div6")
            div6.append(para,div5,div)

            // let cont2= document.querySelector("#P_container");
           cont2.append(div6);
    }





    let Pdisplay2=(get1,cont)=>{

        let name1=document.createElement("p");
            name1.innerText=`${get1[0].name}`;
            name1.style.fontSize="22px";
            name1.style.color="gray";

            let new1=document.createElement("p");
            new1.innerText="NEW";
            new1.style.fontSize="14px";
            new1.style.padding="5px";


            let line4Div=document.createElement("div");
            line4Div.style.display="flex";
            

            let price=document.createElement("p");
            price.innerText=`$${get1[0].price}`;
            price.style.fontSize="18px";
            price.style.fontWeight="bold";

            let price0=document.createElement("p");
            price0.innerText=`4 interest-free payments of $${get1[0].price/4} with`;
            price0.style.fontSize="14px";

            let price1=document.createElement("p");
            price1.innerText="KIarna";
            price1.style.fontSize="18px";
            price1.style.fontWeight="bold";
            price1.style.marginLeft="4px";
            price1.style.marginRight="4px";


            let price2=document.createElement("a");
            // price2.setAttribute("a");
            price2.href="#";
            price2.innerText="Learn More";
            price2.style.color="black";
            price2.style.fontSize="14px";

            line4Div.style.boxShadow="none";
            line4Div.style.width="100%";
            line4Div.style.height="auto";
            line4Div.style.marginLeft="-20px";
            line4Div.style.marginTop="-20px";



            line4Div.append(price,price0,price1,price2);


    
            let brand1=document.createElement("p");
            brand1.innerText=`${get1[0].brand}`;
            brand1.style.color="#333333";
            brand1.style.fontWeight="400";
            brand1.style.fontSize="18px";

            let desc=document.createElement("p");
            desc.innerText=` ${get1[0].description}`;
            desc.style.width="80%";

            let FreeGiftDiv=document.createElement("div");
            FreeGiftDiv.style.width="90%";
            FreeGiftDiv.style.height="70px";
            FreeGiftDiv.style.marginLeft="-10px";
            FreeGiftDiv.style.display="flex";
            FreeGiftDiv.style.boxShadow="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;";

            let FreeGift=document.createElement("img");
            FreeGift.src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/Blonde_Toning_Spray_30ml_2400x2400_NoBKGD_128x.jpg?v=1628114597";
            FreeGift.style.width="80px";
            FreeGift.style.height="100%";

            let FreeGiftPara=document.createElement("p");
            FreeGiftPara.innerText=`Free Bb.Illuminated Blonde Tone Enhancing Leave in with any $35+ ${get1[0].brand} purchase`;
            FreeGiftPara.style.fontSize="18px";
            FreeGiftPara.style.color="gray";
            FreeGiftPara.style.marginTop="20px";


            FreeGiftDiv.append(FreeGift,FreeGiftPara);


            let count=1;
            let addToBagDiv=document.createElement("div");
            addToBagDiv.classList.add("P_bag");
            addToBagDiv.innerHTML=`
            <div id="P_box1">
            
            <div id="P_left">
                <i style="font-size: 20px; color: white
                ;" class="fa-solid fa-bag-shopping"></i> ADD TO BAG</div>

                <div id="P_price">$${get1[0].price}</div>

                <div id="P_btn">
            <button id="minus">-</button> ${count} <button onclick="counter(count)" id="plus">+</button>
        </div>
            
        </div>
        <div id="P_box2">
            <p>Shipping & Returns</p>
        </div>
            `

            addToBagDiv.style.height="80px";
            addToBagDiv.style.marginLeft="-10px";

            let div=document.createElement("div");
            div.classList.add("P_details");
            div.append(brand1, name1,new1, line4Div, desc, FreeGiftDiv,addToBagDiv);

            // let cont= document.querySelector("#P_container");
           cont.append(div);
    }


    export {Pdisplay, Pdisplay2};