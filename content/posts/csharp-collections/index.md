+++
author = "elkrot"
title = "Коллекции C#. Определение , примеры использования. Аналогии. "
date = "2021-05-02"
description = "Коллекции C#. Определение , примеры использования. Аналогии из реального мира."
tags = [
    "csharp",
	"collections"
]
+++

Описание Коллекций C#. Определение , примеры использования. Аналогии  <!--more-->

# Коллекции

Коллекция это объект, содержащий набор значений и позволяющий взаимодействовать с этими значениями (просматривать, добавлять, изменять, удалять, сортировать ...) . 


## Классификация коллекций по характеристикам

 - Постоянные , динамические 
 - Может хранить объекты одного типа или объекты различных типов
 
## Классификация коллекций по логике организации

 - Вектор - Массив 
 - Матрица - Двумерный массив
 - Многомерный массив  
 - Список - Упорядоченная коллекция объектов
 - Стек - последним пришёл — первым вышел LIFO
 - Очередь - первым пришёл — первым вышел FIFO
 - Ассоциативный массив (словарь) - неупорядоченная коллекция, хранящая пары «ключ — значение»
 - Множество - неупорядоченная коллекция, хранящая набор уникальных значений
 - Мультимножество — множество, допускающее наличие одновременно нескольких одинаковых значений.
	
## Классификация коллекций по реализации

### Интерфейсы коллекций

IEnumerable<T>: определяет метод GetEnumerator, можно получать элементы любой коллекции Реализация интерфейса позволяет перебирать элементы коллекции с помощью foreach

ICollection<T>: представляет общие свойства и методы для всех обобщенных коллекций (например, методы CopyTo, Add, Remove, Contains, свойство Count)

IList<T>: предоставляет функционал для создания последовательных списков

IComparer<T>: определяет метод Compare для сравнения двух однотипных объектов

IDictionary<TKey, TValue>: коллекция должна хранить объекты в виде пар ключ-значение TKey, TValue

IEqualityComparer<T>: определяет методы, с помощью которых два однотипных объекта сравниваются на предмет равенства

реализуются классами коллекций в пространстве имен System.Collections.Generic:
 
### Необходимые пространства имен

```csharp
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
```

### Типы коллекций C#

- Массив
 
```csharp
ArrayList objectList = 
new ArrayList() 
{ 1, 2, "string", 'c', 2.0f };
```
 
 
- Односвязный список
`List<T>`: последовательный список. Реализует интерфейсы `IList<T>, ICollection<T>, IEnumerable<T>` 

```csharp
List<int> numbers = 
new List<int>() { 1, 2, 3, 45 };
``` 
 
`SortedSet<T>`: отсортированная коллекция однотипных объектов. Реализует интерфейсы `ICollection<T>, ISet<T>, IEnumerable<T>`

`SortedList<TKey, TValue>`: хранит наборы пар "ключ-значение", отсортированные по ключу. Реализует интерфейсы `ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>`

- Двусвязный список
`LinkedList<T>`: двухсвязанный список. Реализует интерфейсы `ICollection<T> , IEnumerable<T>`
```csharp
LinkedList<int> numbers1 = 
new LinkedList<int>();
```
- Стек
`Stack<T>`: стек однотипных объектов. Реализует интерфейсы `ICollection<T> , IEnumerable<T>`
```csharp
Stack<int> numbers3 = 
new Stack<int>();
```
- Хеш-таблица
```csharp
Hashtable
```
- Битовый массив
`BitArray(byte[] bytes)`
`And(),Get(),Not(),Or(),Set(),SetAll(),Xor()`

`BitVector32`
`CreateMask()`
`CreateSelection()`
 
```csharp
BitArray bits1 = new BitArray(10);
var bits2 = new BitVector32 () ;
```
 
- Очередь
`Queue<T>`: FIFO("первый вошел -первый вышел"). Реализует интерфейсы `ICollection, IEnumerable<T>`
```csharp
Queue<int> numbers2 = 
new Queue<int>();
```
 
- Словарь 
`Dictionary<TKey, TValue>`: "ключ-значение". Реализует интерфейсы `ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>`
```csharp
Dictionary<int, string> countries = 
new Dictionary<int, string>(5);
```
`SortedDictionary<TKey, TValue>`: хранит наборы пар "ключ-значение", отсортированных по ключу. Похож на класс `SortedList<TKey, TValue>`, основные отличия состоят лишь в использовании памяти и в скорости вставки и удаления
 
- Способы создания коллекций 
```csharp


IEnumerable<int> randomCol =
Enumerable.Range(1, 10);

foreach (var item in randomCol)
 {
  Console.WriteLine((item.ToString());
 }
		
var r = new Random(Seed:5); 
var rVal = r.Next(minValue:1,maxValue:10);
		
IEnumerable<int> squares =
Enumerable.Range(20, 30).Select(x => x * rVal);		
```

### Итераторы и оператор yield

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