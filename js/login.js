var arr = [];
var emailCreated = false;

 function Count (email, senha) {
    event.preventDefault();
    this.email = email;
    this.senha = senha;   
}

 
function createCount(){
   event.preventDefault();
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }
   console.log(arr.length)
   let Email = document.getElementById("email").value;
   let Senha = document.getElementById("senha").value;
  
   
   if(Email === null || Email === ""){
       return alert("Você Precisa Preencher o campo Email")
    }

    if(Senha === null || Senha === ""){
        return alert("Você Precisa Preencher o campo PassWord")
     }
    
    verifyCratedCount(Email, arr)
   
    if(!emailCreated){
       const newCount = new Count( Email, Senha);
       arr.push(newCount);
       document.getElementById("email").value = "";
       document.getElementById("senha").value = "";
       localStorage.meuArr = JSON.stringify(arr);
    }

}
    
    function verifyCratedCount(Email, arr){
    
        console.log(Email)

        for(let i = 0; i < arr.length; i++){
            if(arr[i].email !== Email){
                console.log("Pode Criar")
                console.log(arr[i].email)
                emailCreated = false;
            } else {
                console.log("Pode nao")
                console.log(arr[i].email)
                emailCreated = true;
            }
        }
}


function verifyLogin(Email, Senha, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].email === Email && arr[i].senha === Senha){
            alert("Logado")
        } else {
            console.log("Email ou senha invalidas")  
        }
    }
}


function clearItems(){
   arr = [];
   localStorage.meuArr = JSON.stringify(arr);   
}


