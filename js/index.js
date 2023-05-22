var pageCache = '';

if (!localStorage.pageCache){             
    localStorage.pageCache = JSON.stringify(pageCache);
 }

 if (localStorage.pageCache){             
    pageCache = JSON.parse(localStorage.getItem('pageCache')); 
}

if (!localStorage.meuArr){             
    localStorage.meuArr = JSON.stringify(arr);
 }

 if (localStorage.myTasks){             
    myTasks = JSON.parse(localStorage.getItem('myTasks')); 
}

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

function linkPages(url){
    window.location.href = url
}

function cachePage(url){
    pageCache = url;
    localStorage.pageCache = JSON.stringify(pageCache);
}

function pageReturn(){
    window.location.href = pageCache;
}

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}


