if (!localStorage.myTasks){             
    localStorage.myTasks = JSON.stringify(myTasks);
 }

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

var container = document.querySelector('.container-box');
var day_completed = document.querySelector('.day-completed');
var verifyFirtsTime = false;
var verify = false;

          
var diasParaDiminuir = 1;

var ontem = new Date();

ontem.setDate(ontem.getDate() - 1);
var anoOntem = ontem.getFullYear();
var mesOntem = formatarNumero(ontem.getMonth() + 1);
var diaOntem = formatarNumero(ontem.getDate());
var Ontem = `${anoOntem}-${mesOntem}-${diaOntem}`

var dataAtual = new Date();


var qtyFor = 0;


for(let i = 0; i < arr.length; i++){
    if(arr[i].userLogged === true){
    nome = arr[i].email;

    

    for(let j = 0; j < myTasks.length; j++){
        
        qtyFor = 0;
        
        // Defina o número de dias que deseja diminuir
       

        // Obtém o valor do ano
        var ano = dataAtual.getFullYear();
    
        // Obtém o valor do mês (lembrando de adicionar 1)
        var mes = formatarNumero(dataAtual.getMonth() + 1);
    
        // Obtém o valor do dia
        var dia = formatarNumero(dataAtual.getDate());
 
        var hora = formatarNumero(dataAtual.getHours());

        // Obtém o valor dos minutos

      
        

        var minutos = formatarNumero(dataAtual.getMinutes());

        var currentTime = `${hora}:${minutos}`; 
        var currDate = `${ano}-${mes}-${dia}`
            
        dataAtual.setDate(dataAtual.getDate() - diasParaDiminuir);

    
             verifyFirtsTime = false;

             for(let k = 0; k < myTasks.length; k++){
                console.log(myTasks[k].date + " data task")
                console.log(currDate + ' data atual')
                console.log('loop')
                
                console.log(diasParaDiminuir + ' diminuir')
                
               
                
             if(myTasks[k].userName == nome && myTasks[k].date == currDate){     
                   
                console.log('match')

                    if(!verifyFirtsTime){
                        verifyFirtsTime = true;
                        console.log('first time')
                        if(myTasks[k].date == currDate && !verify){
                            container.innerHTML += "<p class='day-notification'>Today</p><div class='box first'><span class='category-task font-pop text-color-purple'>" + (myTasks[k].end_time - currentTime) + 
                            "</span> <p class='text-grid font-pop text-color-purple'>"+ myTasks[k].title +
                            "</p>"
                            console.log('hoje')
                                today = currDate;
                                verify = true;
                            
                        }else if(myTasks[k].date == Ontem){
                            console.log('ontem')
                            container.innerHTML += "<p class='day-notification'>Yesterday</p><div class='box '><span class='category-task font-pop text-color-purple'>" + (myTasks[k].end_time - currentTime) + 
                            "</span> <p class='text-grid font-pop text-color-purple'>"+ myTasks[k].title +
                            "</p>"
                        } else {
                            console.log('dia tal')
                            container.innerHTML +="<p class='day-notification'>"+ currDate +"</p><div class='box '><span class='category-task font-pop text-color-purple'>" + (myTasks[k].end_time - currentTime) + 
                            "</span> <p class='text-grid font-pop text-color-purple'>"+ myTasks[k].title +
                            "</p>"
                        }
                      
                    } else{   
                        container.innerHTML += "<div class='box '><span class='category-task font-pop text-color-purple'>" + (myTasks[k].end_time - currentTime) + 
                        "</span> <p class='text-grid font-pop text-color-purple'>"+ myTasks[k].title +
                        "</p>"
                    }
                }
        } 
      
        // Obtém o valor da data atual e subtrai o número de dias
    
    }
}

}


function formatarNumero(valor) {
    return valor < 10 ? `0${valor}` : valor;
}
