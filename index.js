// Your code here
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
//1 write function to move dodger
//2 add variables to grab dodger style left and increment +1
//3 test to see if right key is being pressed, and do not let it go past 360px on the right
function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(rightNumbers,10);

    if (left < 360){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
  });