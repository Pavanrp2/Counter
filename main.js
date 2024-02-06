// initial count
let count = 0;

function updateDisplay(){
   const countDisplay = document.getElementById('count');
   countDisplay.textContent = count;

    if (count>0){
        countDisplay.style.color = "green";
    } else  if(count<0){
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "#222";
    }

}

function decrease(){
    count--;
    updateDisplay();
}

function increase(){
    count++;
    updateDisplay();
}

function reset(){
    count = 0;
    updateDisplay();
}