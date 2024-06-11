const searching = document.getElementById('searching');

const space = document.getElementById('space');

searching.addEventListener('click', () => {
    if(space.style.display === 'none'){
        space.style.display = 'inline-block';
    } else{
        space.style.display = 'none';
    }
})