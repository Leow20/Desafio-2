var verify = false;
var arr = [];

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}


for(let i = 0; i < arr.length; i++){
    event.preventDefault();
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
    }



