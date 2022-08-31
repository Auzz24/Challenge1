var userName = localStorage.getItem("userSubmit");

function secretMessgae(){
    var body = document.body;
    var h1El = document.createElement("h1");
    h1El.textContent = " ✨ This is your secret message " + userName + "✨";
    body.appendChild(h1El)
    h1El.setAttribute("style", "background-color:rgb(115,165,115); border: solid tan 5px; padding: 0px:")
}
secretMessgae()