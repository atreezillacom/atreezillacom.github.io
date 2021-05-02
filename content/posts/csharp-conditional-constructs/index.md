+++
author = "elkrot"
title = "Условные конструкции C#"
date = "2021-03-26"
description = "Условные конструкции C#"
tags = [
    "csharp"
]
+++

Рассмотрены варианты использования **условных конструкций C#**<!--more-->

```csharp
var x=11;
if(x > 2){ 
Console.WriteLine(
$"Число {x} больше числа 2");}
else if (x < 2){ 
Console.WriteLine(
$"Число {x} меньше числа 2");}

string selection="";
switch (selection)
{
    case "Y":
        Console.WriteLine(
		"Вы нажали букву Y");
        break;
    case "N":
        Console.WriteLine(
		"Вы нажали букву N");
        break;
    default:
        Console.WriteLine(
		"Вы нажали неизвестную букву");
        break;
}
int z = selection=="Y"? (1+2) : (3-1);
```