
var container_box = document.querySelector('.container-box');

if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

for(let i = 0; i < arr.length; i++){
    if(arr[i].userLogged === true){
        userName = arr[i].email;
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

console.log(myTasks)

function innerTask(){
    for(let i = 0; i < myTasks.length; i++){
        if(userName === myTasks[i].userName){
            Category = myTasks[i].category;
            Title = myTasks[i].title;
            Start_time = myTasks[i].start_time;
            End_time = myTasks[i].end_time;
        
    container_box.innerHTML += "<div class='box'><span class='category-task font-pop text-color-purple'>" + Category + 
    "</span> <p class='text-grid font-pop text-color-purple'>"+ Title +
    "</p><p class='time-task font-pop text-color-purple'><img src='/asset/img/🦆 icon _clock_.svg' alt='imagem relogio'>"+ Start_time+" - "+ 
   End_time +"</p></div>"
} 
}

}






/*<div class="box">
<span class="category-task font-pop text-color-purple">College Stuf</span>
<p class="text-grid font-pop text-color-purple">Design and Documentation meeting</p>
<p class="time-task font-pop text-color-purple"><img src="/asset/img/🦆 icon _clock_.svg" alt="imagem relogio">15.00 pm - 16.00 pm</p>
</div>
<div class="box">
<span class="category-task font-pop text-color-purple">College Stuf</span>
<p class="text-grid font-pop text-color-purple">Design and Documentation meeting</p>
<p class="time-task font-pop text-color-purple"><img src="/asset/img/🦆 icon _clock_.svg" alt="imagem relogio">15.00 pm - 16.00 pm</p>
</div>*/