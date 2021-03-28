+++
author = "elkrot"
title = "Структуры C#"
date = "2021-03-27"
description = "Структуры C#"
tags = [
    "csharp"
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
var tuple = (5, 10);
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
            Console.WriteLine($"Name: {name}  Age: {age}");
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
        public string Name {get {return _name;} set {_name =value;}}
        public int Age {get {return _age;} }

        public User(string name,int age){
        _name =name;
        _age = age;
        }
        public void DisplayInfo( params int[]  ar)
        {
            foreach(var item in ar){
            Console.WriteLine(item);    
            }
            Console.WriteLine($"Name: {Name}  Age: {Age}");
        }
    }
            User tom = new User("Serg",44);
            tom.DisplayInfo(1,2,3,4);
```

# Коллекции

```csharp
using System.Collections;
using System.Collections.Generic;
ArrayList objectList = 
new ArrayList() { 1, 2, "string", 'c', 2.0f };
List<int> numbers = new List<int>() { 1, 2, 3, 45 };
LinkedList<int> numbers1 = new LinkedList<int>();
Queue<int> numbers2 = new Queue<int>();
Stack<int> numbers3 = new Stack<int>();
Dictionary<int, string> countries = 
new Dictionary<int, string>(5);
IEnumerable<int> squares = 
Enumerable.Range(1, 10).Select(x => x * x);	
Random.Range(1,10);
```

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

Dictionary\<TKey, TValue>: класс коллекции, хранящей наборы пар "ключ-значение". Реализует интерфейсы ICollection<T>, IEnumerable<T>, IDictionary\<TKey, TValue>

LinkedList<T>: класс двухсвязанного списка. Реализует интерфейсы ICollection<T> и IEnumerable\<T>

Queue<T>: класс очереди объектов, работающей по алгоритму FIFO("первый вошел -первый вышел"). Реализует интерфейсы ICollection, IEnumerable\<T>

SortedSet<T>: класс отсортированной коллекции однотипных объектов. Реализует интерфейсы ICollection<T>, ISet<T>, IEnumerable\<T>

SortedList\<TKey, TValue>: класс коллекции, хранящей наборы пар "ключ-значение", отсортированных по ключу. Реализует интерфейсы ICollection<T>, IEnumerable<T>, IDictionary\<TKey, TValue>

SortedDictionary\<TKey, TValue>: класс коллекции, хранящей наборы пар "ключ-значение", отсортированных по ключу. В общем похож на класс SortedList\<TKey, TValue>, основные отличия состоят лишь в использовании памяти и в скорости вставки и удаления

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
