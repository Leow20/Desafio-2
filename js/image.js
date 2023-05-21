// if (localStorage.meuArr){             
//     arr = JSON.parse(localStorage.getItem('meuArr')); 
// }

// const inputFile = document.querySelector('#profile-picture');
// const pictureImage = document.querySelector('.picture_image');


// var imagem = document.getElementById('profile-picture');
// var caminhoCompleto = imagem;


// inputFile.addEventListener('change', function(e){
//     const inputTarget = e.target;
//     const file = inputTarget.files[0];
  

//     if(file){
//         const reader = new FileReader();
//         console.log(reader)
//         reader.addEventListener('load', function(e){
//             const readerTarget = e.target;

//             const img = document.createElement('img');
//             img.src = readerTarget.result;
            

//             img.classList.add('picture_image');
//             console.log(readerTarget.result)
//             pictureImage.innerHTML = "";
//             pictureImage.appendChild(img);
            
//         })

//             localStorage.meuArr = JSON.stringify(arr);
        
//         reader.readAsDataURL(file); // picture SRC aqui 

//     } else{
//         pictureImage
//     }
    
// })
