+++
author = "elkrot"
title = "Циклы C#"
date = "2021-03-26"
description = "Циклы C#"
tags = [
    "csharp"
]
+++

Использование **циклов** в языке C# коротко описано статье.<!--more-->

```csharp
for (int i = 0; i < 9; i++)
{
    if (i == 5)
        break;
        //continue;
    Console.Write(i);
}

int i = 60;
while (i > 0)
{
    Console.WriteLine(
	Convert.ToString(i, 2).PadLeft(8, '0'));
    i--;
}

i = -1;
do
{
    Console.Write(i);
    i--;
} while (i > 0);

int[] numbers = 
new int[] { 1, 2, 3, 4, 5 };
foreach (int i in numbers)
{
    Console.Write(i);
}
```
