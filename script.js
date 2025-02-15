let life3 = document.getElementById("life3");
let lifeValue3 = parseInt(life3.innerText);
let poison3 = document.getElementById("poison3");
let poisonValue3 = parseInt(poison3.innerText);
let energy3 = document.getElementById("energy3");
let energyValue3 = parseInt(energy3.innerText);
let random3 = document.getElementById("random3");
let randomValue3 = parseInt(random3.innerText);

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
    poisonValue3 = 0;
    poison3.innerText = poisonValue3;
    energyValue3 = 0;
    energy3.innerText = energyValue3;
    randomValue3 = 0;
    random3.innerText = randomValue3;
}

function addPoison(){
    poisonValue3 += 1;
    poison3.innerText = poisonValue3;
}
function addEnergy(){
    energyValue3 += 1;
    energy3.innerText = energyValue3;
}
function addRandom(){
    randomValue3 += 1;
    random3.innerText = randomValue3;
}

document.getElementById("-").addEventListener("click", function(){updateLife('-')});
document.getElementById("+").addEventListener("click", function(){updateLife('+')});
document.getElementById("poison3button").addEventListener("click", function(){addPoison()});
document.getElementById("energy3button").addEventListener("click", function(){addEnergy()});
document.getElementById("random3button").addEventListener("click", function(){addRandom()});