+++
author = "elkrot"
title = "Арфметические операции C#"
date = "2021-03-26"
description = "Арфметические операции C#"
tags = [
    "csharp"
]
+++

В статье коротко описаны **арифметические операции C#** а так же способы конвертации типов<!--more-->
`+ , - , * , / , % , ++ , --`

Поразрядные операции
--------------------

`&`(логическое умножение),\
`|`(логическое сложение),\
*`^`*(логическое исключающее ИЛИ),\
`~` (логическое отрицание или инверсия)

Операции присваивания
--------------------

`+= , -= , *= , /= , %= , &= , |= , ^= , <<= , >>=`

Условные выражения
--------------------

`==,!=,<,>,<=,>=,|,^,&,||,&&,!`

В какие типы безопасно преобразуется
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

Конвертация
--------------------

```csharp
int x=500;
long y=(int)x;
uint u =10;
float f =101;
if (uint.TryParse(f.ToString(),out u)){
Console.WriteLine(
"16 - ричное представление числа {0} - {1}"
,u , Convert.ToString(u,16));

```
{{< difrx "https://dotnetfiddle.net/widget/GwTNxT" >}}  
