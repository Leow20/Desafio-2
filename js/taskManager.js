var myTasks = [];
var userName = '';
var category = '';
var college = document.querySelector('.category-college');
var work = document.querySelector('.category-work');
var social = document.querySelector('.category-social');
var study = document.querySelector('.category-study');
var project = document.querySelector('.category-project');
var home = document.querySelector('.category-home');
var verifyCollege = false
var verifyWork = false
var verifySocial = false
var verifyStudy = false
var verifyProject = false
var verifyHome = false
var Category = '';

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

function selectedCollege(){
    if(verifyCollege){
        college.classList.remove("selected-category");
        verifyCollege = false;
        verifyWork = false;
        verifySocial = false;
        verifyStudy = false;
        verifyProject = false;
        verifyHome = false;
        Category = ''
        return;
    }
    Category = 'college'
    verifyCollege = true;
    verifyWork = false;
    verifySocial = false;
    verifyStudy = false;
    verifyProject = false;
    verifyHome = false;
    college.classList.add("selected-category");
    work.classList.remove("selected-category")
    social.classList.remove("selected-category")
    study.classList.remove("selected-category")
    project.classList.remove("selected-category")
    home.classList.remove("selected-category")
}


function selectedWork(){
    if(verifyWork){
        work.classList.remove("selected-category");
        verifyCollege = false;
        verifyWork = false;
        verifySocial = false;
        verifyStudy = false;
        verifyProject = false;
        verifyHome = false;
        Category = '';
        return ;
    }
    Category = 'work'
    verifyWork = true;
    verifyCollege = false;
    verifySocial = false;
    verifyStudy = false;
    verifyProject = false;
    verifyHome = false;
    work.classList.add("selected-category")
    college.classList.remove("selected-category");
    social.classList.remove("selected-category")
    study.classList.remove("selected-category")
    project.classList.remove("selected-category")
    home.classList.remove("selected-category")
}

function selectedSocial(){
    if(verifySocial){
        social.classList.remove("selected-category");
        verifyCollege = false;
        verifyWork = false;
        verifySocial = false;
        verifyStudy = false;
        verifyProject = false;
        verifyHome = false;
        Category = '';
        return ;
    }
    Category = 'social';
    verifySocial = true;
    verifyCollege = false;
    verifyWork = false;
    verifyStudy = false;
    verifyProject = false;
    verifyHome = false;
    social.classList.add("selected-category")
    college.classList.remove("selected-category");
    work.classList.remove("selected-category")
    study.classList.remove("selected-category")
    project.classList.remove("selected-category")
    home.classList.remove("selected-category")
}

function unselect(){
    study.classList.remove("selected-category")
    college.classList.remove("selected-category");
    work.classList.remove("selected-category")
    social.classList.remove("selected-category")
    project.classList.remove("selected-category")
    home.classList.remove("selected-category")
} 

function selectedStudy(){
    if(verifyStudy){
        study.classList.remove("selected-category");
        verifyCollege = false;
        verifyWork = false;
        verifySocial = false;
        verifyStudy = false;
        verifyProject = false;
        verifyHome = false;
        Category = '';
        return ;
    }
    Category = 'study';
    verifyStudy = true;
    verifyCollege = false;
    verifyWork = false;
    verifySocial = false;
    verifyProject = false;
    verifyHome = false;
    study.classList.add("selected-category")
    college.classList.remove("selected-category");
    work.classList.remove("selected-category")
    social.classList.remove("selected-category")
    project.classList.remove("selected-category")
    home.classList.remove("selected-category")
}

function selectedProject(){
    if(verifyProject){
        project.classList.remove("selected-category");
        verifyCollege = false;
        verifyWork = false;
        verifySocial = false;
        verifyStudy = false;
        verifyProject = false;
        verifyHome = false;
        Category = '';
        return ;
    }
    Category = 'project';
    verifyProject = true;
    verifyCollege = false;
    verifyWork = false;
    verifySocial = false;
    verifyStudy = false;
    verifyHome = false;
    project.classList.add("selected-category")
    college.classList.remove("selected-category");
    work.classList.remove("selected-category")
    social.classList.remove("selected-category")
    study.classList.remove("selected-category")
    home.classList.remove("selected-category")
}

function selectedHome(){
    if(verifyHome){
        home.classList.remove("selected-category");
        verifyCollege = false;
        verifyWork = false;
        verifySocial = false;
        verifyStudy = false;
        verifyProject = false;
        verifyHome = false;
        Category = '';
        return;
    }
    Category = 'home';
    verifyHome = true;
    verifyCollege = false;
    verifyWork = false;
    verifySocial = false;
    verifyStudy = false;
    verifyProject = false;
    home.classList.add("selected-category")
    college.classList.remove("selected-category");
    work.classList.remove("selected-category")
    social.classList.remove("selected-category")
    study.classList.remove("selected-category")
    project.classList.remove("selected-category")
}


for(let i = 0; i < arr.length; i++){
    if(arr[i].userLogged === true){
        alert("O usuario logado é:" + arr[i].nome);
        userName = arr[i].email;
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
  
   
   if(Title === null || Title === ""){
       return alert("Você Precisa Preencher o campo Title")
    }

    if(Date === null){
        return alert("Você Precisa Preencher o campo Date")
    }

    if(Start_time === null || Start_time === ""){
        return alert("Você Precisa Preencher o campo Start time")
     }
 
     if(End_time === null || End_time === ""){
        return alert("Você Precisa Preencher o campo End time")
     }

     if(Category === null || Category === ""){
        return alert("Você Precisa Escolher uma Categoria")
     }

     const newTask = new Task(userName, Title, Date, Start_time, End_time, Category, Description);
    
     myTasks.push(newTask);
    
     document.getElementById("title").value = "";
     document.getElementById("date").value = "";
     document.getElementById("start-time").value = "";
     document.getElementById("end-time").value = "";
     document.getElementById("description").value = "";
     Category = '';
     unselect();

     localStorage.myTasks = JSON.stringify(myTasks);
     //MODAL
     console.log(myTasks)
     alert('modal');
    }