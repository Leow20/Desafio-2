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
var footer = document.querySelector('footer')
var verifyFirtsTime = false;
var verify = false;
var verifyToday = false;
var todayTru = '';
var qtyBox = 0;

          
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
    user = arr[i].nome;

    if(qtyBox > 3){
        footer.setAttribute("style", "position: sticky;")
       } else{
        footer.setAttribute("style", "position: absolute;")
       }

    

    for(let j = 0; j < myTasks.length; j++){


        // Obtém o valor do ano
        var ano = dataAtual.getFullYear();
    
        // Obtém o valor do mês (lembrando de adicionar 1)
        var mes = formatarNumero(dataAtual.getMonth() + 1);
    
        // Obtém o valor do dia
        var dia = formatarNumero(dataAtual.getDate());
      
        var hora = formatarNumero(dataAtual.getHours());
        
        // Obtém o valor dos minutos

        var minutos = formatarNumero(dataAtual.getMinutes());


        var currentTime = parseInt(`${hora}:${minutos}`); 
        var currDate = `${ano}-${mes}-${dia}`
        
        if(!verifyToday){
            todayTru = `${ano}-${mes}-${dia}`;
            verifyToday = true;
        }
 
        dataAtual.setDate(dataAtual.getDate() - diasParaDiminuir);

    
             verifyFirtsTime = false;

             for(let k = 0; k < myTasks.length; k++){
                
             if(myTasks[k].userName == nome && myTasks[k].date == currDate){     
                      
                var dataAt = new Date();

                // Array para armazenar as notificações das tarefas concluídas
                var notificacoesConcluidas = [];
                // Array para armazenar as notificações das tarefas em progresso
                var notificacoesProgresso = [];
                // Array para armazenar as notificações das tarefas a serem feitas
                var notificacoesToDo = [];

                // Loop pelas tarefas
                
                var task = myTasks[k];

                if (task.state === 'completed') {
                    // Código para tarefas concluídas (mesmo código do exemplo anterior)
                    var dataConclusao = new Date(task.date + ' ' + task.end_time);
                    var diferencaMilissegundos = dataAt - dataConclusao;
                    var diferencaMinutos = Math.floor(diferencaMilissegundos / (1000 * 60));
                    var notificacao = {
                    diferencaMinutos: diferencaMinutos,
                    titulo: task.title
                    };
                    notificacoesConcluidas.push(notificacao);
                } else if (task.state === 'progress') {
                    // Código para tarefas em progresso (mesmo código do exemplo anterior)
                    var dataInicio = new Date(task.date + ' ' + task.start_time);
                    var diferencaMilissegundos = dataAt - dataInicio;
                    var diferencaMinutos = Math.floor(diferencaMilissegundos / (1000 * 60));
                    var notificacao = {
                    diferencaMinutos: diferencaMinutos,
                    titulo: task.title
                    };
                    notificacoesProgresso.push(notificacao);
                } else if (task.state === 'todo') {
                    // Código para tarefas a serem feitas
                    var dataInicio = new Date(task.date + ' ' + task.start_time);
                    var diferencaMilissegundos = dataInicio - dataAt;
                    var diferencaMinutos = Math.floor(diferencaMilissegundos / (1000 * 60));

                    // Verifica se a tarefa vai começar em 5 minutos
                    if (diferencaMinutos <= 5) {
                    var notificacao = {
                        diferencaMinutos: diferencaMinutos,
                        titulo: task.title
                    };
                    notificacoesToDo.push(notificacao);
                    }
                }
                

                // Ordena as notificações das tarefas concluídas com base na diferença de tempo em ordem decrescente
                notificacoesConcluidas.sort(function(a, b) {
                return b.diferencaMinutos - a.diferencaMinutos;
                });

                // Ordena as notificações das tarefas em progresso com base na diferença de tempo em ordem decrescente
                notificacoesProgresso.sort(function(a, b) {
                return b.diferencaMinutos - a.diferencaMinutos;
                });

                // Exibe as notificações das tarefas concluídas na ordem desejada
                for (var n = 0; n < notificacoesConcluidas.length; n++) {
                var notificacao = notificacoesConcluidas[n];
              
                var mensagemCompleted = '';

                if (notificacao.diferencaMinutos > 0) {
                    var dias = Math.floor(notificacao.diferencaMinutos / (24 * 60));
                    var horas = Math.floor((notificacao.diferencaMinutos % (24 * 60)) / 60);
                    var minutos = notificacao.diferencaMinutos % 60;

                    if (dias > 0) {
                    mensagemCompleted += dias + (dias === 1 ? ' day ' : ' days ');
                    } 

                    mensagemCompleted += horas + 'h ' + minutos + 'min ago';

                    if(!verifyFirtsTime){
                        verifyFirtsTime = true;
                       
                        
                        if(myTasks[k].date == todayTru && !verify){
                            container.innerHTML += "<p class='day-notification'>Today</p><div class='box first'><span class='category-task font-pop text-color-purple'>" + mensagemCompleted + 
                            "</span> <p class='text-grid font-pop text-color-purple'>Congrats, your <b>"+ myTasks[k].title +"</b> class is now completed."
                            "</p>" 

                            qtyBox++;

             
                         
                               // today = currDate;
                                verify = true;
                            
                        }else if(myTasks[k].date == Ontem){
                         
                            container.innerHTML += "<p class='day-notification'>Yesterday</p><div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemCompleted + 
                            "</span> <p class='text-grid font-pop text-color-purple'>Congrats, your <b>"+ myTasks[k].title +"</b> class is now completed."
                            "</p>" 
                            qtyBox++;   
                        } else {
                     
                            container.innerHTML += "<p class='day-notification'>"+ currDate +"</p><div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemCompleted + 
                            "</span> <p class='text-grid font-pop text-color-purple'>Congrats, your <b>"+ myTasks[k].title +"</b> class is now completed."
                            "</p>" 
                            qtyBox++;   
                        } 
                        
                      
                    } else{   
                        container.innerHTML += "<div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemCompleted + 
                        "</span> <p class='text-grid font-pop text-color-purple'>Congrats, your <b>"+ myTasks[k].title +"</b> class is now completed."
                        "</p>" 
                        qtyBox++;   
                    }
                }

                // Exibe a notificação das tarefas concluídas
         
                }

                // Exibe as notificações das tarefas em progresso na ordem desejada
                for (var n = 0; n < notificacoesProgresso.length; n++) {
                var notificacao = notificacoesProgresso[n];
            
                var mensagemProgress = '';

                if (notificacao.diferencaMinutos > 0) {
                    var dias = Math.floor(notificacao.diferencaMinutos / (24 * 60));
                    var horas = Math.floor((notificacao.diferencaMinutos % (24 * 60)) / 60);
                    var minutos = notificacao.diferencaMinutos % 60;

                    if (dias > 0) {
                    mensagemProgress += dias + (dias === 1 ? ' day ' : ' days ');
                    } 

                    mensagemProgress += horas + 'h ' + minutos + 'min ago';

                    if(!verifyFirtsTime){
                        verifyFirtsTime = true;
                   
                        
                        if(myTasks[k].date == todayTru && !verify){
                            container.innerHTML += "<p class='day-notification'>Today</p><div class='box first'><span class='category-task font-pop text-color-purple'>" + mensagemProgress + 
                            "</span> <p class='text-grid font-pop text-color-purple'>Your <b>"+ myTasks[k].title +"</b> is still in progress. Do you want to complete it? </p>" 
                            qtyBox++;   
                          
                               // today = currDate;
                                verify = true;
                            
                        }else if(myTasks[k].date == Ontem){
                        
                            container.innerHTML += "<p class='day-notification'>Yesterday</p><div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemProgress + 
                            "</span> <p class='text-grid font-pop text-color-purple'>Your <b>"+ myTasks[k].title +"</b> is still in progress. Do you want to complete it? </p>" 
                            qtyBox++;   
                        } else {
                      
                            container.innerHTML += "<p class='day-notification'>"+ currDate +"</p><div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemProgress + 
                            "</span> <p class='text-grid font-pop text-color-purple'>Your <b>"+ myTasks[k].title +"</b> is still in progress. Do you want to complete it? </p>" 
                            qtyBox++;   
                        } 
                        
                      
                    } else{   
                        container.innerHTML += "<div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemProgress + 
                        "</span> <p class='text-grid font-pop text-color-purple'>Your <b>"+ myTasks[k].title +"</b> is still in progress. Do you want to complete it? </p>" 
                        qtyBox++;   
                    }
                }

             
             
                }

                // Exibe as notificações das tarefas a serem feitas
                for (var n = 0; n < notificacoesToDo.length; n++) {
                var notificacao = notificacoesToDo[n];
                
                var mensagemTodo = 'Task will start in 5 minutes';

                if(!verifyFirtsTime){
                    verifyFirtsTime = true;
       
                    
                    if(myTasks[k].date == todayTru && !verify){
                        container.innerHTML += "<p class='day-notification'>Today</p><div class='box first'><span class='category-task font-pop text-color-purple'>" + mensagemTodo + 
                        "</span> <p class='text-grid font-pop text-color-purple'>"+  user +", your <b>"+ myTasks[k].title +"</b> should start right now."
                        "</p>" 
                        qtyBox++;   
         
                    
                            verify = true;
                        
                    }else if(myTasks[k].date == Ontem){
                 
                        container.innerHTML += "<p class='day-notification'>Yesterday</p><div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemTodo + 
                        "</span> <p class='text-grid font-pop text-color-purple'>"+  user +", your <b>"+ myTasks[k].title +"</b> should start right now."
                        "</p>" 
                        qtyBox++;   
                    } else {
                   
                        container.innerHTML += "<p class='day-notification'>"+ currDate +"</p><div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemTodo + 
                        "</span> <p class='text-grid font-pop text-color-purple'>"+  user +", your <b>"+ myTasks[k].title +"</b> should start right now."
                        "</p>"  
                        qtyBox++;   
                    } 
                    
                  
                } else{   
                    container.innerHTML += "<div class='box'><span class='category-task font-pop text-color-purple'>" + mensagemTodo + 
                        "</span> <p class='text-grid font-pop text-color-purple'>"+  user +", your <b>"+ myTasks[k].title +"</b> should start right now."
                        "</p>" 
                    qtyBox++;   
                }

        
                }
               
             
                
            }

           
        } 


        if(qtyBox > 4){
            footer.setAttribute("style", "position: sticky;")
           } else{
            footer.setAttribute("style", "position: absolute;")
           }
    

    }
}

}


function formatarNumero(valor) {
    return valor < 10 ? `0${valor}` : valor;
}

function qtyZero(){
    qtyBox = 0; 
}



    
    
   