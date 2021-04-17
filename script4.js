// debugger

let color;

document.getElementById("btn").addEventListener("click", changeName);
function changeName () {
    let name = document.getElementById("newName").value;

    document.getElementById("myName").innerText = name;
}

let clrBtn = document.getElementById("clrBtn");
clrBtn.addEventListener("click", changeColor)
function changeColor () {
    let form = document.getElementById("mainForm");

    if (form.style.backgroundColor != clrBtn.style.backgroundColor) {
        form.style.backgroundColor = clrBtn.style.backgroundColor;
    } else {
        let color = generateColor();
        clrBtn.style.backgroundColor = color;
        form.style.backgroundColor = color;
    }
        
}

clrBtn.addEventListener("mouseover", selectColor);
function selectColor () {
    clrBtn.style.backgroundColor = generateColor();
}

document.getElementById("newName").addEventListener("mouseover", changeBoxColorIn);
function changeBoxColorIn () {
    let div = document.getElementById("newName");

    div.style.backgroundColor = "#7ADFC8";
}

document.getElementById("newName").addEventListener("mouseleave", changeBoxColorOut);
function changeBoxColorOut () {
    let div = document.getElementById("newName");

    div.style.backgroundColor = "thistle";
}

function generateColor () {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}