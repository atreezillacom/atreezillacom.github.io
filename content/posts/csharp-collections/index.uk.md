+++
author = "elkrot"
title = "Колекції C#. Визначення, приклади використання. Аналогії. "
date = "2023-03-11"
description = "Колекції C#. Визначення, приклади використання. Аналогії із реального світу."
tags = [
    "csharp",
	"collections"
]
+++

Опис Колекцій C#. Визначення, приклади використання. Аналогії  <!--more-->

# Колекції

Колекція це об'єкт, що містить набір значень і дозволяє взаємодіяти з цими значеннями (переглядати, додавати, змінювати, видаляти, сортувати ...) . 


## Класифікація колекцій за характеристиками

 - Постійні, динамічні
 - Може зберігати об'єкти одного типу чи об'єкти різних типів
 
## Класифікація колекцій з логіки організації

  - Вектор - Масив
  - Матриця - Двовимірний масив
  - Багатомірний масив
  - Список - Впорядкована колекція об'єктів
  - Стек – останнім прийшов – першим вийшов LIFO
  - Черга – першим прийшов – першим вийшов FIFO
  - Асоціативний масив (словник) – невпорядкована колекція, що зберігає пари «ключ – значення»
  - Безліч - невпорядкована колекція, що зберігає набір унікальних значень
  - Мультимножина - безліч, що допускає наявність одночасно кількох однакових значень.
	
## Класифікація колекцій з реалізації

### Інтерфейси колекцій

`IEnumerable<T>`: визначає метод GetEnumerator, можна отримувати елементи будь-якої колекції Реалізація інтерфейсу дозволяє перебирати елементи колекції за допомогою foreach

`ICollection<T>`: представляє загальні властивості та методи для всіх узагальнених колекцій (наприклад, методи `CopyTo, Add, Remove, Contains, властивість Count`)

`IList<T>`: надає функціонал для створення послідовних списків

`IComparer<T>`: визначає метод Compare для порівняння двох однотипних об'єктів

`IDictionary<TKey, TValue>`: колекція повинна зберігати об'єкти у вигляді пар ключ-значення TKey, TValue

`IEqualityComparer<T>`: визначає методи, за допомогою яких два однотипні об'єкти порівнюються на предмет рівності

реалізуються класами колекцій у просторі імен `System.Collections.Generic`:
 
### Необхідні простори імен

```csharp
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
```

### Типи колекцій C#

- Масив
 
```csharp
ArrayList objectList = 
new ArrayList() 
{ 1, 2, "string", 'c', 2.0f };
```

- Однозв'язковий список
`List<T>`: послідовний перелік. Реалізує інтерфейси `IList<T>, ICollection<T>, IEnumerable<T>` 

```csharp
List<int> numbers = 
new List<int>() { 1, 2, 3, 45 };
``` 
 
`SortedSet<T>`: відсортована колекція однотипних об'єктів. Реалізує інтерфейси `ICollection<T>, ISet<T>, IEnumerable<T>`

`SortedList<TKey, TValue>`: зберігає набори пар "ключ-значення", відсортовані за ключом. Реалізує інтерфейси `ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>`

- Двозв'язковий список
`LinkedList<T>`: Двозв'язаний список. Реалізує інтерфейси `ICollection<T> , IEnumerable<T>`

```csharp
LinkedList<int> numbers1 = 
new LinkedList<int>();
```

- Стек
`Stack<T>`: стек однотипних об'єктів. Реалізує інтерфейси `ICollection<T> , IEnumerable<T>`
```csharp
Stack<int> numbers3 = 
new Stack<int>();
```
- Хеш-таблиця
`Hashtable` реалізуються інтерфейси `IDictionary, ICollection, IEnumerable, ISerializable, IDeserializationCallback и ICloneable`
```csharp
Hashtable htbl = new Hashtable();
htbl.Add("name", "key123");
```
- Бітовий масив
`BitArray(byte[] bytes)`
`And(),Get(),Not(),Or(),Set(),SetAll(),Xor()`

`BitVector32`
`CreateMask()`
`CreateSelection()`
 
```csharp
BitArray bits1 = new BitArray(10);
var bits2 = new BitVector32 () ;
```
 
- Черга
`Queue<T>` :FIFO("перший увійшов-перший вийшов"). Реалізує інтерфейси `ICollection, IEnumerable<T>`
```csharp
Queue<int> numbers2 = 
new Queue<int>();
```
 
- Словарь 
`Dictionary<TKey, TValue>`: "ключ-значення". Реалізує інтерфейси `ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>`
```csharp
Dictionary<int, string> countries = 
new Dictionary<int, string>(5);
```
`SortedDictionary<TKey, TValue>`: зберігає набори пар "ключ-значення", відсортованих за ключом. Схожий на клас `SortedList<TKey, TValue>`, основні відмінності полягають лише у використанні пам'яті та швидкості вставки та видалення
 
- способи створення колекцій
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

### Ітератори та оператор yield

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