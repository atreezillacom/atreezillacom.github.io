+++
author = "elkrot"
title = "Коллекции C#"
date = "2021-05-02"
description = "Коллекции C#"
tags = [
    "csharp",
	"collections"
]
+++

Описание Коллекции C# <!--more-->

# Коллекции

```csharp
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;

BitArray bits1 = new BitArray(10);
var bits2 = new BitVector32 () ;
ArrayList objectList = 
new ArrayList() 
{ 1, 2, "string", 'c', 2.0f };
List<int> numbers = 
new List<int>() { 1, 2, 3, 45 };
LinkedList<int> numbers1 = 
new LinkedList<int>();
Queue<int> numbers2 = 
new Queue<int>();
Stack<int> numbers3 = 
new Stack<int>();
Dictionary<int, string> countries = 
new Dictionary<int, string>(5);
IEnumerable<int> squares = 
Enumerable.Range(1, 10).Select(x => x * x);	
Random.Range(1,10);
```
BitArray(byte[] bytes)
And(),Get(),Not(),Or(),Set(),SetAll(),Xor()

BitVector32
CreateMask()
CreateSelection()

IEnumerable<T>: определяет метод GetEnumerator, с помощью которого можно получать элементы любой коллекции

Реализация данного интерфейса позволяет перебирать элементы коллекции с помощью цикла foreach
IEnumerator<T>: определяет методы, с помощью которых потом можно получить содержимое коллекции по очереди

ICollection<T>: представляет ряд общих свойств и методов для всех обобщенных коллекций (например, методы CopyTo, Add, Remove, Contains, свойство Count)

IList<T>: предоставляет функционал для создания последовательных списков

IComparer<T>: определяет метод Compare для сравнения двух однотипных объектов

IDictionary\<TKey, TValue>: определяет поведение коллекции, при котором она должна хранить объекты в виде пар ключ-значение: для каждого объекта определяется уникальный ключ типа, указанного в параметре TKey, и этому ключу соответствует определенное значение, имеющее тип, указанный в параметре TValue

IEqualityComparer<T>: определяет методы, с помощью которых два однотипных объекта сравниваются на предмет равенства

Эти интерфейсы реализуются следующими классами коллекций в пространстве имен System.Collections.Generic:

List<T>: класс, представляющий последовательный список. Реализует интерфейсы IList<T>, ICollection<T>, IEnumerable\<T>

Dictionary\<TKey, TValue>: класс коллекции, хранящей наборы пар "ключ-значение". Реализует интерфейсы ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>

LinkedList<T>: класс двухсвязанного списка. Реализует интерфейсы ICollection<T> и IEnumerable<T>

Queue<T>: класс очереди объектов, работающей по алгоритму FIFO("первый вошел -первый вышел"). Реализует интерфейсы ICollection, IEnumerable<T>

SortedSet<T>: класс отсортированной коллекции однотипных объектов. Реализует интерфейсы ICollection<T>, ISet<T>, IEnumerable<T>

SortedList<TKey, TValue>: класс коллекции, хранящей наборы пар "ключ-значение", отсортированных по ключу. Реализует интерфейсы ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>

SortedDictionary<TKey, TValue>: класс коллекции, хранящей наборы пар "ключ-значение", отсортированных по ключу. В общем похож на класс SortedList<TKey, TValue>, основные отличия состоят лишь в использовании памяти и в скорости вставки и удаления

Stack<T>: класс стека однотипных объектов. Реализует интерфейсы ICollection<T> и IEnumerable\<T>

## Итераторы и оператор yield

```csharp
using System.Collections;
Numbers numbers = new Numbers();
foreach (int n in numbers)
{
Console.WriteLine(n);
}
class Numbers
{
	public IEnumerator GetEnumerator()
	{
	for(int i = 0; i < 6; i++)
	{
	yield return i * i;
	}
	}
}
```
- [collections.workbook](https://drive.google.com/file/d/1X4LkJRAIRowx8Ge7WdH4FvUzrM1YrJRl/view?usp=sharing)