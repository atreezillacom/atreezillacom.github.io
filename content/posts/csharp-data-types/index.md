+++
author = "elkrot"
title = "Типы данных C#"
date = "2021-03-26"
description = "Типы данных C#"
tags = [
    "csharp"
]
+++

Типы данных в C# описано в сжатом формате .<!--more-->

```csharp
//(1 байт) System.Boolean
bool isStupid = false; bool isSmarty = true;  
//(1 байт) от 0 до 255 System.Byte 
byte _month = 1; byte DayOfWeek = 102;  
//(1 байт) целое число от -128 до 127 
//System.SByte       
sbyte t1 = -101; sbyte t2 = 102;
//(2 байта) целое число от -32768 до 32767  
//System.Int16               
short n1 = 1; short n2 = 102;       
//(2 байта) целое число от 0 до 65535 
//System.UInt16           
ushort un1 = 1; ushort un2 = 102; 
//(4 байта) целое число 
//от -2147483648 до 2147483647 System.Int32             
int age = 10; int b = 0b101; int c = 0xFF; 
//(4 байта) целое число от 0 до 4294967295 
//System.UInt32    
uint ua = 10; uint ub = 0b101; 
uint uc = 0xFF; uint xa = 10U;                 
//(8 байт) целое число 
// от –9 223 372 036 854 775 808 
// до 9 223 372 036 854 775 807 
//System.Int64
long la = -10; long lb = 0b101; 
long lc = 0xFF; long xb = 20L;    
//(8 байт) целое число 
// от 0 до 18 446 744 073 709 551 615 
//System.UInt64  
ulong ga = 10; ulong gb = 0b101; 
ulong gc = 0xFF; ulong xc = 30UL;      
//(4 байта)число с плавающей точкой 
//от -3.4*1038 до 3.4*1038 System.Single
float fa = 3.14F; float fb = 30.6f;
//(8 байт)число с плавающей точкой 
// от ±5.0*10-324 до ±1.7*10308 System.Double         
double db =10.222;                       
//(16 байт)десятичное дробное число. 
// Если употребляется без десятичной запятой, 
// имеет значение от ±1.0*10-28 до ±7.9228*1028, 
// может хранить 28 знаков после запятой 
// System.Decimal   
decimal fc = 1005.8M;decimal d = 334.8m;    
//(2 байта)хранит одиночный символ 
//в кодировке Unicode System.Char
char ca = 'A'; char cb = '\x5A'; 
char cc = '\u0420'; 
//хранит набор символов Unicode 
//System.String
string name = "Tom"; 
/*может хранить значение любого типа 
данных и занимает 4 байта 
на 32-разрядной платформе и 8 байт 
на 64-разрядной платформе. 
System.Object , является базовым для 
всех других типов и классов .NET*/
object oa = 22; object ob = 3.14; 
object oc = "hello code"; 

Console.WriteLine($"Имя: {name} \n Возраст: {age}");
//Неявная типизация
var xhello = "Hell to World";
var xc2 = 20;     
Console.WriteLine(c.GetType().ToString());
Console.WriteLine(xhello.GetType().ToString());

Console.WriteLine(Convert.ToString(123, 2).PadLeft(16, '0')) ;   
Console.WriteLine("Size of bool {0}",sizeof(bool));
```
- [data_types.workbook](https://drive.google.com/file/d/1LeM6Q7G5EyNZlM9JIILfE-m5yRcpGex-/view?usp=sharing)