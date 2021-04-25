+++
author = "elkrot"
title = "Строки C#"
date = "2021-03-27"
description = "Строки C#"
tags = [
    "csharp"
]
+++
 
Примеры работы с файлами и строками <!--more-->

## Работа с файлами

```csharp
using System.IO;

string path = @"C:\apache\hta.txt";
FileInfo fileInf = new FileInfo(path);
if (fileInf.Exists)
{
    Console.WriteLine(
	"Имя файла: {0}", fileInf.Name);
    Console.WriteLine(
	"Время создания: {0}", fileInf.CreationTime);
    Console.WriteLine(
	"Размер: {0}", fileInf.Length);
}
```

# Работа со строками

```csharp
string s1 = "hello";
string s2 = null;
 
string s3 = new String('a', 6); 
// результатом будет строка "aaaaaa"
string s4 = 
new String(new char[]{'w', 'o', 'r', 'l', 'd'});
```

Основная функциональность класса String раскрывается через его методы, среди которых можно выделить следующие:

* **Compare**: сравнивает две строки с учетом текущей культуры (локали) пользователя
* **CompareOrdinal**: сравнивает две строки без учета локали
* **Contains**: определяет, содержится ли подстрока в строке
* **Concat**: соединяет строки
* **CopyTo**: копирует часть строки или всю строку в другую строку
* **EndsWith**: определяет, совпадает ли конец строки с подстрокой
* **Format**: форматирует строку
* **IndexOf**: находит индекс первого вхождения символа или подстроки в строке
* **Insert**: вставляет в строку подстроку
* **Join**: соединяет элементы массива строк
* **LastIndexOf**: находит индекс последнего вхождения символа или подстроки в строке
* **Replace**: замещает в строке символ или подстроку другим символом или подстрокой
* **Split**: разделяет одну строку на массив строк
* **Substring**: извлекает из строки подстроку, начиная с указанной позиции
* **ToLower**: переводит все символы строки в нижний регистр
* **ToUpper**: переводит все символы строки в верхний регистр
* **Trim**: удаляет начальные и конечные пробелы из строки

```csharp
long number1 = 19876543210;
Console.WriteLine(
number1.ToString("+# (###) ###-##-##"));
// +1 (987) 654-32-10
Console.WriteLine(
$"{number1:+# ### ### ## ##}"); 
// +1 987 654 32 10
double number = 23.7;
string result = String.Format("{0:C}", number);
```

#### Все используемые форматы:

C / c Задает формат денежной единицы, указывает количество десятичных разрядов после запятой
D / d Целочисленный формат, указывает минимальное количество цифр
E / e Экспоненциальное представление числа, указывает количество десятичных разрядов после запятой
F / f Формат дробных чисел с фиксированной точкой, указывает количество десятичных разрядов после запятой
G / g Задает более короткий из двух форматов: F или E
N / n Также задает формат дробных чисел с фиксированной точкой, определяет количество разрядов после запятой
P / p Задает отображения знака процентов рядом с число, указывает количество десятичных разрядов после запятой
X / x Шестнадцатеричный формат числа