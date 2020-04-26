do {
    const name = prompt("Введите имя любимого героя");
    if (name.length < 6) {
        alert(name);
    }
} while (name.length < 6);