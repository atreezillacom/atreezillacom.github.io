+++
author = "elkrot"
title = "Арифметичні операції C#"
date = "2021-03-26"
description = "Арифметичні операції C#"
tags = [
    "csharp"
]
+++
У статті коротко описані **арифметичні операції C#** а також способи конвертації типів<!--more-->
`+ , - , * , / , % , ++ , --`

Порозрядні операції
--------------------

`&`(логічне множення),\
`|`(логічне додавання),\
*`^`*(логічне виключне АБО),\
`~` (логічне заперечення чи інверсія)

Операції присвоєння
--------------------

`+= , -= , *= , /= , %= , &= , |= , ^= , <<= , >>=`

Умовні вирази
--------------------

`==,!=,<,>,<=,>=,|,^,&,||,&&,!`

В які типи безпечно перетворюється
--------------------

**byte >>** short, ushort, int, uint, long, ulong, float, double, decimal\
**sbyte >>** short, int, long, float, double, decimal\
**short >>** int, long, float, double, decimal\
**ushort >>** int, uint, long, ulong, float, double, decimal\
**int >>** long, float, double, decimal\
**uint >>** long, ulong, float, double, decimal\
**long >>** float, double, decimal\
**ulong >>** float, double, decimal\
**float >>** double\
**char >>** ushort, int, uint, long, ulong, float, double, decimal

Конвертація
--------------------

```csharp
int x=500;
long y=(int)x;
Console.WriteLine(y);

uint u =10;
float f =101;
uint.TryParse(f.ToString(),out u);
Console.WriteLine(u);
y++;
Console.WriteLine(
"16 - річне подання числа {0} - {1}"
,y , Convert.ToString(y,16));
Console.WriteLine(
Convert.ToUInt16(++f));
```
