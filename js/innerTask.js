var user = document.getElementById('user-name');
var Picture = document.getElementById('picture-profile');
var role = document.getElementById('user-role')
var container_box = document.querySelector('.container-box');
var box = document.querySelector('.box');
var actualTab = '';
var tab_todo = document.getElementById('todo');
var tab_progress = document.querySelector('#progress');
var tab_completed = document.querySelector('#completed');
var footer = document.getElementById('footer');
var qtyBox = 0;



var myTasks = '';


if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

for(let i = 0; i < arr.length; i++){
    if(arr[i].userLogged === true){
        userName = arr[i].email;
        Name = arr[i].nome;
       if(user != null){
           user.innerHTML = Name;
           if(role != null){
               role.innerHTML = arr[i].role;
           }
           Picture.src =  arr[i].picture;
        }
    } 
}


for(let i = 0; i < myTasks.length; i++){

    if(userName == myTasks[i].userName){
        Category = myTasks[i].category;
        Title = myTasks[i].title;
        Start_time = myTasks[i].start_time;
        End_time = myTasks[i].end_time;
    } 
}


var lastTab = '';


function showTodo(){
    actualTab = 'todo';
    
}
function showProgres(){
    actualTab = 'progress';
    

}
function showCompleted(){
    actualTab = 'completed';
    
}

if(pageCache == 'profile.html'){
    showCompleted()
    innerTask()
}

function innerTask(){
    qtyBox = 0;
    if(actualTab != lastTab){
        container_box.innerHTML = ""; 
    }
    for(let i = 0; i < myTasks.length; i++){

        if(actualTab == tab_todo.id){
            tab_todo.classList.add('selected-tab')
            tab_progress.classList.remove('selected-tab')
            tab_completed.classList.remove('selected-tab')
        }

        if(actualTab == tab_progress.id){
            tab_todo.classList.remove('selected-tab')
            tab_progress.classList.add('selected-tab')
            tab_completed.classList.remove('selected-tab')
        }

        if(actualTab == tab_completed.id){
            tab_todo.classList.remove('selected-tab')
            tab_progress.classList.remove('selected-tab')
            tab_completed.classList.add('selected-tab')
        }

        
        if(userName === myTasks[i].userName ){
            Category = myTasks[i].category;
            Title = myTasks[i].title;
            Start_time = myTasks[i].start_time;
            End_time = myTasks[i].end_time;

           
   if(actualTab != lastTab && myTasks[i].state == actualTab){
       container_box.innerHTML += "<div class='box '><span class='category-task font-pop text-color-purple'>" + Category + 
       "</span> <p class='text-grid font-pop text-color-purple'>"+ Title +
       "</p><p class='time-task font-pop text-color-purple'><img src='/asset/img/🦆 icon _clock_.svg' alt='imagem relogio'>"+ Start_time+" - "+ 
       End_time +"</p></div>"
       qtyBox++;       
    } 


    if(qtyBox > 3){
        footer.setAttribute("style", "position: sticky;")
       } else{
        footer.setAttribute("style", "position: absolute;")
       }
} 

        
}
lastTab = actualTab;
}







