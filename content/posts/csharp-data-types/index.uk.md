+++
author = "elkrot"
title = "Базові типи даних C# та .NET: повний довідник з прикладами"
date = "2021-03-26"
description = "Детальний довідник з базових типів даних у C# (.NET). Розміри в байтах, діапазони значень, приклад коду та неявна типізація."
tags = [
    "csharp",
    "dotnet",
    "types",
    "programming"
]
category = "C#"
draft = false
image = "csharp-data-types.webp"
imageAlt = "Цикли в C#: for, while, do-while, foreach"
+++
У мові програмування C# кожна змінна має визначений тип даних. Типи даних підрозділяються на **прості (значущі)** та **посильні (референтні)**, кожен з яких займає певний обсяг пам'яті та має свій діапазон значень.<!--more-->

# Базові типи даних у C# та .NET
Нижче наведено стислий довідник і шпаргалку з основних типів даних у C#.

---

## Шпаргалка з типів даних C#

| Тип C# | Системний тип .NET | Розмір | Опис / Диапазон |
| :--- | :--- | :--- | :--- |
| `bool` | `System.Boolean` | 1 байт | Логічне значення (`true` або `false`) |
| `byte` | `System.Byte` | 1 байт | Ціле число без знака від $0$ до $255$ |
| `sbyte` | `System.SByte` | 1 байт | Ціле число зі знаком від $-128$ до $127$ |
| `short` | `System.Int16` | 2 байти | Ціле число зі знаком від $-32\,768$ до $32\,767$ |
| `ushort` | `System.UInt16` | 2 байти | Ціле число без знака від $0$ до $65\,535$ |
| `int` | `System.Int32` | 4 байти | Ціле число зі знаком від $-2\,147\,483\,648$ до $2\,147\,483\,647$ |
| `uint` | `System.UInt32` | 4 байти | Ціле число без знака від $0$ до $4\,294\,967\,295$ |
| `long` | `System.Int64` | 8 байт | Ціле число від $-9 \times 10^{18}$ до $9 \times 10^{18}$ |
| `ulong` | `System.UInt64` | 8 байт | Ціле число без знака від $0$ до $1.8 \times 10^{19}$ |
| `float` | `System.Single` | 4 байти | Число з плаваючою точкою від $\pm 1.5 \times 10^{-45}$ до $\pm 3.4 \times 10^{38}$ |
| `double` | `System.Double` | 8 байт | Число з плаваючою точкою від $\pm 5.0 \times 10^{-324}$ до $\pm 1.7 \times 10^{308}$ |
| `decimal` | `System.Decimal` | 16 байт | Десяткове дробове число великої точності (до 28–29 знаків) |
| `char` | `System.Char` | 2 байти | Одиничний символ у кодуванні Unicode |
| `string` | `System.String` | Змінний | Набір символів Unicode |
| `object` | `System.Object` | 4 / 8 байт | Базовий тип для всіх типів у .NET |

---

## Приклади використання типів даних у C#

```csharp
using System;

// Логічний тип (1 байт)
bool isStupid = false; 
bool isSmarty = true;

// Цілі числа без знака та зі знаком (1 байт)
byte month = 1; 
byte dayOfWeek = 7;
sbyte t1 = -101; 
sbyte t2 = 102;

// Цілі числа (2 байти)
short n1 = 1; 
short n2 = 102;
ushort un1 = 1; 
ushort un2 = 102;

// 32-бітні цілі числа (4 байти)
int age = 10; 
int b = 0b101; // Двійкова форма
int c = 0xFF;  // Шістнадцяткова форма

uint ua = 10U; 
uint ub = 0b101U;
uint uc = 0xFF_FFU;

// 64-бітні цілі числа (8 байт)
long la = -10L; 
long lb = 0b101L;
long lc = 0xFFL;

ulong ga = 10UL; 
ulong gb = 0b101UL;
ulong gc = 30UL;

// Числа з плаваючою точкою (4 та 8 байт)
float fa = 3.14F; 
float fb = 30.6f;
double db = 10.222;

// Десятковий тип фіксованої точності (16 байт)
decimal fc = 1005.8M; 
decimal d = 334.8m;

// Символьні та стрічкові типи
char ca = 'A'; 
char cb = '\x5A'; // Символ Z через ESC-послідовність
string name = "Tom";

// Універсальний тип System.Object (Базовий для всіх типів)
object oa = 22; 
object ob = 3.14;
object oc = "hello code";

// Виведення інформації у консоль
Console.WriteLine($"Ім'я: {name} \n Вік: {age}");

// Неявна типізація (var)
var xhello = "Hello World";
var xc2 = 20;

Console.WriteLine(c.GetType().ToString());
Console.WriteLine(xhello.GetType().ToString());

// Двійкове представлення та розміри типів
Console.WriteLine(Convert.ToString(123, 2).PadLeft(16, '0'));
Console.WriteLine("Size of bool: {0} byte", sizeof(bool));
```

## Додаткові матеріали

- [Завантажити інтерактивний Notebook (data_types.workbook)](https://drive.google.com/file/d/1LeM6Q7G5EyNZlM9JIILfE-m5yRcpGex-/view?usp=sharing)