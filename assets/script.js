var userInput = document.getElementById('firstName');

//capture user first name
document.querySelector('form.userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem("userSubmit", userInput.value)
    console.log(userInput.value);  
    //send user to new html page
    let myWindow
    function openWindow(){
    myWindow = window.open('new.html')
    }
    openWindow()
});


//send user back to homepage 


// function secondPage() {
//     var returnButton = document.getElementById("submitButtonTwo");
//     returnButton.addEventListener("click", returnFunction);

//     function returnFunction(){
//         window.close()
//     }
//     };



// firstPage();
// secondPage();


