let life3 = document.getElementById("life3");
let lifeValue3 = parseInt(life3.innerText);

function updateLife(value){
    if(value === "-"){
        lifeValue3 -= 1;
        life3.innerText = lifeValue3;
    } else {
        lifeValue3 += 1;
        life3.innerText = lifeValue3;
    }
}

function resetGame(value){
    lifeValue3 = 40;
    life3.innerText = lifeValue3;

}