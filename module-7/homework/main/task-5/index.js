const myInfo = {
    name: "Eugene",
    age: 22,
    gender: "male",
    married: false,
};

const entries = Object.entries(myInfo);

let str = '';
for (key in myInfo) {
    const value = myInfo[key];
    str += value;

    console.log("Ключ:", key);
    console.log("Значение:",value);
}

console.log("Все значение:", str);

