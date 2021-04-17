age = prompt("Введите ваш возраст");

while (!confirm(`Вы уверены, что вам ${age}?`)) {
    age = prompt("Введите ваш возраст");
}