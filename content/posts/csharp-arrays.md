+++
author = "elkrot"
title = "Массивы C#"
date = "2021-03-27"
description = "Массивы C#"
tags = [
    "csharp"
]
+++
# Массивы

```csharp
int[] nums2 = new int[4] { 1, 2, 3, 5 };
int[] nums3 = new int[] { 1, 2, 3, 5 };
int[] nums4 = new[] { 1, 2, 3, 5 };
int[] nums5 = { 1, 2, 3, 5 };
```

## Многомерные массивы

```csharp
int[,] nums1;
int[,] nums2 = new int[2, 3];
int[,] nums3 = 
new int[2, 3] { { 0, 1, 2 }, { 3, 4, 5 } };
int[,] nums4 = 
new int[,] { { 0, 1, 2 }, { 3, 4, 5 } };
int[,] nums5 = 
new [,]{ { 0, 1, 2 }, { 3, 4, 5 } };
int[,] nums6 = { { 0, 1, 2 }, { 3, 4, 5 } };
```

## Массив массивов

```csharp
int[][] nums = new int[3][];
// выделяем память для первого подмассива
nums[0] = new int[2] { 1, 2 };          
// выделяем память для второго подмассива
nums[1] = new int[3] { 1, 2, 3 };       
// выделяем память для третьего подмассива
nums[2] = new int[5] { 1, 2, 3, 4, 5 }; 

int[][,] nums2 = new int[3][,] 
{
    new int[,] { {1,2}, {3,4} },
    new int[,] { {1,2}, {3,6} },
    new int[,] { {1,2}, {3,5}, {8, 13} } 
};
```
