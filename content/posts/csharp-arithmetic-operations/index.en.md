+++
author = "elkrot"
title = "Arithmetic operations in C#"
date = "2021-03-26"
description = "Arithmetic operations in C#"
tags = [
    "csharp"
]
+++

The article briefly describes **C# arithmetic operations** as well as ways to convert types<!--more-->
`+ , - , * , / , % , ++ , --`

Bitwise Operations
--------------------

`&`(logical multiplication),\
`|`(logical addition),\
*`^`*(logical XOR),\
`~` (logical negation or inversion)

Assignment operations
--------------------

`+= , -= , *= , /= , %= , &= , |= , ^= , <<= , >>=`

Conditional expressions
--------------------

`==,!=,<,>,<=,>=,|,^,&,||,&&,!`

What types can be safely converted to
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

Conversion
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
"16 - numeric representation of a number {0} - {1}"
,y , Convert.ToString(y,16));
Console.WriteLine(
Convert.ToUInt16(++f));
```
