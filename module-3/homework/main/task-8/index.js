const usersAge = parseInt(prompt("Введите Ваш возраст:"));
const leftNeighboursAge = parseInt(prompt("Введите возраст вашего соседа слева:"));

if (leftNeighboursAge > 12) {
    const sum = usersAge + leftNeighboursAge;
    console.log(`Сумма Вашего возраста и возраста соседа слева: ${sum}`)
}