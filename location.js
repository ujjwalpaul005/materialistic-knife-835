

    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    
    //url="https://api.openweathermap.org/data/2.5/weather?q=deoghar&appid=c47bf400840de3be9d1f68cbb51de197"
    
    
    //https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4f1ac9715752672af37b0ece001dd714
    
    //lot&long  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    
    function btnsearch(){
        
        let city = document.getElementById('vikash').value;
    
        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c47bf400840de3be9d1f68cbb51de197`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=c47bf400840de3be9d1f68cbb51de197`;
         
        fetch(url)
        .then(function(res){
            return res.json();
            //console.log(res.json());
        })
        .then(function(res){
         console.log(res);
         apend(res);
        }).catch(function(err){
            console.log(err);
        });
        city.innerText = null;
    
        
    }
    
    
    function apend(data) {
        // let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        let url=`https://maps.google.com/maps?q=ranchi&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        
        let container = document.getElementById("container");
    
        container.innerHTML = null;
        let h2=document.createElement("h2");
    
        h2.innerText=data.name;
    
        let temp=document.createElement("p");
        // temp.innerText =`TEMP---${(data.main.temp- 273.15).toFixed(1)}     C`;
    
        let mintemp=document.createElement("p");
        // mintemp.innerText =`MIN_TEMP---${(data.main.temp_min- 273.15).toFixed(1)}     C`;
    
        let maxtemp=document.createElement("p");
        // maxtemp.innerText =`MAX_TEMP---${(data.main.temp_max- 273.15).toFixed(1)}     C`;
    
        // container.append(h2,temp,mintemp,maxtemp);
        let iframe=document.getElementById("gmap_canvas");
        iframe.src=url;
        
    }

    function getlocation(){
        navigator.geolocation.getCurrentPosition(success);

        function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getWeatherOnLocation(crd.latitude, crd.longitude);
  }
    }

    

    
    

    function getWeatherOnLocation(lat,lon){
        
        let city = document.getElementById('vikash').value;
    
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f1ac9715752672af37b0ece001dd714`;
         
        fetch(url)
        .then(function(res){
            return res.json();
            //console.log(res.json());
        })
        .then(function(res){
         console.log(res);
         apend(res);
        }).catch(function(err){
            console.log(err);
        });
        city.innerText = null;
    
        
    }