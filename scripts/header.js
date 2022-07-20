// -----------------------------html------------------------------------
let header=()=>{
    return `
    <div id="sidebar">
            <div class="cross" onclick="P_sidebarCross()"><i class="fa-solid fa-xmark"></i></div>
            <ul>
                <li>SHOP <p>+</p></li>
                <li>NEW! <p>+</p></li>
                <li>BRANDS <p>+</p></li>
                <li>EXPLORE <p>+</p></li>
                <li>EVENTS <p>+</p></li>
                <li>BLUE REWARDS <p>+</p></li>
                <li>BEAUTY ALFRESCO <p>+</p></li>
            </ul>
        </div>
    <div id="navbar1">
            <div id="left">
            <ul>
            <li id="P-ham" onclick="P_sidebarHam()"> <i class="fa-solid fa-bars"></i></li>
            <li id="left1"> <i class="fa-solid fa-location-dot"></i> STORE & SPA LOCATOR</li>
            <li id="left2"><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x@2x.png?v=1648743182" alt="Logo"></li>
        </ul>
        </div>
        <div id="right">
            <ul>
            <li><i class="fa-regular fa-heart"></i>WISHLIST</li>
            <li onclick="P_SearchFun()"><i class="fa-solid fa-magnifying-glass"></i>SEARCH</li>
            <li><i class="fa-regular fa-circle-user"></i>SIGN IN/UP</li>
            <li><i class="fa-solid fa-bag-shopping"></i>BAG</li>
        </ul>
    </div>
</div>
   
    </div>
    <div id="navbar2">
        <ul>
            <li id="shop" onmouseover="ShopPage(event)" onmouseout="ShopPage2()">SHOP</li>
            <li onmouseover="NewPage()" onmouseout="NewPage2()">NEW!</li>
            <li onmouseover="BrandPage()" onmouseout="BrandPage2()">BRANDS</li>
            <li onmouseover="ExplorePage()" onmouseout="ExplorePage2()">EXPLORE</li>
            <li onmouseover="EventsPage()" onmouseout="EventsPage2()">EVENTS</li>
            <li onmouseover="BluePage()" onmouseout="BluePage2()">BLUE REWARDS</li>
            <li onmouseover="BeautyPage()" onmouseout="BeautyPage2()">BEAUTY ALFRESCO</li>
        </ul>
    </div>
    </div>
     <!-- ---------------------SHOP------------------------------------>
     <div id="pageDiv" class="page" onmouseover="ShopPage(event)" onmouseout="ShopPage2()">
    </div>
     <!------------------------NEW!------------------------------------>
     <div class="page2" id="pageDiv_New" onmouseover="NewPage()" onmouseout="NewPage2()" >
     </div>
     <!-- -------------------------BRANDS--------------------------- -->
     <div class="page3" id="pageDiv_Brands" onmouseover="BrandPage()" onmouseout="BrandPage2()" >
     </div>
    <!-- --------------------------Explore------------------------ -->
    <div class="page4" id="pageDiv_Brands" onmouseover="ExplorePage()" onmouseout="ExplorePage2()" >
    </div>
    <!-- -------------------EVENTS-------------------------------- -->
    <div class="page5" id="pageDiv_Events" onmouseover="EventsPage()" onmouseout="EventsPage2()" >
    </div>
    <!-- --------------------------BLUE----------------------- -->
    <div class="page6" id="pageDiv_BLUE" onmouseover="BluePage()" onmouseout="BluePage2()" >
    </div>
    <!-- --------------------------Beauty---------------------- -->
    <div class="page7" id="pageDiv_Beauty" onmouseover="BeautyPage()" onmouseout="BeautyPage2()" >
    </div>
    <!-- --------------------search------------------------ -->
    <div id="P-search-Div">
        <ul>
           <li><i class="fa-solid fa-magnifying-glass" id="glass"></i></li>
            <li> <input id="P-search_input" type="text" id="P-search-input" placeholder="SEARCH"></li>
            <li> <i class="fa-solid fa-xmark" id="cross" onclick="P_crossFun()"></i></li>
        </ul>
    </div>
    `
}


export default header;