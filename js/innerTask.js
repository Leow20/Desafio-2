
var container_box = document.querySelector('.container-box');

function innerTask(){
   // box.innerHTML =  "<span class'casdasd'>College Stuf</span><p>Design and Documentation meeting</p><p>15.00 pm - 16.00 pm</p>"
    container_box.innerHTML = "<div class='box'><span class='category-task font-pop text-color-purple'>" + Category + "</span> <p class='text-grid font-pop text-color-purple'>"+ Title +"</p><p class='time-task font-pop text-color-purple'><img src='/asset/img/🦆 icon _clock_.svg' alt='imagem relogio'>"+ Start_time+" - "+ End_time +"</p></div>"
}

innerTask();



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