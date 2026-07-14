document.getElementById("book").onclick = function(){
    alert("Thank you for choosing to download our app.Your download will begin shortly");}

document.querySelector(".form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let Message = document.querySelector(".message");
    const nameInput = document.querySelector(".name").value;
    const emailInput = document.querySelector(".email").value;
    const toursiteInput = document.querySelector(".tour").value;
    if (nameInput == "" || emailInput == "" ||  toursiteInput == ""){
        alert("Please fill in all the fields before submittion.");
    }else{
      Message.textContent = "thank you "+ nameInput+"";
      Message.style.display = "block";  
    }
   })

