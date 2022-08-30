var userInput = document.getElementById('firstName');

//capture user first name
document.querySelector('form.userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(userInput.value);  
    //send user to new html page
    window.open('new.html')
      
});

//capture user last name 

//send user back to homepage 


