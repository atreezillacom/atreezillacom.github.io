+++
author = "elkrot"
title = "Structures C#"
date = "2023-03-12"
description = "C# structures. Enums, Tuples, Classes"
tags=[
     "csharp",
"structures"
]
+++

Structure description, tuples, enums <!--more-->

## Enums

```csharp
enum Time : byte
{
    Morning,
    Afternoon,
    Evening,
    Night
}
```

## Tuples

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

## Structures

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

## Classes

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


