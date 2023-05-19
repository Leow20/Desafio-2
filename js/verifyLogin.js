var verify = false;
var arr = [];

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

console.log(arr);

for(let i = 0; i < arr.length; i++){
    if(arr[i].userLogged === true){
        verify = true;
        break;
    } else{
        verify = false;
    }
}
    if(!verify){   
        alert("Você não está autenticado");
        window.location.href = "./login.html"
    }else{
        alert("Autenticado")
    }

console.log(verify);


