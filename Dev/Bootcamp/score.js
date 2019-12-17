let p1Button = document.getElementById("p1");
let p2Button = document.querySelector("#p2");
let p3Button = document.querySelector("#p3");
let resetButton = document.getElementById("reset");
let p1Display = document.querySelector("#p1Display");
let numInput = document.querySelector("#input");
let p = document.querySelector("#p");
let p1Score = 0;
let p2Score = 0;
let p2Display = document.querySelector("#p2Display");
let gameOver = false;
let winningScore = 5;

console.log("connected");

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
        gameOver = true;
        p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
        gameOver = true;
        p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener ("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = "0";
    p2Display.textContent = "0";
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
});

numInput.addEventListener("change", function(){
    winningScore = Number(input.value);
    p.textContent = input.value

});