const game = document.getElementById('gameBoard');
const allDivs = [];

// Stored Images
const imgs = [
    'url(imgs/pablloVittar1.gif)',
    'url(imgs/blogueirinha1.gif)',
    'url(imgs/grethcen1.gif)',
    'url(imgs/inesBrasil1.gif)',
    'url(imgs/nazare1.gif)',
    'url(imgs/tula1.gif)'
];
const [pabllo, blogueirinha, gretchen, inesBrasil, nazare, tula] = imgs;


renderGameBoard(game);

// const allLinks = getLinks(imgs);

// Event Listener ---------------------------------
game.addEventListener('dblclick', (e)=>{
    e.preventDefault();
    if(e.target.tagName === 'DIV'){
        // e.target.style.backgroundImage = linkintheattribute;
        e.target.classList.toggle('selectedCard'); 
        
    };

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
//Parameter 2 : array with img links.
function renderGameBoard(displayArea){
    displayArea.innerHTML = '';
    
    for(let i = 0; i <=11; i++){
        const div = divFactory();
        div.innerHTML = 'CARD' + ' ' + i;       
        div.dataset.idx = allDivs.length;
        div.dataset.src = imgs[i > 5 ? i - imgs.length : i];
        
        displayArea.append(div)
    };

};