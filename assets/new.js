var userName = localStorage.getItem("userSubmit");

function secretMessgae(){
    var body = document.body;
    var h1El = document.createElement("h1");
    h1El.textContent = "This is your secret message " + userName;
    body.appendChild(h1El)
};

secretMessgae()