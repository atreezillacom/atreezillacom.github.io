+++
author = "elkrot"
title = "Data types C#"
date = "2023-03-12"
description = "Data types C#"
tags = [
    "csharp"
]
+++

Data types in C# are described in a compressed format .<!--more-->

`Data types in C# are described in compressed format .<!--more-->

```csharp
//(1 byte) System.Boolean
bool isStupid = false; bool isSmarty = true;
//(1 byte) from 0 to 255 System.Byte
byte_month = 1; byte DayOfWeek = 102;
//(1 byte) integer from -128 to 127
//System.SByte
sbyte t1 = -101; sbyte t2 = 102;
//(2 bytes) integer from -32768 to 32767
//System.Int16
short n1 = 1; short n2 = 102;
//(2 bytes) integer from 0 to 65535
//System.UInt16
ushort un1 = 1; ushort un2 = 102;
//(4 bytes) integer
//from -2147483648 to 2147483647 System.Int32
int age = 10; int b = 0b101; int c = 0xFF;
//(4 bytes) integer from 0 to 4294967295
//System.UInt32
uint ua = 10; uintub = 0b101;
uint uc = 0xFF; uint xa = 10U;
//(8 bytes) integer
// from -9 223 372 036 854 775 808
// up to 9 223 372 036 854 775 807
//System.Int64
long la = -10; long lb = 0b101;
longlc = 0xFF; long xb = 20L;
//(8 bytes) integer
// from 0 to 18 446 744 073 709 551 615
//System.UInt64
ulong ga = 10; ulong gb = 0b101;
ulong gc = 0xFF; ulongxc = 30UL;
//(4 bytes) floating point number
//from -3.4*1038 to 3.4*1038 System.Single
float fa = 3.14F; float fb = 30.6f;
//(8 bytes) floating point number
// from ±5.0*10-324 to ±1.7*10308 System.Double
double db=10.222;
//(16 bytes) decimal fractional number.
// If used without a decimal point,
// has the meaning
// from ±1.0*10-28 to ±7.9228*1028,
// can store 28 decimal places
// System.Decimal
decimal fc = 1005.8M; decimal d = 334.8m;
//(2 bytes) stores a single character
//encoded in Unicode System.Char
char ca = 'A'; char cb = '\x5A';
char cc = '\u0420';
//stores the Unicode character set
//System.String
stringname = "Tom";
/*can store a value of any type
data and occupies 4 bytes
on a 32-bit platform and 8 bytes
on a 64-bit platform.
System.Object , is the base for
all other .NET types and classes*/
object oa = 22; object ob = 3.14;
object oc = "hello code";

Console.WriteLine(
$"Name: {name} \n Age: {age}");
//Implicit typing
var xhello = "Hell to World";
var xc2 = 20;
Console.WriteLine(c.GetType().ToString());
Console.WriteLine(
xhello.GetType().ToString());

Console.WriteLine(
Convert.ToString(123, 2).PadLeft(16, '0')) ;
Console.WriteLine(
"Size of bool {0}",sizeof(bool));
```
- [data_types.workbook](https://drive.google.com/file/d/1LeM6Q7G5EyNZlM9JIILfE-m5yRcpGex-/view?usp=sharing)