document.getElementById("sbmtbtn").addEventListener("click", function(event){
event.preventDefault();
    
let username = document.getElementById("username").value.trim();
let email = document.getElementById("email").value.trim();
let message = "";
if (username === ""){
    message ="username cannot be empty!";
}
else if (email === ""){
    message ="email cannot be empty!";
}

else if (!email.includes("@")){
    message = "invalid email";
}
else {
    message = "Submitted successfully";
}

document.getElementById("formMessage").innerText = message;

});

document.getElementById("colorbtn").addEventListener("click", function()
{
    const colors = ["pink","purple","green","yellow"];
    const randomcolor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomcolor;
});

let count = 0;
document.getElementById("increasebutton").addEventListener("click", function(){
count++;
document.getElementById("counter").innerText = "counter: " + count;
});

document.getElementById("reset").addEventListener("click", function(){
    count = 0;
    document.getElementById("counter").innerText = "counter: " + count;
}) 