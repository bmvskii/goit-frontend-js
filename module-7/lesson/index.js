// @@@@@@@@@@@@ ОБЪЕКТЫ @@@@@@@@@@@@@@

// ---- Создание объекта
// const emptyObject = {};
//
// console.log(emptyObject);

// const object = {
//     key: "value",
//     key2: 113213,
//     key3: true,
//     key4: ["Fruit", "Vegetable"],
//     key5: function() {
//         console.log("Hello world!");
//     },
//     key6: {
//         key7: "Hello!",
//         key10: () => console.log("Opps"),
//     },
//     key8: () => console.log("Updated version"),
// };

// ---- Обращение к свойствам объекта
// object.key5();
// object.key6.key10();

// console.log(object["key"]);

// console.log(object['key']);

// ---- Изменение значения свойства
// console.log("BEFORE:", object.key2);

// object.key2 = 10;
// object['key2'] = 10;

// console.log("AFTER:", object.key2);

// ---- Добавление нового свойства
// object.numbers = [1,2,3,4,5,6];
// console.log(object.numbers);

// ---- Удаление свойства объекта
// delete object.key5;
// delete object.key6;
// delete object.key8;
//
// console.log("AFTER:", object);

// ---- Отсутствующие свойства
// ** Возвращает undefined
// console.log(object.key1000);

// ---- Короткие свойства
// const isLessonsDone = "Alexey";
// const averageBallOfSecondSemester = 10;

// ***** Неправильно!
// const studentC = {
//     name: name,
//     average: average,
//     capacity: 100,
// }

// console.log(studentC);
// ***** Правильно

// const studentD = {
//     averageBallOfSecondSemester,
//     isLessonsDone,
//     capacity: 100,
// };
//
// console.log(studentD);

// ---- Вычисляемые свойства
// **** Раньше
// const key = 'myname';
// const key1 = "name";
// const key2 = "fullname";
//
// const object = {};
//
// object.numbers = [123123, 12312, 21312];
//
// object[key] = 'Alexey';
// object[key1] = 'Roma';
// object[key2] = 'Zhora';
//
// console.log(object);
//
// const getKey = function() {
//     return prompt('Введите ключ объекта:');
// };
//
// object[getKey()] = "Object value";
//
// console.log(object);

// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

// ---- Методы

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//     // Так метод объявлялся в ES5
//     greetInES5: function() {
//         console.log('Welcome ES5!');
//     },
//     // Так метод объявляется в ES6
//     greetInES6() {
//         console.log('Welcome ES6!');
//     },
// };
//
// hotel.greetInES5();
// hotel.greetInES6();

// ---- Доступ к this

const bucketWithGoods1 = {
  goods: [],
  capacity: 4,
  add(good) {
      if (!this.isEnough()) {
          this.goods.push(good);
          console.log(`${good} добавлен в корзину`);
      } else {
          console.log("Нет места!");
      }
  },
  remove(good) {
    const index = this.goods.indexOf(good);

    if (index !== -1) {
        this.goods.splice(index, 1);
        console.log(`${good} удален из корзины`);
    }
  },
  isEnough() {
      return this.goods.length === this.capacity;
  },
  show() {
      console.log("В корзине на данный момент находится:")
      for (good of this.goods) {
          console.log(good);
      }
  },
};

const bucketWithGoods2 = {
    goods: [],
    capacity: 4,
    add(good) {
        if (!this.isEnough()) {
            this.goods.push(good);
            console.log(`${good} добавлен в корзину`);
        } else {
            console.log("Нет места!");
        }
    },
    remove(good) {
        const index = this.goods.indexOf(good);

        if (index !== -1) {
            this.goods.splice(index, 1);
            console.log(`${good} удален из корзины`);
        }
    },
    isEnough() {
        return this.goods.length === this.capacity;
    },
    show() {
        console.log("В корзине на данный момент находится:")
        for (good of this.goods) {
            console.log(good);
        }
    },
};

bucketWithGoods1.add("Apple");
bucketWithGoods1.add("Bananas");

bucketWithGoods2.add("Pepsi");
bucketWithGoods2.add("Chocolate");

bucketWithGoods1.show();
bucketWithGoods2.show();

// ---- Пример
// const studentA = {
//   course: "GoIT Frontend",
//   marks: [10, 25, 10, 30],
//   fullname: "Ivanov Ivan",
//   age: 14,
// };
//
// const studentB = {
//     course: "GoIT Frontend",
//     marks: [13, 3, -10, -22],
//     fullname: "Petrov Petr",
//     age: 15,
// };
//
// const studentC = {
//     course: "GoIT Frontend",
//     marks: [10, -10, 5, 0],
//     fullname: "Balzakov Balzak",
//     age: 16,
// };
//
// const group = {
//   students: [],
//   addStudent: function(student) {
//       this.students.push(student);
//   },
//   removeStudent: function(name) {
//       this.students = this.students.filter(student => student.fullname !== name);
//   },
//   showStudents: function() {
//       for (student of this.students) {
//           let sum = 0;
//           for (mark in student.marks) {
//               sum += mark;
//           }
//
//           console.log("Имя:", student.fullname);
//           console.log("Средний балл:", sum / student.marks.length);
//       }
//   }
// };
//
// group.addStudent(studentA);
// group.addStudent(studentB);
// group.addStudent(studentC);
//
// console.log("Изначальная группа:");
// group.showStudents();
//
// group.removeStudent("Balzakov Balzak");
// group.removeStudent("Ivanov Ivan");
//
// console.log("Обновленная группа:");
// group.showStudents();

// ----- ПРИМЕР 2
// const flat = {
//     rooms: 5,
//     color: "skin",
//     locker: {
//         hasMirrors: true,
//         color: "brown",
//         shelfs: ["Clothes", "Documents", "Shoes"],
//     },
//     hasBoiler: true,
//     tv: {
//         model: "Samsung",
//         mode: "4k",
//         isFlat: true,
//         channels: 30,
//     },
//     pc: null,
//     laptop: {
//         model:  "MacBook Pro",
//         year: 2019,
//         firm: "Apple"
//     },
//     showLockerInfo: function () {
//         console.log("---- Шкаф");
//         console.log("Есть зеркала:", this.locker.hasMirrors);
//         console.log("Цвет:", this.locker.color);
//
//         for (shelf of this.locker.shelfs) {
//             console.log("Полка с ", shelf);
//         }
//     },
//     showTVInfo: function () {
//         console.log("---- ТВ:");
//         console.log("Модель:", this.tv.model);
//         console.log("Тип:", this.tv.mode);
//         console.log("ЖК:", this.tv.isFlat);
//         console.log("Кол-во каналов:", this.tv.channels);
//     },
//     showFlatInfo: function () {
//         console.log("Количество комнат:", this.rooms);
//         console.log("Цвет стен:", this.color);
//
//         this.showLockerInfo();
//
//         console.log("Есть бойлер:", this.hasBoiler);
//
//         this.showTVInfo();
//     },
// };
//
// flat.showFlatInfo();