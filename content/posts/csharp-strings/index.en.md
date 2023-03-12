+++
author = "elkrot"
title = "Строки C#"
date = "2023-03-12"
description = "C# strings. String initialization. formats used"
tags=[
     "csharp",
"strings"
]
+++
 
C# String Examples<!--more-->

# String initialization

```csharp
string s1 = "hello";
string s2 = null;
 
string s3 = new String('a', 6);
// result will be the string "aaaaaa"
string s4 =
new String(
new char[]{'w', 'o', 'r', 'l', 'd'});
var s5 = String.Empty;
if (s5.IsNullOrWhiteSpace()){
Console.WriteLine([Empty String]);
}
```

Main methods of the String class:

* **Compare**,**CompareOrdinal**: compares two strings
* **Contains**: whether the substring is contained in the string
* **Concat**: concatenate strings
* **CopyTo**: copies to another line
* **EndsWith**: whether end of string matches substring
* **Format**: formats a string
* **IndexOf**: index of first occurrence
* **Insert**: inserts a substring into a string
* **Join**: joins array elements
* **LastIndexOf**: index of last occurrence
* **Replace**: replaces
* **Split**: splits into an array
* **Substring**: extracts a substring from a string
* **ToLower**: to lowercase
* **ToUpper**: upper case
* **Trim**: remove spaces

```csharp
long number1 = 19876543210;
Console.WriteLine(
number1.ToString("+# (###) ###-##-##"));
// +1 (987) 654-32-10
Console.WriteLine(
$"{number1:+# ### ### ## ##}");
// +1 987 654 32 10
double number = 23.7;
stringresult =
   String.Format("{0:C}", number);
```

#### All used formats:

* C / c currency format
* D / d Integer format
* E / e Exponential notation
* F / f Fixed-point decimal format
* G / g Specifies the shorter of the two formats: F or E
* N/n fixed-point decimal format
* p / p Specifies whether a percent sign is displayed next to a number
* X / x Hexadecimal number format


- \' Single quote
-\" double quote
- \\ backslash
- \0 Null
- \a Warning
-\b backspace
- \f Form feed
- \n Newline
- \r carriage return
- \t Horizontal tab
- \v Vertical tab
- \u (UTF-16) (0000 - FFFF; \u00E7 = "ç")
- \U (UTF-32) ( 000000 - 10FFFF; \U0001F47D = "👽")
- \x \xH[H][H][H] ( 0 - FFFF; \x00E7 or \x0E7 or \xE7 = "ç")
{{< difrx "https://dotnetfiddle.net/widget/7a1kAg" >}}
