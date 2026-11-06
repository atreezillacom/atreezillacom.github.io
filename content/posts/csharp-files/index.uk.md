+++
author = "elkrot"
title = "Робота з файлами в C#: FileStream, StreamReader і BinaryReader"
date = "2023-03-12"
description = "Як читати й записувати текстові та бінарні файли в C#: FileStream, StreamReader, StreamWriter, BinaryReader, режими FileMode та async."
tags = [
    "csharp",
    "files",
    "FileStream",
    "StreamReader",
    "BinaryReader"
]
category = "C#"
draft = false
image = "csharp-files.webp"
+++
У C# для роботи з файлами використовують класи простору імен `System.IO`. За їх допомогою можна створювати файли, відкривати їх, читати й записувати дані, копіювати вміст та змінювати позицію читання або запису.<!--more-->

# Робота з файлами в C# — читання та запис текстових і бінарних даних
Для низькорівневої роботи з потоком байтів призначений клас **`FileStream`**. Якщо потрібно працювати з текстом, зручніше використовувати **`StreamReader`** і **`StreamWriter`**. Для читання та запису типізованих бінарних значень підходять **`BinaryReader`** і **`BinaryWriter`**.

У цій статті розглянемо основні способи роботи з файлами в C#, приклади читання та запису, режими відкриття файлів, асинхронні операції й обробку помилок.

<!--more-->

## 1. Основні класи для роботи з файлами в C#

Класи `FileStream`, `StreamReader`, `StreamWriter`, `BinaryReader` і `BinaryWriter` належать до простору імен `System.IO`.

| Клас | Призначення |
|---|---|
| `FileStream` | Читання та запис файлу як послідовності байтів |
| `StreamReader` | Читання тексту з потоку |
| `StreamWriter` | Запис тексту в потік |
| `BinaryReader` | Читання типізованих бінарних значень |
| `BinaryWriter` | Запис типізованих бінарних значень |
| `File` | Статичні методи для створення, копіювання, видалення та читання файлів |
| `Directory` | Операції з каталогами |

Підключіть потрібний простір імен:

```csharp
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
```

### Коли який клас використовувати

- **`FileStream`** — коли потрібен контроль над байтами, позицією в потоці або параметрами доступу.
- **`StreamReader` / `StreamWriter`** — для звичайних текстових файлів, наприклад `.txt`, `.csv` або логів.
- **`BinaryReader` / `BinaryWriter`** — для читання та запису бінарних даних у визначеному порядку.
- **`File`** — для простих операцій, коли не потрібен ручний контроль над потоком.

## 2. Створення та відкриття файлів за допомогою FileStream

`FileStream` відкриває файл і надає доступ до його вмісту у вигляді байтів.

Основний конструктор:

```csharp
var fs = new FileStream(
    "data.dat",
    FileMode.OpenOrCreate,
    FileAccess.ReadWrite
);
```

Також можна використовувати статичні методи класу `File`:

```csharp
File.Open("data.dat", FileMode.Open);
File.OpenRead("data.dat");
File.OpenWrite("data.dat");
```

`File.OpenRead()` відкриває файл для читання, а `File.OpenWrite()` — для запису. Зверніть увагу: `File.OpenWrite()` не очищає наявний файл повністю. Якщо потрібно перезаписати його вміст, використовуйте `FileMode.Create` або відповідний метод класу `File`.

### 2.1. Режими FileMode

Параметр `FileMode` визначає, як саме відкривати або створювати файл.

| Значення | Опис |
|---|---|
| `FileMode.CreateNew` | Створює новий файл. Якщо файл уже існує, виникає помилка |
| `FileMode.Create` | Створює файл або перезаписує наявний |
| `FileMode.Open` | Відкриває лише наявний файл |
| `FileMode.OpenOrCreate` | Відкриває файл або створює його, якщо він відсутній |
| `FileMode.Truncate` | Відкриває наявний файл і видаляє його вміст |
| `FileMode.Append` | Відкриває файл для додавання даних у кінець або створює його |

Наприклад, щоб створити файл або повністю перезаписати його:

```csharp
using var fs = new FileStream(
    "data.txt",
    FileMode.Create,
    FileAccess.Write
);
```

Щоб додати дані в кінець файлу:

```csharp
using var fs = new FileStream(
    "data.txt",
    FileMode.Append,
    FileAccess.Write
);
```

### 2.2. Права доступу FileAccess

`FileAccess` визначає, які операції дозволені для відкритого файлу:

- `FileAccess.Read` — тільки читання;
- `FileAccess.Write` — тільки запис;
- `FileAccess.ReadWrite` — читання та запис.

Права доступу потрібно обирати відповідно до задачі. Наприклад, якщо файл відкривається лише для читання, використовуйте `FileAccess.Read`.

### 2.3. Основні властивості FileStream

| Властивість | Опис |
|---|---|
| `Length` | Розмір потоку в байтах |
| `Position` | Поточна позиція читання або запису |
| `CanRead` | Чи підтримує потік читання |
| `CanWrite` | Чи підтримує потік запис |
| `CanSeek` | Чи можна змінювати позицію в потоці |

Приклад отримання розміру файлу та поточної позиції:

```csharp
using var fs = File.OpenRead("data.dat");

Console.WriteLine($"Розмір: {fs.Length} байт");
Console.WriteLine($"Поточна позиція: {fs.Position}");
```

### 2.4. Основні методи FileStream

| Метод | Призначення |
|---|---|
| `Read(byte[] array, int offset, int count)` | Читає байти в масив |
| `Write(byte[] array, int offset, int count)` | Записує байти з масиву |
| `Seek(long offset, SeekOrigin origin)` | Змінює позицію в потоці |
| `CopyTo(Stream destination)` | Копіює дані в інший потік |
| `ReadAsync(...)` | Асинхронно читає дані |
| `WriteAsync(...)` | Асинхронно записує дані |
| `CopyToAsync(Stream destination)` | Асинхронно копіює дані |

Метод `Read()` може повернути менше байтів, ніж було запитано. Тому для гарантованого читання заданої кількості байтів потрібно перевіряти результат або використовувати цикл.

## 3. Переміщення по файлу: Seek і SeekOrigin

Метод `Seek()` змінює поточну позицію в потоці:

```csharp
fs.Seek(offset, SeekOrigin.Begin);
```

Параметр `SeekOrigin` визначає точку, від якої обчислюється зміщення:

- `SeekOrigin.Begin` — від початку файлу;
- `SeekOrigin.Current` — від поточної позиції;
- `SeekOrigin.End` — від кінця файлу.

Наприклад, щоб перейти на п'ять байтів перед кінцем файлу:

```csharp
using var fs = File.OpenRead("data.dat");

if (fs.Length >= 5)
{
    fs.Seek(-5, SeekOrigin.End);
    Console.WriteLine($"Позиція: {fs.Position}");
}
```

Зміщення вимірюється в байтах, а не в символах. Для тексту це важливо: один символ може займати кілька байтів залежно від кодування.

## 4. Як правильно закривати файли в C#

Після завершення роботи з файлом потік потрібно закрити та звільнити пов'язані ресурси. Найзручніше використовувати `using` або `using var`.

```csharp
using (var fs = new FileStream(
    "data.dat",
    FileMode.OpenOrCreate,
    FileAccess.ReadWrite))
{
    // Робота з файлом
}
```

Або скорочений синтаксис:

```csharp
using var fs = new FileStream(
    "data.dat",
    FileMode.OpenOrCreate,
    FileAccess.ReadWrite
);

// Робота з файлом
```

Після виходу з області видимості ресурс буде автоматично звільнений. Це надійніше, ніж викликати `Close()` вручну в блоці `finally`.

Якщо потрібно обробити помилки, використовуйте `try-catch` разом із `using`:

```csharp
try
{
    using var fs = new FileStream(
        "data.dat",
        FileMode.Open,
        FileAccess.Read
    );

    Console.WriteLine($"Розмір файлу: {fs.Length} байт");
}
catch (FileNotFoundException)
{
    Console.WriteLine("Файл не знайдено.");
}
catch (UnauthorizedAccessException)
{
    Console.WriteLine("Немає прав доступу до файлу.");
}
catch (IOException ex)
{
    Console.WriteLine($"Помилка введення-виведення: {ex.Message}");
}
```

Не варто залишати порожній `catch`: він приховує причину помилки та ускладнює пошук проблем.

## 5. Робота з текстовими файлами в C#

Для текстових файлів зазвичай використовують `StreamWriter` для запису та `StreamReader` для читання.

### 5.1. Запис тексту за допомогою StreamWriter

```csharp
using System.IO;
using System.Text;

string path = "text.txt";

using (var writer = new StreamWriter(
    path,
    append: false,
    encoding: Encoding.UTF8))
{
    writer.WriteLine("Перший рядок");
    writer.WriteLine("Другий рядок");
}
```

Параметр `append: false` означає, що файл буде перезаписано. Якщо передати `append: true`, текст додаватиметься в кінець файлу:

```csharp
using var writer = new StreamWriter(
    "text.txt",
    append: true,
    encoding: Encoding.UTF8
);

writer.WriteLine("Новий рядок");
```

Методи `Write()` і `WriteLine()` відрізняються тим, що `WriteLine()` після запису додає символ завершення рядка.

### 5.2. Читання тексту за допомогою StreamReader

Прочитати файл повністю можна так:

```csharp
using System.IO;
using System.Text;

string path = "text.txt";

using var reader = new StreamReader(path, Encoding.UTF8);
string content = reader.ReadToEnd();

Console.WriteLine(content);
```

Якщо файл великий, зручніше читати його рядок за рядком:

```csharp
using var reader = new StreamReader("text.txt", Encoding.UTF8);

string? line;

while ((line = reader.ReadLine()) != null)
{
    Console.WriteLine(line);
}
```

Такий підхід не завантажує весь вміст файлу в пам'ять одночасно.

### 5.3. Простий спосіб роботи з текстом через File

Якщо не потрібен контроль над потоком, можна використовувати готові методи класу `File`:

```csharp
using System.IO;
using System.Text;

// Записати текст у файл
File.WriteAllText("text.txt", "Привіт, C#!", Encoding.UTF8);

// Додати текст у кінець файлу
File.AppendAllText("text.txt", Environment.NewLine + "Новий рядок", Encoding.UTF8);

// Прочитати весь файл
string content = File.ReadAllText("text.txt", Encoding.UTF8);

// Прочитати всі рядки
string[] lines = File.ReadAllLines("text.txt", Encoding.UTF8);
```

Методи `File.ReadAllText()` і `File.WriteAllText()` зручні для невеликих файлів. Для великих файлів краще розглянути потокове читання та запис.

## 6. Робота з бінарними файлами в C#

Бінарний файл містить дані у вигляді байтів. На відміну від текстового файлу, його вміст не обов'язково можна коректно прочитати звичайним текстовим редактором.

Для запису типізованих значень використовують `BinaryWriter`, а для читання — `BinaryReader`.

### 6.1. Запис бінарних даних через BinaryWriter

```csharp
using System.IO;

using (var fs = new FileStream(
    "data.bin",
    FileMode.Create,
    FileAccess.Write))
using (var writer = new BinaryWriter(fs))
{
    writer.Write(200);
    writer.Write(15.5);
    writer.Write(true);
    writer.Write("Hello, C#");
}
```

У прикладі послідовно записуються ціле число, число з плаваючою комою, логічне значення та рядок.

### 6.2. Читання бінарних даних через BinaryReader

Під час читання важливо дотримуватися того самого порядку та типів, у яких дані були записані:

```csharp
using System.IO;

using (var fs = File.OpenRead("data.bin"))
using (var reader = new BinaryReader(fs))
{
    int number = reader.ReadInt32();
    double price = reader.ReadDouble();
    bool isActive = reader.ReadBoolean();
    string message = reader.ReadString();

    Console.WriteLine(number);
    Console.WriteLine(price);
    Console.WriteLine(isActive);
    Console.WriteLine(message);
}
```

`BinaryWriter` і `BinaryReader` не створюють автоматично універсальну структуру даних. Програма повинна знати порядок полів і типи значень, які зберігаються у файлі.

## 7. Асинхронна робота з файлами в C#

Для операцій введення-виведення, які можуть тривати довго, можна використовувати асинхронні методи. Вони дають змогу не блокувати потік виконання на час очікування завершення операції.

### 7.1. Асинхронне читання текстового файлу

```csharp
using System.IO;
using System.Text;
using System.Threading.Tasks;

static async Task ReadFileAsync(string path)
{
    using var reader = new StreamReader(path, Encoding.UTF8);

    string content = await reader.ReadToEndAsync();
    Console.WriteLine(content);
}
```

### 7.2. Асинхронний запис тексту

```csharp
using System.IO;
using System.Text;
using System.Threading.Tasks;

static async Task WriteFileAsync(string path, string content)
{
    await File.WriteAllTextAsync(path, content, Encoding.UTF8);
}
```

Виклик методів із `async`-контексту:

```csharp
await WriteFileAsync("async.txt", "Асинхронний запис у файл");
await ReadFileAsync("async.txt");
```

Асинхронність особливо корисна в застосунках із графічним інтерфейсом, вебзастосунках і сервісах, де важливо не блокувати потоки під час очікування операцій із файлами.

## 8. Копіювання файлів і робота з каталогами

Для типових файлових операцій часто достатньо класів `File` і `Directory`.

```csharp
using System.IO;

// Копіювання файлу
File.Copy("source.txt", "copy.txt", overwrite: true);

// Переміщення або перейменування
File.Move("copy.txt", "renamed.txt", overwrite: true);

// Перевірка існування файлу
if (File.Exists("renamed.txt"))
{
    Console.WriteLine("Файл існує");
}

// Видалення файлу
File.Delete("renamed.txt");

// Створення каталогу
Directory.CreateDirectory("data");
```

Перед операціями з файлами враховуйте права доступу та можливість того, що файл або каталог уже існує чи використовується іншим процесом.

## 9. Типові помилки під час роботи з файлами C#

Під час роботи з файловою системою найчастіше виникають такі проблеми:

1. **`FileNotFoundException`** — програма намагається відкрити файл, якого не існує.
2. **`DirectoryNotFoundException`** — у шляху до файлу відсутній каталог.
3. **`UnauthorizedAccessException`** — застосунок не має потрібних прав доступу.
4. **`IOException`** — загальна помилка введення-виведення, наприклад проблема під час читання або запису.
5. **`EndOfStreamException`** — спроба прочитати дані після завершення потоку.

Практичні рекомендації:

- Використовуйте `using` для автоматичного звільнення ресурсів.
- Перевіряйте існування файлів і каталогів, якщо це важливо для логіки програми.
- Обирайте правильні `FileMode` та `FileAccess`.
- Явно задавайте кодування текстових файлів, якщо важлива сумісність між системами.
- Не завантажуйте великі файли повністю в пам'ять без потреби.
- Для тривалих операцій розглядайте асинхронні методи.
- Не приховуйте винятки порожніми блоками `catch`.
- Не довіряйте шляхам до файлів, отриманим від користувача: перевіряйте їх, щоб уникнути доступу до небажаних каталогів.

## 10. Що вибрати: FileStream, StreamReader чи BinaryReader?

| Завдання | Рекомендований клас або метод |
|---|---|
| Прочитати невеликий текстовий файл | `File.ReadAllText()` |
| Записати невеликий текстовий файл | `File.WriteAllText()` |
| Послідовно читати великий текстовий файл | `StreamReader` |
| Записувати текст у потік | `StreamWriter` |
| Працювати з байтами напряму | `FileStream` |
| Записувати типізовані бінарні значення | `BinaryWriter` |
| Читати типізовані бінарні значення | `BinaryReader` |
| Асинхронно читати або записувати текст | `File.ReadAllTextAsync()`, `File.WriteAllTextAsync()` |

## 11. Часті запитання про роботу з файлами в C#

### Що таке FileStream у C#?

`FileStream` — це клас із простору імен `System.IO`, який забезпечує читання та запис файлу як потоку байтів. Він дає змогу керувати доступом до файлу, позицією в потоці та операціями введення-виведення.

### Чим відрізняються StreamReader і FileStream?

`FileStream` працює з байтами, а `StreamReader` перетворює байти потоку на текст із використанням певного кодування. `StreamReader` часто використовують разом із `FileStream`, але він також може самостійно відкрити файл за шляхом.

### У чому різниця між StreamWriter і BinaryWriter?

`StreamWriter` призначений для запису тексту, а `BinaryWriter` — для запису типізованих значень у бінарному форматі. Вибір залежить від того, чи потрібно зберігати читабельний текст, чи компактні структуровані дані.

### Як додати текст у кінець файлу в C#?

Використайте `StreamWriter` із параметром `append: true` або метод `File.AppendAllText()`:

```csharp
File.AppendAllText("text.txt", "Новий рядок" + Environment.NewLine);
```

### Як перезаписати файл у C#?

Для тексту можна застосувати `File.WriteAllText()`. Для `FileStream` використовуйте `FileMode.Create`, який створює файл або перезаписує наявний.

### Як прочитати файл повністю?

Для невеликого текстового файлу підійде `File.ReadAllText()`. Якщо потрібне потокове читання або файл великий, використовуйте `StreamReader` і читайте його частинами чи рядками.

## Висновок

У C# є кілька способів роботи з файлами, і кожен із них підходить для певних задач. `FileStream` забезпечує низькорівневу роботу з байтами, `StreamReader` і `StreamWriter` спрощують читання та запис тексту, а `BinaryReader` і `BinaryWriter` дають змогу працювати з типізованими бінарними даними.

Для простих операцій використовуйте готові методи класу `File`. Для великих файлів, потокової обробки та точного контролю над доступом обирайте відповідні класи потоків. Не забувайте про `using`, коректне кодування та обробку винятків.

## Додаткові матеріали

- [Практичні завдання та приклади роботи з файлами (files.workbook)](https://drive.google.com/file/d/1kcefBU4FVkmcGuIkhRxE_G0GRcQ31eWX/view?usp=sharing)
- [Документація Microsoft: File and stream I/O](https://learn.microsoft.com/dotnet/standard/io/)
- [Документація Microsoft: FileStream](https://learn.microsoft.com/dotnet/api/system.io.filestream)
- [Документація Microsoft: StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)
- [Документація Microsoft: BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)
