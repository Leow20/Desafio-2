var pageCache = '';

if (!localStorage.pageCache){             
    localStorage.pageCache = JSON.stringify(pageCache);
 }

 if (localStorage.pageCache){             
    pageCache = JSON.parse(localStorage.getItem('pageCache')); 
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


