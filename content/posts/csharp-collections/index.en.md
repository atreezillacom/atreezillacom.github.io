+++
author = "elkrot"
title = "Collections C#. Definition, examples of use. Analogies. "
date = "2021-05-02"
description = "Collections C#. Definition, examples of use. Analogies from the real world."
tags = [
    "csharp",
	"collections"
]
+++

Describing C# Collections. Definition, examples of use. Analogies  <!--more-->

# Collections

A collection is an object that contains a set of values and allows you to interact with these values (view, add, modify, delete, sort ...) . 


## Classification of collections by characteristics

- Permanent, dynamic
- Can store objects of the same type or objects of different types
  
## Classifying collections according to the logic of organization

  - Vector - Array
  - Matrix - Two-dimensional array
  - Multidimensional array
  - List - Ordered collection of objects
  - Stack - last in - first out LIFO
  - Queue - first in - first out FIFO
  - Associative array (dictionary) - an unordered collection that stores key-value pairs
  - Set - an unordered collection that stores a set of unique values
  - A multiset is a set that allows the presence of several identical values at the same time.
	
## Classify collections by implementation

### Collection interfaces

`IEnumerable<T>`: defines the GetEnumerator method, you can get the elements of any collection The implementation of the interface allows you to iterate over the elements of the collection using foreach

`ICollection<T>`: represents common properties and methods for all generic collections (e.g. `CopyTo, Add, Remove, Contains methods, Count` property)

`IList<T>`: provides functionality for creating sequential lists

`IComparer<T>`: defines the Compare method for comparing two objects of the same type

`IDictionary<TKey, TValue>`: collection must store objects as key-value pairs TKey, TValue

`IEqualityComparer<T>`: defines methods by which two objects of the same type are compared for equality

are implemented by collection classes in the `System.Collections.Generic` namespace:
 
### Required namespaces

```csharp
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
```

### Collection types C#

- Array
 
```csharp
ArrayList objectList = 
new ArrayList() 
{ 1, 2, "string", 'c', 2.0f };
```

- Singly linked list
`List<T>`: sequential list. Implements interfaces `IList<T>, ICollection<T>, IEnumerable<T>` 

```csharp
List<int> numbers = 
new List<int>() { 1, 2, 3, 45 };
``` 
 
`SortedSet<T>`: a sorted collection of objects of the same type. Implements interfaces `ICollection<T>, ISet<T>, IEnumerable<T>`

`SortedList<TKey, TValue>`:stores sets of key-value pairs sorted by key. Implements interfaces `ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>`

- Doubly linked list
`LinkedList<T>`: Doubly linked list. Implements interfaces `ICollection<T> , IEnumerable<T>`

```csharp
LinkedList<int> numbers1 = 
new LinkedList<int>();
```

- Stack
`Stack<T>`: stack of similar objects. Implements interfaces `ICollection<T> , IEnumerable<T>`
```csharp
Stack<int> numbers3 = 
new Stack<int>();
```
- Hash table
`Hashtable` interfaces are implemented `IDictionary, ICollection, IEnumerable, ISerializable, IDeserializationCallback и ICloneable`
```csharp
Hashtable htbl = new Hashtable();
htbl.Add("name", "key123");
```
- Bit array
`BitArray(byte[] bytes)`
`And(),Get(),Not(),Or(),Set(),SetAll(),Xor()`

`BitVector32`
`CreateMask()`
`CreateSelection()`
 
```csharp
BitArray bits1 = new BitArray(10);
var bits2 = new BitVector32 () ;
```
 
- Queue
`Queue<T>`: FIFO("first in, first out"). Implements interfaces `ICollection, IEnumerable<T>`
```csharp
Queue<int> numbers2 = 
new Queue<int>();
```
 
- Dictionary 
`Dictionary<TKey, TValue>`: "key-value". Implements interfaces `ICollection<T>, IEnumerable<T>, IDictionary<TKey, TValue>`
```csharp
Dictionary<int, string> countries = 
new Dictionary<int, string>(5);
```
`SortedDictionary<TKey, TValue>`: stores sets of key-value pairs sorted by key. Similar to the `SortedList<TKey, TValue>` class, the main differences are only in memory usage and speed of insertion and deletion
 
- Ways to create collections
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

### Iterators and the yield statement

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