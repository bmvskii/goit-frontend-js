const cafe = {
    name: "Republic",
    width:200,
    height: 300,
    personal:5,
    hr: true
};

const entries = Object.entries(cafe);

for (entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log("Ключ:", key);
    console.log("Значение:", value);
}

const { width, height } = cafe;
const square = width * height;

console.log("Площадь:", square);