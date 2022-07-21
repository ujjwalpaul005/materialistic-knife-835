document.querySelector("form").addEventListener("submit", details)
    
    let userArr= JSON.parse(localStorage.getItem("userData")) || [];

    function details(event){
        event.preventDefault();

        let userObj= {
            userEmail: document.querySelector("#email").value,
            userFName: document.querySelector("#name1").value,
            userLName: document.querySelector("#name2").value,
            userPassword: document.querySelector("#password").value
        };

        if(checkEmail(userObj.userEmail) === true){
            userArr.push(userObj);
            localStorage.setItem("userData", JSON.stringify(userArr));
            window.location.href= "../Login/index.html";
        } else{
            alert("Account Already Exists");
        }
    }

    function checkEmail(email){
        let filtered= userArr.filter(function(elem){
            return email === elem.userEmail;
        });
        if(filtered.length > 0){
            return false;
        } else{
            return true;
        }
    }