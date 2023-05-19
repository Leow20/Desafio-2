var myTasks = [];
var userName = '';
var category = '';

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

for(let i = 0; i < arr.length; i++){
    if(arr[i].userLogged === true){
        alert("O usuario logado é:" + arr[i].nome);
        userName = arr[i].nome;
    } 
}

function Task (userName, title, date, start_time, end_time, category, descrption) {
    event.preventDefault();
    this.userName = userName;
    this.title = title; 
    this.date = date; 
    this.start_time = start_time;
    this.end_time = end_time;
    this.category = category;
    this.descrption    = descrption;
}         

function createTask(){
   event.preventDefault();
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }

   if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

   console.log(myTasks)

   let Title = document.getElementById("title").value;
   let Date = document.getElementById("date").value;
   let Start_time = document.getElementById("start-time").value;
   let End_time = document.getElementById("end-time").value;
   let Description = document.getElementById("description").value;
   let Category = '';
  
   
   if(Title === null || Title === ""){
       return alert("Você Precisa Preencher o campo Title")
    }

    if(Date === null || Date === ""){
        return alert("Você Precisa Preencher o campo Date")
    }

    if(Start_time === null || Start_time === ""){
        return alert("Você Precisa Preencher o campo Start time")
     }
 
     if(End_time === null || End_time === ""){
        return alert("Você Precisa Preencher o campo End time")
     }

     const newTask = new Task(userName, Title, Date, Start_time, End_time, Category, Description);
    
     myTasks.push(newTask);
    
     document.getElementById("title").value = "";
     document.getElementById("date").value = "";
     document.getElementById("start-time").value = "";
     document.getElementById("end-time").value = "";
     document.getElementById("description").value = "";

     localStorage.myTasks = JSON.stringify(myTasks);
     //MODAL
     console.log(myTasks)
     alert('modal');
    }