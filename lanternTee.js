

let count = 1;

function updateCounter(){
    document.getElementById("counter").textContent = count;
}
function increasebtn(){
    if (count < 3 ){
    count++;
    updateCounter();
}
}

function decreasebtn(){
    if (count > 1){
        count--;
        updateCounter();
    }
}