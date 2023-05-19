
if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

console.log(arr);

for(let i = 0; i < arr.length; i++){
    if(arr[i].userLogged !== true){
        alert("Você não está autenticado");
        window.location.href = "./login.html"
    } 
}



