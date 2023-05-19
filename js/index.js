function linkPages(url) {
    window.location.href = url;
}

if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}
