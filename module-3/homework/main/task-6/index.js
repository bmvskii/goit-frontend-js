const name = prompt("Введите свое имя");
const surname = prompt("Введите свою фамилию");

if (name.length > 4 && surname.length > 5) {
    const sum = name.length + surname.length;
    console.log(`Сумма длины имени и фамилии: ${sum}`);
} else {
    console.log("УПС");
}