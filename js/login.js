var arr = [];
var emailCreated = false;
var userLogged = false

function User (email, senha, hole, nome, picture, userLogged) {
    event.preventDefault();
    this.email = email;
    this.senha = senha; 
    this.hole = hole; 
    this.nome = nome;
    this.picture = picture;
    this.userLogged = false;
}
 
function createUser(){
   event.preventDefault();
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }

   console.log(arr.length)
   let Email = document.getElementById("email").value;
   let Senha = document.getElementById("senha").value;
   let Nome = document.getElementById("nome").value;
   let Hole = document.getElementById("hole").value;
   let Picture = document.getElementById("profile-picture").value;
  
   
   if(Email === null || Email === ""){
       return alert("Você Precisa Preencher o campo Email")
    }

    if(Senha === null || Senha === ""){
        return alert("Você Precisa Preencher o campo Password")
    }

    if(Nome === null || Nome === ""){
        return alert("Você Precisa Preencher o campo Nome")
     }
 
     if(Hole === null || Hole === ""){
         return alert("Você Precisa Preencher o campo Occupation")
     }
    
    verifyCratedUser(Email, arr)
   
    if(!emailCreated){
       const newUser = new User( Email, Senha, Hole, Nome, Picture);
       arr.push(newUser);
       document.getElementById("email").value = "";
       document.getElementById("senha").value = "";
       document.getElementById("nome").value = "";
       document.getElementById("hole").value = "";
       document.getElementById("profile-picture").value = "";
       localStorage.meuArr = JSON.stringify(arr);
       window.location.href = './home.html';
    } else{
        alert('Email já Cadastrado')
    }

    console.log(arr);
}
    
function verifyCratedUser(Email, arr){
    
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
    event.preventDefault();
    let verify = false;
    arr = JSON.parse(localStorage.getItem('meuArr')); 
     Email = document.getElementById("email").value;
     Senha = document.getElementById("senha").value;
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].email)
        console.log(Email)
        console.log(arr[i].senha)
        console.log(Senha)
        if(arr[i].email === Email && arr[i].senha === Senha){
            alert("Logado")
            arr[i].userLogged = true;
            window.location.href = './home.html';
            localStorage.meuArr = JSON.stringify(arr);
            verify = true;
        } else {
            arr[i].userLogged = false;
            localStorage.meuArr = JSON.stringify(arr);
        }
    }
    if(verify === false){ 
        return alert("Email ou senha invalidas") ;
    }
    console.log(arr);
}

function clearItems(){
   arr = [];
   localStorage.meuArr = JSON.stringify(arr);   
}


