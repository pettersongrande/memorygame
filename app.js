// MY VERSION OF THE JAVASCRIPT MEMORYGAME APP

const startBtn = document.querySelector(".startbutton");
const scrollUpBtn = document.querySelector(".scrlUp");
const gameContainer = document.getElementById("game");



//ARRAY with memes links -----------------------------------------------------------------
const MEMES = [
"memeGameimgs/blogueirinha.gif",
"memeGameimgs/blogueirinha.gif",
"memeGameimgs/Cuca05.gif",
"memeGameimgs/Cuca05.gif",
"memeGameimgs/Gretchen01.gif",
"memeGameimgs/Gretchen01.gif",
"memeGameimgs/Gretchen02.gif",
"memeGameimgs/Gretchen02.gif",
"memeGameimgs/Ines01.gif",
"memeGameimgs/Ines01.gif",
"memeGameimgs/Ines02.gif",
"memeGameimgs/Ines02.gif",
// "memeGameimgs/Ines03.gif",
// "memeGameimgs/Ines03.gif",
"memeGameimgs/pabllovittar06.gif",
"memeGameimgs/pabllovittar06.gif",
];


//START BUTTON -----------------------------------------------------------------------
startBtn.addEventListener("click", function(){
    gameContainer.scrollIntoView({
        behavior: "smooth",
    })
    // window.scrollTo();
    // top: 950,
    // left: 0,
    // behavior: "smooth",
    // });
});


//SCROLL UP BUTTON -----------------------------------------------------------------------
scrollUpBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


//Function to shuffle the array ----------------------------------------------------------

function shuffle(array) {

    let counter = array.length;
    while(counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter --;

        let temp = array [counter];
        array[counter] = array [index];
        array[index] = temp;
    }

    return array;

};

let shuffledMemes = shuffle(MEMES);
console.log(shuffledMemes)



// FUNCTION to DISPLAY new array of memes, creating new elements into the page "newCard", "front", back, this function also creates an event listener for a click for each card;



function createDivsForMemes(memesArray) {
    for (let i = 0; i < memesArray.length; i++){

        
    // for (let meme of memesArray) {

        
        const stopWatch = document.createElement("div");
            
        const newCard = document.createElement("div");
            newCard.classList.add("cardModel");
            newCard.addEventListener("click", handleCardClick);
            newCard.dataset.imageName = memesArray[i];
            gameContainer.append(newCard);

        const frontCard = document.createElement("div");
            frontCard.classList.add("front");
            newCard.append(frontCard);

        const backCard =  document.createElement("div");
            backCard.classList.add("back");
            backCard.style.backgroundImage = `url(${memesArray[i]})`;
            newCard.append(backCard);

            
    }
};


// FLIPPING CARD FUNCTION //

function flipCard(event) {
    event.target.parentNode.classList.toggle("flipCard")

    console.log(event)
};



// THIS FUNCTION CHECKS CARDS THAT ARE BEING CLICKED FOR RESULTS

function checkMatch (img1, img2){



    if (img1 === img2) {

    


    }



}
   


// TODO: Implement this function!

function handleCardClick(event) {

    flipCard(event)
    checkMatch(event.target.parentNode.dataset.imageName)
    console.log("you just clicked", event.target);
  }

createDivsForMemes(shuffledMemes);


