+++
author = "elkrot"
title = "Типи даних C#"
date = "2021-03-26"
description = "Типи даних C#"
tags = [
    "csharp"
]
+++

Типи даних C# описано в стислому форматі .<!--more-->

```csharp
//(1 байт) System.Boolean
bool isStupid = false; bool isSmarty = true;
//(1 байт) від 0 до 255 System.Byte
byte _month = 1; byte DayOfWeek = 102;
//(1 байт) ціле число від -128 до 127
//System.SByte
sbyte t1 = -101; sbyte t2 = 102;
//(2 байти) ціле число від -32768 до 32767
//System.Int16
short n1 = 1; short n2 = 102;
//(2 байти) ціле число від 0 до 65535
//System.UInt16
ushort un1 = 1; ushort un2 = 102;
//(4 байти) ціле число
//від -2147483648 до 2147483647 System.Int32
int age = 10; int b = 0b101; int c = 0xFF;
//(4 байти) ціле число від 0 до 4294967295
//System.UInt32
uint ua = 10; uint ub = 0b101;
uint uc = 0xFF; uint xa = 10U;
//(8 байт) ціле число
// Від -9 223 372 036 854 775 808
// До 9 223 372 036 854 775 807
//System.Int64
long la = -10; long lb = 0b101;
long lc=0xFF; long xb = 20L;
//(8 байт) ціле число
// Від 0 до 18 446 744 073 709 551 615
//System.UInt64
ulong ga = 10; ulong gb = 0b101;
ulong gc = 0xFF; ulong xc = 30UL;
//(4 байти) число з плаваючою точкою
//від -3.4 * 1038 до 3.4 * 1038 System.Single
float fa = 3.14F; float fb = 30.6f;
//(8 байт) число з плаваючою точкою
// Від ±5.0*10-324 до ±1.7*10308 System.Double
double db = 10.222;
//(16 байт)десяткове дробове число.
// Якщо вживається без десяткової коми,
// має значення
// від ±1.0*10-28 до ±7.9228*1028,
// може зберігати 28 знаків після коми
// System.Decimal
decimal fc = 1005.8M; decimal d = 334.8m;
//(2 байти)зберігає одиночний символ
//У кодуванні Unicode System.Char
char ca = 'A'; char cb = 'x5A';
char cc = '';
//зберігає набір символів Unicode
//System.String
string name = "Tom";
/*може зберігати значення будь-якого типу
даних і займає 4 байти
на 32-розрядній платформі та 8 байт
на 64-розрядній платформі.
System.Object , є базовим для
всіх інших типів та класів .NET*/
object oa = 22; об'єкт ob = 3.14;
object oc = "hello code";

Console.WriteLine(
$"Ім'я: {name} \n Вік: {age}");
//Неявна типізація
var xhello = "Hell to World";
var xc2 = 20;
Console.WriteLine(c.GetType().ToString());
Console.WriteLine(
xhello.GetType().ToString());

Console.WriteLine(
Convert.ToString(123, 2).PadLeft(16, '0')) ;
Console.WriteLine(
"Size of bool {0}", sizeof (bool));
```
- [data_types.workbook](https://drive.google.com/file/d/1LeM6Q7G5EyNZlM9JIILfE-m5yRcpGex-/view?usp=sharing)