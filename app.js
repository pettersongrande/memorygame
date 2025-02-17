const game = document.getElementById('gameBoard');
// const allCards = document.querySelectorAll('.card');


game.addEventListener('dblclick', (e)=>{
    e.preventDefault();
    if(e.target.tagName === 'DIV'){
        console.log('This is a card');
        e.target.classList.toggle('selectedCard');
    };

});