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
game.addEventListener('click', (e)=>{
    e.preventDefault();
    // cardInteraction();
    if(e.target.tagName === 'DIV'){
        e.target.classList.toggle('selectedCard'); 
        
        if(e.target.classList.contains('selectedCard')){
            e.target.style.backgroundImage = e.target.dataset.src;
            const source = e.target.dataset.src;
            const sourceArray  = [];
            sourceArray.push(source);
            console.log(sourceArray);
            
            // closeUnmatched();
            setTimeout(()=>{
                e.target.style.backgroundImage = '';
            }, 3000);
        }

        else {
            e.target.style.backgroundImage = '';
        };
    }; 

});

// TESTS
// ARE THESE CARDS THE SAME?
// function cardChecker(){
//     if(e.target.dataset.src === ){};
// }

// setTimeOut ***NOT WORKING***
function closeUnmatched(){
    setTimeout(()=>{
        e.target.style.backgroundImage = '';
    }, 3000);
};

// TESTE

// CARD INTERACTION  ****NOT WORKING****
function cardInteraction(){
    if(e.target.tagName === 'DIV'){
        e.target.classList.toggle('selectedCard'); 
        
        if(e.target.classList.contains('selectedCard')){
            e.target.style.backgroundImage = e.target.dataset.src;
            
        }

        else {
            e.target.style.backgroundImage = '';
        };
    }; 
};

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
    const shuffled = shuffle(imgs);

    for(let i = 0; i <=11; i++){
        const div = divFactory();
        div.innerHTML = 'CARD' + ' ' + i;       
        div.dataset.idx = allDivs.length;
        div.dataset.src = shuffled[i];        
        displayArea.append(div);
        
    };

    

};

// SHUFFLE
function shuffle(array){
    const arr = [...array, ...array];

    let i = arr.length, j, temp;
    while (--i > 0){
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    
    return arr;
};

// const newImgs = shuffle(imgs);