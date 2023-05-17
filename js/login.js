var arr = [];

// function createCount(){
//     localStorage.email = document.getElementById("email").value;
//     localStorage.senha  = document.getElementById("senha").value;
    
//     const newCount = new Count( localStorage.email,  localStorage.senha);

// }

 function Count (email, senha) {
    event.preventDefault();
    this.email = email;
    this.senha = senha;
    
//console.log(this)
   
}

 
function createCount(){
    event.preventDefault();
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }
   
   let novoItem = document.getElementById("email").value;
   arr.push(novoItem);
   document.getElementById("email").value = "";
   localStorage.meuArr = JSON.stringify(arr);
   console.log(arr)
}

// function showItems(){
//    let resultDIV = document.getElementById('d');
//    resultDIV.innerHTML = "";
//    if (localStorage.meuArr){             
//       arr = JSON.parse(localStorage.getItem('meuArr')); 
//    }
   
//    for(var i in arr){
//       let p = document.createElement("p");
//       p.innerHTML = arr[i];
//       resultDIV.append(p);
//    }
// }



function clearItems(){
   arr = [];
   localStorage.meuArr = JSON.stringify(arr);   
}


