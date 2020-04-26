# Дополнительные задания
##Задание №1
Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' )

##Задание №2

Решите задачу:
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.«Включительно» означает, что значение переменной age может быть равно 14 или 90.


Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

##Задание №3

Сократите код ветвления switch, согласно допускаемых правил

let day = prompt("Enter today day please");
let weekday;
 
switch (day) {
  case "Monday":
    weekday = "the worst workday at week";
    break;
 
  case "Tuesday":
    weekday = "a bit better workday";
    break;
 
  case "Wednesday":
    weekday = "a workday and so it`s a small Friday)";
    break;
 
  case "Thursday":
    weekday = "a strange workday";
    break;
 
  case "Friday":
    weekday = "the best workday";
    break;
 
  case "Saturday":
    weekday = "holiday";
    break;
 
  case "Sunday":
    weekday = "holiday";
    break;
 
  default:
    alert("Invalid entered data");
    weekday = "invalid data";
}
 
console.log(`${day} is ${weekday}`); 