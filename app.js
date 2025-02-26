const game = document.getElementById('gameBoard');
const allDivs = [];

// Stored Images
const imgs = [
    'url(imgs/pablloVittar1.gif)',
    'url(imgs/blogueirinha1.gif)',
    'url(imgs/gretchen1.gif)',
    'url(imgs/inesBrasil1.gif)',
    'url(imgs/nazare1.gif)',
    'url(imgs/tula1.gif)',

];

renderGameBoard(game, imgs);

// Event Listener ---------------------------------
game.addEventListener('dblclick', (e)=>{
    e.preventDefault();
    if(e.target.tagName === 'DIV'){
        e.target.style.backgroundImage = e.target.dataset.src;
        e.target.classList.toggle('selectedCard'); 
        
    }

});

//DIV FACTORY: create a single DIV;
function divFactory(){
    const newDiv = document.createElement('DIV');
        newDiv.classList.add('card');
        allDivs.push(newDiv);
        
    return newDiv; 
    
};

//RENDER PAGE WITH NEW DIVS
//Parameter 1 : area to append elements.
function renderGameBoard(displayArea, arrOfImgs){
    displayArea.innerHTML = '';
    shuffle(imgs);

    for(let i = 0; i <=11; i++){
        const div = divFactory();
        div.innerHTML = 'CARD' + ' ' + i;       
        div.dataset.idx = allDivs.length;
        div.dataset.src = imgs[i > 5 ? i - arrOfImgs.length : i];
        
        displayArea.append(div)
        
    };

    

};

// SHUFFLE
function shuffle(arr){
    let i = arr.length, j, temp;
    while (--i > 0){
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    
}

// const newImgs = shuffle(imgs);