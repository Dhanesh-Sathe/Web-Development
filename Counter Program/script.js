let counter = 0;

document.getElementById("myDecrease").onclick = function(){
    document.getElementById("count").textContent = --counter;
}

document.getElementById("myIncrease").onclick = function(){
    document.getElementById("count").textContent = ++counter;
}

document.getElementById("myReset").onclick = function(){
    document.getElementById("count").textContent = 0;
    counter = 0;
}