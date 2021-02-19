//Changes everthing in the content to "Congratulations!!! You're all set".
function changehtml(){
	document.getElementById("content").innerHTML = "Congratulations!!! You're all set.";
}
//Goes through all there textboxes to check the details are valid.
function validateDetails(){
	var name = document.forms["confirm"]["name"].value; //The variable for users name.
	var age = document.forms["approve"]["age"].value; //The variable for users age.
	var address = document.forms["check"]["address"].value; //The variable for users address.
	if(name == "" || address == ""){
       alert("Missing details"); // If name or address has no text alert the user.
	}
	else if(name.match(/^\d+$/)){
       alert("Letters Only for Name"); // If name has numbers alert the user.
	}
	else if(!age.match(/^\d+$/)){
       alert("Missing details or Numbers Only for Age"); // If age is empty or contains letters alert the user.
	}
	else if(age < 18){
		alert("Need to be at least 18years of age"); // If user is underage alert the user.
	}
	else{
	   changehtml(); // Call changehtml method.
	}
}
// Gives the current year.
window.onload = function(){
	var d = new Date();
	document.getElementById("year").innerHTML = d.getFullYear();
}
//Previous experience(school) is how I knew about .match and I learned /^\d+$/ from the same place.