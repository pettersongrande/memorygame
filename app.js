const game = document.getElementById('gameBoard');
// const allCards = document.querySelectorAll('.card');

// Stored Images
const allImgs = {
    pabllo          : 'url(imgs/pablloVittar1.gif)',
    blogueirinha    : 'url(imgs/blogueirinha1.gif)',
    gretchen        : 'url(imgs/grethcen1.gif)',
    inesBrasil      : 'url(imgs/inesBrasil1.gif)',
    nazare          : 'url(imgs/nazare1.gif)',
    tula            : 'url(imgs/tula1.gif)'
};

const {pabblo, blogueirinha, gretchen, inesBrasil, nazare, tula} = allImgs;


game.addEventListener('dblclick', (e)=>{
    e.preventDefault();
    if(e.target.tagName === 'DIV'){
        console.log('This is a card');
        e.target.classList.toggle('selectedCard'); 
        
    };

});

// StoreImages
