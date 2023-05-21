var myTasks = [];
var userName = '';
var category = '';
var college = document.querySelector('.category-college');
var work = document.querySelector('.category-work');
var social = document.querySelector('.category-social');
var study = document.querySelector('.category-study');
var project = document.querySelector('.category-project');
var home = document.querySelector('.category-home');
var date = document.querySelector('#date');
var start = document.querySelector('#start-time')
var end = document.querySelector('#end-time')
var box = document.querySelector('.box');
var verifyCollege = false
var verifyWork = false
var verifySocial = false
var verifyStudy = false
var verifyProject = false
var verifyHome = false
var Category = '';


if (!localStorage.myTasks){             
    localStorage.myTasks = JSON.stringify(myTasks);
 }


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

function Task (userName, title, date, start_time, end_time, category, descrption, state) {
    event.preventDefault();
    this.userName = userName;
    this.title = title; 
    this.date = date; 
    this.start_time = start_time;
    this.end_time = end_time;
    this.category = category;
    this.descrption = descrption;
    this.state = state;
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
   let State = '';
 
   
   if(Title === null || Title === ""){
       return alert("Você Precisa Preencher o campo Title")
    }

 alert(Date);

    if(Date === null ||Date === '' ){
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

     getDateTime();
     
     if(date.min > date.value){
        alert('Não pode isso ai dog')
        return;
     }  else {
        if(date.value === date.min){
            if(start.value <= start.min){
                alert('Não pode isso ai dog')
                return;
            } else {
                if(end.value > start.value){
                    alert('Boa dog')
                } else{
                    alert('Não pode isso ai dog')
                    return;
                }
            }
        } else {
            if(end.value > start.value){
                alert('Boa dog')
            } else {
                alert('Não pode isso ai dog')
                return;
            }
        }
    }

     const newTask = new Task(userName, Title, Date, Start_time, End_time, Category, Description, State);
    
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
     alert('modal');
    }

    function getDateTime() {
        var currDate = new Date()
        var year = currDate.getFullYear()
        var month = (currDate.getMonth() + 1).toString().padStart(2, "0")
        var day = currDate.getDate().toString().padStart(2, "0")
        var hour = currDate.getHours()
        var minutes = currDate.getMinutes()
        var minDate = `${year}-${month}-${day}`
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minutes < 10) {
                minutes = '0' + hour;
            }
        var minTime = `${hour}:${minutes}`
        date.min = minDate;
        start.min = minTime;
    }

    function taskState(){
        var completedQty = 0;
        alert('funciono');
        var currDate = new Date()
        var year = currDate.getFullYear()
        var month = (currDate.getMonth() + 1).toString().padStart(2, "0")
        var day = currDate.getDate().toString().padStart(2, "0")
        var hour = currDate.getHours()
        var minutes = currDate.getMinutes()
        var currentDate = `${year}-${month}-${day}`
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minutes < 10) {
                minutes = '0' + hour;
            }
        var currentTime = `${hour}:${minutes}`
      

        for(let i = 0; i < myTasks.length; i++){
            if(userName == myTasks[i].userName){
                var Start_time = myTasks[i].start_time;
                var End_time = myTasks[i].end_time;
                var date = myTasks[i].date;
                if(date > currentDate){
                    myTasks[i].state = 'todo';
                } else if(myTasks[i].date < currentDate){
                    myTasks[i].state = 'completed'
                    completedQty++;
                } else{
                    if(Start_time <= currentTime && End_time >= currentTime){
                       myTasks[i].state = 'progress';
                    } else if(Start_time < currentTime && End_time < currentTime){
                        myTasks[i].state = 'completed';
                        completedQty++;
                    } else if(Start_time > currentTime){
                        myTasks[i].state = 'todo';
                    }
                }
                 localStorage.myTasks = JSON.stringify(myTasks);
                 console.log(myTasks)
            } 
            localStorage.myTasks = JSON.stringify(myTasks);
            console.log(myTasks)
        }

        qtyCategory();
       
        function qtyCategory(){
            var nome = '';
            var currDate = new Date()
            var year = currDate.getFullYear()
            var month = (currDate.getMonth() + 1).toString().padStart(2, "0")
            var day = currDate.getDate().toString().padStart(2, "0")
            var currentDate = `${year}-${month}-${day}`
            var task_todo = document.getElementById('text-todo')
            var college_text = document.getElementById('category-college-text');
            var college_work = document.getElementById('category-work-text');
            var college_home = document.getElementById('category-home-text');
            var college_project = document.getElementById('category-project-text');
            var college_study = document.getElementById('category-study-text');
            var college_social = document.getElementById('category-social-text');
            var percentage_bar = document.getElementById('porcentage-bar');
            var percentage_bar_border = document.querySelector('.percentage-bar-border')
            var percentage_text = document.getElementById('porcentage-text')
            var subtitle_home = document.getElementById('subtitle-home')
            var img_box_home = document.querySelector('.box-img-home')
            var qtyCollege = 0;
            var qtyWork = 0;
            var qtyStudy = 0;
            var qtySocial = 0;
            var qtyProject = 0;
            var qtyHome = 0;
        
            if (localStorage.meuArr){             
                arr = JSON.parse(localStorage.getItem('meuArr')); 
            }
            
            if (localStorage.myTasks){             
                myTasks = JSON.parse(localStorage.getItem('myTasks')); 
            }
    
                for(let i = 0; i < arr.length; i++){
                    if(arr[i].userLogged === true){
                    nome = arr[i].email;
                
                    for(let j = 0; j < myTasks.length; j++)
               
                    if(myTasks[j].userName == nome){
                    console.log('dia' + currentDate)
                    console.log("dia curente " + myTasks[j].date)
                    console.log("categoriaaaaa " + myTasks[j].category)
    
                    if(currentDate == myTasks[j].date && myTasks[j].category == 'college'){
                        qtyCollege++;
                        console.log("categoria " + myTasks[j].category)
                    }
    
                    if(currentDate == myTasks[j].date && myTasks[j].category == 'work'){
                        qtyWork++;
                        console.log("categoria " + myTasks[j].category)
                    }
    
                    if(currentDate == myTasks[j].date && myTasks[j].category == 'social'){
                        qtySocial++;
                        console.log("categoria " + myTasks[j].category)
                    }
    
                    if(currentDate == myTasks[j].date && myTasks[j].category == 'study'){
                        qtyStudy++;
                        console.log("categoria " + myTasks[j].category)
                    }
    
                    if(currentDate == myTasks[j].date && myTasks[j].category == 'project'){
                        qtyProject++;
                        console.log("categoria " + myTasks[j].category)
                    }
    
                    if(currentDate == myTasks[j].date && myTasks[j].category == 'home'){
                        qtyHome++;
                        console.log("categoria " + myTasks[j].category)
                    }
                }
    
                var totalQty = qtyWork + qtyCollege + qtyStudy + qtySocial + qtyProject + qtyHome;
     
                console.log(completedQty)

                
                var calcBar = 0;

                 if(completedQty > 0) {
                    calcBar = Math.floor((((totalQty - completedQty) * 100) / completedQty)) ;
                } else {
                    calcBar = totalQty - totalQty;
                }
                
                 if(totalQty > 0 ){
                percentage_text.innerText = calcBar + '% Completed'; 

                percentage_bar.setAttribute("style", "width:" + calcBar + "%;")

                totalQty = totalQty - completedQty;
                
                task_todo.innerHTML = 'You have '+ totalQty + ' more tasks to do!';

            } else{
                percentage_text.innerText = ''; 
                percentage_bar.setAttribute("style", "width:" + 0 + "%;")
                percentage_bar_border.setAttribute("style", "display: none;")
                img_box_home.setAttribute("style", "bottom: 20px;") 
                task_todo.innerText = "You don't have any task yet"
                subtitle_home.setAttribute("style", "margin-top: 60px;")
            }
    
                college_text.innerText = qtyCollege + ' Tasks'; 
                college_work.innerText = qtyWork + ' Tasks'; 
                college_social.innerText = qtySocial + ' Sociaç'; 
                college_study.innerText = qtyStudy + ' Study'; 
                college_project.innerText = qtyProject + ' Project'; 
                college_home.innerText = qtyHome + ' Home'; 
    
                localStorage.myTasks = JSON.stringify(myTasks);
            }           
            localStorage.myTasks = JSON.stringify(myTasks);
        }
            }
    }
   
  

   
    
  