var numberOfButtons  = document.querySelectorAll(".drum").length;
var i = 0;
while(i < numberOfButtons){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml= this.innerHTML;
        document.querySelector("." + buttonInnerHtml).classList.add("pressed");
    playsound(buttonInnerHtml);  
    setTimeout(function() {
        document.querySelector("." + buttonInnerHtml).classList.remove("pressed");
    }, 100);
})
i++;
}
function playsound(key){
    if (key == "w"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if (key == "a"){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();     
    }
    else if (key == "s"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();     
    }else if (key == "d"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();     
    }else if (key == "j"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();     
    }else if (key == "k"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();     
    }else if (key == "l"){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();     
    }
}
document.addEventListener("keypress",function(event){
    document.querySelector("." + event.key).classList.add("pressed"); 
    setTimeout(function() {
        document.querySelector("." + event.key).classList.remove("pressed");
    }, 100);  
  playsound(event.key);
});