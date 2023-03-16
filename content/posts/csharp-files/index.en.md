+++
author = "elkrot"
title = "Files C#"
date = "2023-03-12"
description = "C# files. Working with classes FileStream, StreamReader, StreamWriter, BinaryReader, BinaryWriter"
tags = [
    "csharp",
	"files"
]
+++
 
Examples of working with binary and text files C# <!--more-->

Creation methods:
-----------------
```csharp
FileStream(string filename, FileMode mode) ,
FileMode(Append,Create,CreateNew,Open,OpenOrCreate,Truncate)
File.Open(string file, FileMode mode),
File.OpenRead(string file), File.OpenWrite(string file);
```
Main properties: Length, Position
```csharp
Main methods: CopyTo(Stream destination),
int Read(byte[] array, int offset, int count),
long Seek(long offset, SeekOrigin origin),
void Write(byte[] array, int offset, int count)
ValueTask WriteAsync(byte[] array, int offset, int count),
Task CopyToAsync(Stream destination)
```
Helper classes: **StreamReader** and **StreamWriter** text
**BinaryWriter**, **BinaryReader** binary data
```csharp
SeekOrigin.Begin: the beginning of the file, SeekOrigin.End: the end of the file, SeekOrigin.Current: the current position in the file
fstream.Seek(-5, SeekOrigin.End);
```
Ways to use:
----------------------
```csharp
try
{
     fstream=
new FileStream(@"f.dat",
FileMode.OpenOrCreate);
}
catch(Exceptionex)
{
}
finally
{
     if (fstream != null)
         fstream.Close();
}
```
or using
```csharp
using (var fs =
   new FileStream(@"filePath",
   FileMode…, FileAccess…))

{

}
```


## Working with text files

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

using(varfsr=
        new FileStream(@"ft.txt", FileMode.Open,
        FileAccess.Read))
{
using (var sr= new StreamReader(fsr))
{
varstr = sr.ReadLine();
Console Write(str);
}
}
```

## Working with binary files

```csharp
using (var fs = new FileStream(@"fb.bin", FileMode.OpenOrCreate, FileAccess.Write)){
   using (var bw = new BinaryWriter(fs))
  {
      bw Write((int)200);
  }
}
using (var fs = File.OpenRead(@"fb.bin")){
   using (var br = new BinaryReader(fs)){
     varv = br.ReadInt32();
     Console.WriteLine(v);
   }
}
```
- [files.workbook](https://drive.google.com/file/d/1kcefBU4FVkmcGuIkhRxE_G0GRcQ31eWX/view?usp=sharing)

