let a = Number(prompt("a"));
let b = Number(prompt("b"));

equal(a, b);

function equal(a, b) {
    if (a == b) {
        alert("Равны");
    } else {
        alert("Не равны");
    }
}
