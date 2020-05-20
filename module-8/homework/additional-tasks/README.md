# Дополнительные задания

## Задание #1

Придумать название и написать функцию-фильтр, которая принимает на вход массив:
["Potato", 12312, "Banana", true, undefined, "", "Cake", 12312, Infinity]
и возвращает только непустые строки. Ожидаемый результат:
["Potato", "Banana", "Cake"]

## Задание 2

Придумать название и написать функцию, которая принимает на вход двумерный массив чисел:
[
    [1, 10, 15, 20],
    [20, 30, -5, 50],
    [10, -10, 3, 150]
] 
и возвращает массив с числами, где:
1 число - максимальный элемент из 1го массива
2 число - минимальный элемент из 3го массива
3 число - сумма всех положительных чисел 2ого массива

## Задание 3

Придумать название и написать функцию, которая принимает на вход любое количество аргументов.
Функция должна вывести количество строк, undefined, null, boolean,массивов и количество четных и нечетных чисел.

Пример:

func(1,2,3, "String", [1,2,3,4], true, "String2", 3, [1,2]);

// Вывод в консоли

0 undefined
0 null
2 массива
1 boolean
2 строки
2 четных числа
2 нечетных числа