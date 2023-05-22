var arr = [];
var emailCreated = false;
var userLogged = false


 
if (!localStorage.meuArr){             
    localStorage.meuArr = JSON.stringify(arr);
 }

 if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

const inputFile = document.querySelector('#profile-picture');
const pictureImage = document.querySelector('.picture_image');
const img = document.createElement('img');


var imagem = document.getElementById('profile-picture'); 
var caminhoCompleto = imagem;

if(inputFile != null){


inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];
  

    if(file){
        const reader = new FileReader();
        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            img.src = readerTarget.result;

            img.classList.add('picture_image');
            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
            
        })
            localStorage.meuArr = JSON.stringify(arr);
        
        var src = reader.readAsDataURL(file); // picture SRC aqui 

    } else{
        pictureImage
    }
    
})
}


function User (email, senha, role, nome, picture, userLogged) {
    event.preventDefault();
    this.email = email;
    this.senha = senha; 
    this.role = role; 
    this.nome = nome;
    this.picture = picture;
    this.userLogged = true;
}
 
function createUser(){
   event.preventDefault();
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }

   for(let i = 0; i < arr.length; i++){
        arr[i].userLogged = false;
        localStorage.meuArr = JSON.stringify(arr);
}


   let Email = document.getElementById("email").value;
   let Senha = document.getElementById("senha").value;
   let Nome = document.getElementById("nome").value;
   let Role = document.getElementById("role").value;
   let Picture = img.src;
  
  
   if(!validEmail(Email)){
    return  alert("O email é inválido. Por favor, verifique o formato do email digitado.");
  }
  if(!validSenha(Senha)){
    return  alert("A senha é inválida. Ela deve conter no mínimo 6 caracteres, Pelo menos uma letra minúscula, Pelo menos uma letra maiúscula e Pelo menos um número.")
  }
 
   
   if(Email === null || Email === ""){
       return alert("Você Precisa Preencher o campo Email")
    }

    if(Senha === null || Senha === ""){
        return alert("Você Precisa Preencher o campo Password")
    }

    if(Nome === null || Nome === ""){
        return alert("Você Precisa Preencher o campo Nome")
     }
 
     if(Role === null || Role === ""){
         return alert("Você Precisa Preencher o campo Occupation")
     }

     if(Picture === ''){
     return alert("Você Precisa escolher uma foto de Perfil")
     }
    
    verifyCratedUser(Email, arr)
   
    if(!emailCreated){
       const newUser = new User( Email, Senha, Role, Nome, Picture);
       arr.push(newUser);
       document.getElementById("email").value = "";
       document.getElementById("senha").value = "";
       document.getElementById("nome").value = "";
       document.getElementById("role").value = "";
       document.getElementById("profile-picture").src = "";
       localStorage.meuArr = JSON.stringify(arr);
       window.location.href = './home.html';
    } else{
        alert('Email já Cadastrado')
    }
}
    
function verifyCratedUser(Email, arr){
    
   

        for(let i = 0; i < arr.length; i++){
            if(arr[i].email !== Email){
                emailCreated = false;
            } else {
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
    for(let i = 0; i < arr.length; i++){
        if(arr[i].email === Email && arr[i].senha === Senha){
            alert("Bem-vindo(a), " + arr[i].nome + "! Você está logado(a) com sucesso.")
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
   
}

function logOut(){
    alert('Você foi desconectado com sucesso. Volte em breve!')
    for(let i = 0; i < arr.length; i++){
        arr[i].userLogged = false;
        localStorage.meuArr = JSON.stringify(arr);
        window.location.href = './login.html'
    }
   
}

    function validEmail(Email){

        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(regexEmail.test(Email)){
            return true;
        } else{
            return false;
        }
    }

    function validSenha(Senha){

        var regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
       
        if(regexSenha.test(Senha)){
            return true;
        } else{
            return false;
        }
        
    }


   function editProfile(){

        var emailNo = document.getElementById("email").value = email;
        var Picture = document.getElementById('picture_image');
            
            for(let i = 0; i < arr.length; i++){
                
                if(arr[i].userLogged === true){
                    var email = arr[i].email;
                    var nome = arr[i].nome;
                    var senha = arr[i].senha;
                    var role = arr[i].role;
                    var picture =  arr[i].picture;
                    }
               
            

             document.getElementById("email").value = email;
             document.getElementById("email").disabled = true;
             document.getElementById("nome").value = nome;
             document.getElementById("senha").value = senha;
             document.getElementById("role").value = role;
             Picture.src = picture;
              
            } 

        }

        function saveChanges() {
            var nome = document.getElementById("nome").value;
            var senha = document.getElementById("senha").value;
            var role = document.getElementById("role").value;
            var img = document.getElementById("picture_image").src;
          
            for (let i = 0; i < arr.length; i++) {
              if (arr[i].userLogged === true) {
                arr[i].nome = nome;
                arr[i].senha = senha;
                arr[i].role = role;
                arr[i].picture = img;
          
                if (!validSenha(senha)) {
                  return alert("A senha é inválida. Ela deve conter no mínimo 6 caracteres, pelo menos uma letra minúscula, pelo menos uma letra maiúscula e pelo menos um número.");
                }
          
                localStorage.meuArr = JSON.stringify(arr);
                window.location.href = 'profile.html';
              }
            }
          }
          
          document.addEventListener('DOMContentLoaded', function() {
           
          // Adicione o evento de escuta ao elemento input file
          var inputPicture = document.getElementById('profile-picture');
          inputPicture.addEventListener('change', function(event) {
            var selectedFile = event.target.files[0];
            var pictureImage = document.getElementById('picture_image');
          
            if (selectedFile) {
              var reader = new FileReader();
              reader.onload = function(event) {
                pictureImage.src = event.target.result; // Atualiza o atributo src da tag <img> com a imagem selecionada pelo usuário
              };
              reader.readAsDataURL(selectedFile); // Lê o arquivo de imagem como um URL de dados
            } else {
              pictureImage.src = "/asset/img/avater.png"; // Define uma imagem padrão caso nenhum arquivo seja selecionado
            }
          });
         
        });
          

        function showPassword() {
            var passwordInput = document.getElementById('senha');
            var slashEyeIcon = document.getElementById('slash-eye');
            var eyeIcon = document.getElementById('eye');
          
            if (passwordInput.type === 'password') {
              passwordInput.type = 'text';
              slashEyeIcon.style.display = 'none';
              eyeIcon.style.display = 'inline';
            } else {
              passwordInput.type = 'password';
              slashEyeIcon.style.display = 'inline';
              eyeIcon.style.display = 'none';
            }
          }

          
          var hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

      
          if (hasVisitedBefore) {
            document.getElementById('welcome-message').innerHTML = 'Welcome<br>Back';
        } else {
            document.getElementById('welcome-message').innerHTML = 'Welcome';
            
            localStorage.setItem('hasVisitedBefore', true);
          }
            
  
    
          

   



