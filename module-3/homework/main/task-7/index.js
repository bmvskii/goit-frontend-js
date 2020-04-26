const randomNumber = Math.round(Math.random() * (5 - 1) + 1);

// If-else вариант
if (randomNumber === 1) {
    console.log("Система загадала число 1");
} else if (randomNumber === 2) {
    console.log("Система загадала число 2");
} else if (randomNumber === 3) {
    console.log("Система загадала число 3");
} else if (randomNumber === 4) {
    console.log("Система загадала число 4");
} else if (randomNumber === 5) {
    console.log("Система загадала число 5");
} else {
    console.log("Cбой системы.");
}

// Switch-case вариант
switch (randomNumber) {
    case 1:
        console.log("Система загадала число 1");
        break;
    case 2:
        console.log("Система загадала число 2");
        break;
    case 3:
        console.log("Система загадала число 3");
        break;
    case 4:
        console.log("Система загадала число 4");
        break;
    case 5:
        console.log("Система загадала число 5");
        break;
    default:
        console.log("Cбой системы.");
        break;
}