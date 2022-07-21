document.querySelector("form").addEventListener("submit", details)

    let userArr= JSON.parse(localStorage.getItem("userData")) || [];

    function details(event){
        event.preventDefault();

        let userObj= {
            userEmail: document.querySelector("#email").value,
            userPassword: document.querySelector("#password").value
        };

        if(checkLogin(userObj.userEmail,userObj.userPassword) === true){
            localStorage.setItem("signIn", JSON.stringify(userObj));
            alert("Login Successful");
        } else{
            alert("Wrong Username or Password");
        }
    }

    function checkLogin(email,password){
        let filter= userArr.filter(function(elem){
            return elem.userEmail === email &&
            elem.userPassword === password; 
        });
        if(filter.length > 0){
            return true;
        } else{
            return false;
        }
    }