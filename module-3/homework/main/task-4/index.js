const MaxAge = 55;

if (age >= 0 && age <= 16) {
    console.log("Макс - ребенок");
} else if (age >= 17 && age <= 60) {
    console.log("Макс - взрослый");
} else if (age >= 61 && age <= 100) {
    console.log("Макс - пенсионер");
}