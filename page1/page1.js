document.querySelector(".start-quiz").style.display="none";
document.querySelector(".msg-success").style.visibility="hidden";
document.querySelector(".msg-username").style.visibility="hidden";
document.querySelector(".msg-useremail").style.visibility="hidden";
 function storeData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    const data={name,email};
    if(name.length < 3 || name.length == ""){
        document.querySelector(".msg-useremail").style.visibility="hidden";
        document.querySelector(".msg-success").style.visibility="hidden";
        document.querySelector(".msg-username").style.visibility="visible";
    }
    else if(email.length <3 || email.length == ""){
        document.querySelector(".msg-success").style.visibility="hidden";
        document.querySelector(".msg-username").style.visibility="hidden";
        document.querySelector(".msg-useremail").style.visibility="visible";
    }
    else{
    console.log(data);
    document.querySelector(".msg-username").style.visibility="hidden";
    document.querySelector(".msg-success").style.visibility="visible";
    document.querySelector(".msg-useremail").style.visibility="hidden";
    document.querySelector(".register").style.display="none";
    document.querySelector(".start-quiz").style.display="inline";
}
}

