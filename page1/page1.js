function storeData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    const data={name,email};
    console.log(data);
    alert("Data stored succesfully");
}