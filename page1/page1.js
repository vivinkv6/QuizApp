document.querySelector(".start-quiz").style.display="none";
  
 function storeData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    const data={name,email};
    if(name.length < 3 || name.length == ""){
alert("Please Enter valid UserName")
    }
    else if(email.length <3 || email.length == ""){
        alert("Please Enter valid UserEmail")
    }
    else{
    console.log(data);
    alert("succesfully Registered");
    document.querySelector(".register").style.display="none";
    document.querySelector(".start-quiz").style.display="inline";
}
}

