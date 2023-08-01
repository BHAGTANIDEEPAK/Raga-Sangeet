var  numberOfDrumsButton = document.querySelectorAll(".drum").length;
var i = 0;

while(i<numberOfDrumsButton){

document.querySelectorAll("button")[i].addEventListener("click",handleClick);
i++;

}

function handleClick(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    


}

// document.addEventListener("keydown",function(event){
//     makeSound(event.key);
//     buttonAnimation(event.key);

// })


function makeSound(Key){
    switch(Key){
        case 'सा':
            var tom1 = new Audio('sounds/sa.mp3');
            setTimeout(function(){
                tom1.play();
            },100);
            
        break;

        case 'रे':
            var tom2 = new Audio('sounds/ree.mp3');
            setTimeout(function(){
                tom2.play();
            },100);
        break;

        case 'गा':
            var tom3 = new Audio('sounds/gaa.mp3');
            setTimeout(function(){
                tom3.play();
            },100);
        break;
        case 'मा':
            var tom4 = new Audio('sounds/maa.mp3');
            setTimeout(function(){
                tom4.play();
            },100);

        break;
        case 'पा':
            var snare = new Audio('sounds/paa.mp3');
            setTimeout(function(){
                snare.play();
            },100);

        break;
        case 'धा':
            var crash = new Audio('sounds/dha.mp3');
            setTimeout(function(){
                crash.play();
            },100);

        break;
        case 'नी':
            var kick = new Audio('sounds/ni.mp3');
            setTimeout(function(){
                kick.play();
            },100);

        break;

        default:console.log(this.innerHTML);

        
            
    }


}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
var i = 0;
var txt = 'Raga🎵Sangeet';
var speed = 100;

function typewriter(){
    if(i<txt.length){
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter,speed);
        }
}
typewriter();
