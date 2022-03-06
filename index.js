for (var i=0;i<document.getElementsByClassName("drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


function handleClick(){

    playSound(this.innerHTML);
    playAnimation(this.innerHTML);

    }

    // console.log(this.innerHTML);
    // this.style.color='white';
    // if (this.innerHTML==='w'){        
    //     var audio=new Audio("sounds/tom-1.mp3");
    //     audio.play();
    // }
    // else if (this.innerHTML==='s'){        
    //     var audio=new Audio("sounds/tom-2.mp3");
    //     audio.play();
    // }   
    // else if (this.innerHTML==='a'){        
    //     var audio=new Audio("sounds/tom-3.mp3");
    //     audio.play();
    // }   
    // else if (this.innerHTML==='d'){        
    //     var audio=new Audio("sounds/tom-4.mp3");
    //     audio.play();
    // }   
    // else if (this.innerHTML==='j'){        
    //     var audio=new Audio("sounds/snare.mp3");
    //     audio.play();
    // }   
    // else if (this.innerHTML==='k'){        
    //     var audio=new Audio("sounds/crash.mp3");
    //     audio.play();
    // }   
    // else if (this.innerHTML==='l'){        
    //     var audio=new Audio("sounds/kick-bass.mp3");
    //     audio.play();
    // }   


document.addEventListener("keydown",function (event){
    playSound(event.key);
    playAnimation(event.key);
});


function playSound(char){
    switch (char){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "s":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "a":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:console.log();
    }
}


function playAnimation(char){
    var activeButton=document.querySelector("."+char); 
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
