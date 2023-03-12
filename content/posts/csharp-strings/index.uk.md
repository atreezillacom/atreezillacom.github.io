+++
author = "elkrot"
title = "Строки C#"
date = "2023-03-12"
description = "Рядки C#.Ініціалізація рядків.використовувані формати"
tags = [
     "csharp",
"strings"
]
+++
 
Приклади роботи з рядками C#<!--more-->

# Ініціалізація рядків

```csharp
string s1 = "hello";
string s2 = null;
 
string s3 = new String('a', 6);
// результатом буде рядок "aaaaaa"
string s4 =
new String(
new char[]{'w', 'o', 'r', 'l', 'd'});
var s5 = String.Empty;
if (s5.IsNullOrWhiteSpace()){
Console.WriteLine([Empty String]);
}
```

Основні методи класу String:

* **Compare**,**CompareOrdinal**: порівнює два рядки
* **Contains**: чи міститься підрядок у рядку
* **Concat**: з'єднує рядки
* **CopyTo**: копіює в інший рядок
* **EndsWith**: чи збігається кінець рядка з підрядком
* **Format**: форматує рядок
* **IndexOf**: індекс першого входження
* **Insert**: вставляє в рядок підрядок
* **Join**: з'єднує елементи масиву
* **LastIndexOf**: індекс останнього входження
* **Replace**: замінює
* **Split**: поділяє на масив
* **Substring**: витягує з рядка підрядок
* **ToLower**: у нижній регістр
* **ToUpper**: у верхній регістр
* **Trim**: видаляє прогалини

```csharp
long number1 = 19876543210;
Console.WriteLine(
number1.ToString("+# (###) ###-##-##"));
// +1 (987) 654-32-10
Console.WriteLine(
$"{number1:+# ### ### ## ##}");
// +1 987 654 32 10
double number = 23.7;
string result =
   String.Format("{0:C}", number);
```

#### Всі формати, що використовуються:

* C / c формат грошової одиниці
* D / d Цілочисельний формат
* E/e Експоненційне подання
* F / f Формат дробових чисел з фіксованою точкою
* G / g Задає більш короткий із двох форматів: F або E
* N / n формат дробових чисел з фіксованою точкою
* P / p Задає відображення знака відсотків поряд з числом
* X / x Шістнадцятковий формат числа


- Одиночна лапка
- \" Подвійна лапка
- \\ зворотна коса риса
- \0 Null
- \a Попередження
- \b Backspace
- Form feed
- \n Новий рядок
- Повернення каретки
- Горизонтальна табуляція
- \v Вертикальна табуляція
- \u (UTF-16) (0000 - FFFF; \u00E7 = "ç")
- \U (UTF-32) (000000 - 10FFFF; \U0001F47D = "👽")
- \x \xH[H][H][H] ( 0 - FFFF; \x00E7 or \x0E7 or \xE7 = "ç")
{{< difrx "https://dotnetfiddle.net/widget/7a1kAg" >}}
