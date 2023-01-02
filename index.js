//mouse click listener
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){    
    document.querySelectorAll("button")[i].addEventListener("click", buttonClicked);
}
function buttonClicked(){                     //named function called here --^
    var buttonInnerHtml = this.innerHTML;
    keypressed(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
}


//key press listener
document.addEventListener("keydown",function(e){    //anonymous function, declared right away
    keypressed(e.key);
    addAnimation(e.key);
});

function keypressed(key){
    switch(key){
        case "w": var crash = new Audio("sounds/crash.mp3");
                  crash.play();
                  break;
        case "a": var tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                  break;
        case "s": var tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
                  break;
        case "d": var tom3 = new Audio("sounds/tom-3.mp3");
                  tom3.play();
                  break;
        case "j": var tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                  break;
        case "k": var kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                  break;
        case "l": var snare = new Audio("sounds/snare.mp3");
                  snare.play();
                  break;
        default: console.log(buttonInnerHtml);
    }
}


//Animation in buttons
function addAnimation(ev){
    var buttonActive = document.querySelector("."+ev);
    buttonActive.classList.add("pressed");
    setTimeout(function(){
        buttonActive.classList.remove("pressed");
    },100);
}

//touch listener
document.addEventListener("touchstart",function(e){
    keypressed(e.touches);
    addAnimation(e.touches);
},false);
