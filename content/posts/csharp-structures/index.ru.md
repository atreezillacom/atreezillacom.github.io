+++
author = "elkrot"
title = "Структуры C#"
date = "2021-05-02"
description = "Структуры C#. Перечисления, Кортежи, Классы"
tags = [
    "csharp",
	"structures"
]
+++

Описание структуры, кортежи, перечисления <!--more-->

## Перечисления enum

```csharp
enum Time : byte
{
    Morning,
    Afternoon,
    Evening,
    Night
}
```

## Кортежи

```csharp
(int,int) t1 = (5, 10);
(int x, int y) t2 = (x:1, y:2);
var t3 = (x:3, y:4);
private static (int, int) GetValues()
{
    var result = (1, 3);
    return result;
}
```

## Структуры

```csharp
struct User
{
	public string name;
	public int age;
	public void DisplayInfo()
	{
	Console.WriteLine(
	$"Name: {name}  Age: {age}");
	}
}
User tom;
tom.name = "Tom";
tom.age = 34;
tom.DisplayInfo();
```

## Классы

```csharp
class User
{
	private string _name;
	private int _age;
	public string Name {
	get {return _name;} 
	set {_name =value;}}
	public int Age {
	get {return _age;} }
	public User(string name
	,int age)
	{
	_name =name;
	_age = age;
	}
	public void DisplayInfo( 
	params int[]  ar)
	{
		foreach(var item in ar)
		{
			Console.WriteLine(item);    
		}
		Console.WriteLine(
		$"Name: {Name}  Age: {Age}");
	}
}
User tom = new User("Serg",44);
tom.DisplayInfo(1,2,3,4);
```


