+++
author = "elkrot"
title = "Файлы C#"
date = "2021-05-02"
description = "Файлы C#. Работа с классами FileStream, StreamReader, StreamWriter, BinaryReader, BinaryWriter"
tags = [
    "csharp",
	"files"
]
+++
 
Примеры работы с бинарными и текстовыми файлами C# <!--more-->

Способы создания: 
-----------------

FileStream(string filename, FileMode mode) , FileMode(Append,Create,CreateNew,Open,OpenOrCreate,Truncate)
File.Open(string file, FileMode mode), File.OpenRead(string file), File.OpenWrite(string file);
Основные свойства: Length, Position
Основные методы: CopyTo(Stream destination),int Read(byte[] array, int offset, int count),long Seek(long offset, SeekOrigin origin), void Write(byte[] array, int offset, int count)
ValueTask WriteAsync(byte[] array, int offset, int count), Task CopyToAsync(Stream destination)
Вспомогательные классы: **StreamReader** и **StreamWriter** текст
**BinaryWriter**, **BinaryReader** бинарные данные
SeekOrigin.Begin: начало файла, SeekOrigin.End: конец файла, SeekOrigin.Current: текущая позиция в файле
fstream.Seek(-5, SeekOrigin.End);

Способы использования:
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
    if (fstream != null)
        fstream.Close();
}
```
или using
```csharp
using (var fs = 
  new FileStream(@"filePath", 
  FileMode…, FileAccess…))

{

}
```


## Работа с текстовыми файлами

```csharp
using System;
using System.Text;
using System.Threading.Tasks;
using System.IO;

FileStream fs = 
new FileStream(@"ft.txt", 
FileMode.OpenOrCreate, FileAccess.Write);
using (var sw = new StreamWriter(fs)){
    sw.WriteLine(@"text\file");
}
fs.Close();

using (var fsr = 
       new FileStream(@"ft.txt", FileMode.Open, 
       FileAccess.Read))
	{
		using (var sr= new StreamReader(fsr))
		{
			var str = sr.ReadLine(); 
			Console.Write(str); 
		}  
	}
```

## Работа с бинарными файлами

```csharp
using (var fs = new FileStream(@"fb.bin", FileMode.OpenOrCreate, FileAccess.Write)){
  using (var bw = new BinaryWriter(fs))
 {
     bw.Write((int)200);
 }   
}
using (var fs = File.OpenRead(@"fb.bin")){
  using (var br = new BinaryReader(fs)){
    var v = br.ReadInt32();
    Console.WriteLine(v);     
  }
}
```
- [files.workbook](https://drive.google.com/file/d/1kcefBU4FVkmcGuIkhRxE_G0GRcQ31eWX/view?usp=sharing)

