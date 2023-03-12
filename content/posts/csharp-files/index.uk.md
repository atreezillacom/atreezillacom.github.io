+++
author = "elkrot"
title = "Файлы C#"
date = "2023-03-12"
description = "Файли C# Робота з класами FileStream, StreamReader, StreamWriter, BinaryReader, BinaryWriter"
tags = [
    "csharp",
	"files"
]
+++
 
Приклади роботи з бінарними та текстовими файлами C# <!--more-->

Способи створення:
-----------------
```csharp
FileStream(string filename, FileMode mode),
FileMode(Append,Create,CreateNew,Open,OpenOrCreate,Truncate)
File.Open(string file, FileMode mode),
File.OpenRead(string file), File.OpenWrite(string file);

Основні властивості: Length, Position

Основні методи: CopyTo (Stream destination),
int Read(byte[] array, int offset, int count),
long Seek(long offset, SeekOrigin origin),
void Write(byte[] array, int offset, int count)
ValueTask WriteAsync(byte[] array, int offset, int count),
Task CopyToAsync(Stream destination)

Допоміжні класи: **StreamReader** та **StreamWriter** текст
**BinaryWriter**, **BinaryReader** бінарні дані

SeekOrigin.Begin: початок файлу, SeekOrigin.End: кінець файлу, SeekOrigin.Current: поточна позиція у файлі
fstream.Seek(-5, SeekOrigin.End);
```
Способи використання:
----------------------
```csharp
try
{
     fstream =
new FileStream(@"f.dat",
FileMode.OpenOrCreate);
}
catch(Exception ex)
{
}
finally
{
     if (fstream! = null)
         fstream.Close();
}
```
або using
```csharp
using (var fs =
   new FileStream(@"filePath",
   FileMode ..., FileAccess ...))

{

}
````


## Робота з текстовими файлами

```csharp
using System;
використовуючи System.Text;
використовуючи System.Threading.Tasks;
using System.IO;

FileStream fs =
new FileStream(@"ft.txt",
FileMode.OpenOrCreate, FileAccess.Write);
using (var sw = новий StreamWriter(fs)){
     sw.WriteLine(@"text\file");
}
fs.Close();

using (var fsr =
        new FileStream(@"ft.txt", FileMode.Open,
        FileAccess.Read))
{
using (var sr = новий StreamReader (fsr))
{
var str = sr.ReadLine();
Console.Write(str);
}
}
```

## Робота з бінарними файлами

```csharp
using (var fs = new FileStream(@"fb.bin", FileMode.OpenOrCreate, FileAccess.Write)){
   using (var bw = New BinaryWriter(fs))
  {
      bw.Write((int)200);
  }
}
using (var fs = File.OpenRead(@"fb.bin")){
   using (var br = New BinaryReader(fs)){
     var v = br.ReadInt32();
     Console.WriteLine(v);
   }
}
```
- [files.workbook](https://drive.google.com/file/d/1kcefBU4FVkmcGuIkhRxE_G0GRcQ31eWX/view?usp=sharing)

