var user = document.getElementById('user-name');
var Picture = document.getElementById('picture-profile');
var container_box = document.querySelector('.container-box');
var box = document.querySelector('.box');
var actualTab = '';
var tab_todo = document.getElementById('todo');
var tab_progress = document.querySelector('#progress');
var tab_completed = document.querySelector('#completed');



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
        console.log( Name)
        console.log('poxa ' + arr[i].picture)
        user.innerHTML = Name;
        Picture.src =  arr[i].picture;;
    } 
}


for(let i = 0; i < myTasks.length; i++){
    console.log(myTasks[i].userName)
    console.log(userName)
    if(userName == myTasks[i].userName){
        Category = myTasks[i].category;
        Title = myTasks[i].title;
        Start_time = myTasks[i].start_time;
        End_time = myTasks[i].end_time;
    } 
}

console.log(arr)
console.log(myTasks)

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


function innerTask(){
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
       console.log('tp da tab 1 ' + myTasks[i].state)
       console.log('atual 1 ' + actualTab) 
    } 
} 

        
}
lastTab = actualTab;
}





