function displayModalMsg(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("comment").value;

  document.getElementById("modal-name").innerHTML = "Name: " + name;
  document.getElementById("modal-email").innerHTML = "Email: " + email;
  document.getElementById("modal-comment").innerHTML = "Message: " + msg;
}

function displaySuccessAlert(){
  var x = document.getElementById("msg-received-alert");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  }
}
// add if statement if send message not back to editing!


//    setTimeout(function() { Alert(); }, 5000); //time in ms// JavaScript Document