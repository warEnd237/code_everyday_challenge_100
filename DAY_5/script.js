const mask = document.querySelector('.mask');
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
    
    mask.classList.add('active');

    setInterval(() => {

        if(i <= 100){

            mask.innerText = i + "%";
                
            console.log(i);

            i++

            }
            
        }, 90)
    
})