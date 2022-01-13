const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Adding Event Listener



closedFace.addEventListener('click',()=>{
    // It will check which element has the active option.
    // Then it will remove/add the active word from the class name.
    //My Own Logic
    
    if(!openFace.classList.contains('active')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click',()=>{
    if(!closedFace.classList.contains('active')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});