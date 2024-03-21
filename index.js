const p1 = document.querySelectorAll("img")[0];
const p2 = document.querySelectorAll("img")[1];
const h1 = document.querySelector("h1");


function rolling(){
    const num1 = Math.floor(Math.random()*6) + 1;
    const num2 = Math.floor(Math.random()*6) + 1;
    p1.src = `dice${num1}.png`;
    p2.src = `dice${num2}.png`;
    if(num1>num2){
        h1.textContent = "P1 wins!";
    }
    else if(num1<num2){
        h1.textContent = "P2 wins!";
    }
    else{
        h1.textContent = "Tie!"
    }
}

rolling();