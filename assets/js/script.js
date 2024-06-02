
let inputText = document.querySelector('.form-control')
let inputBtn = document.querySelector('#search-button')
let imgWrapper = document.querySelector('.img-wrapper')

inputBtn.addEventListener('click', ()=>{

    fetch(`https://api.pexels.com/v1/search?query=${inputText.value}`,{
        method:'GET',
        headers:{
            'authorization':'5D9S0uH0jjf5G119YdgBNrTQGh4oCzoutC65guyTfVAoIRDZbHGQiMuu',
            'content-type':'application/json'
        }
    }).then((response)=>{
        response.json().then((content) => {
            console.log(content)
            imgWrapper.innerHTML = ''
            content.photos.forEach(photo => {
                console.log(photo)
                let src = photo.src.landscape
                
                
                imgWrapper.innerHTML += `<div class="col-4"><img src="${src}" class="img-fluid w-100"></div>`
                inputText.value = ''
            });
        })
    })
})

