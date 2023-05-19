if (localStorage.meuArr){             
    arr = JSON.parse(localStorage.getItem('meuArr')); 
}

const inputFile = document.querySelector('#profile-picture');
const pictureImage = document.querySelector('.picture_image');

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture_image');

            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
        })

        reader.readAsDataURL(file); // picture SRC aqui 
    } else{
        pictureImage
    }
})

// function srcImg(){

//     console.log(arr);

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].userLogged === true){
//             var imgProfile = arr.picture;
//         } 
//     }
// }

// srcImg()