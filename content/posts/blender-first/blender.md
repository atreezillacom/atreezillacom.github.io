+++
author = "elkrot"
title = "blender 3d"
date = "2026-10-15"
description = "Blender"
tags=[
     "csharp",
"strings"
]
+++
На камеру- Вид серху - Align Active Camera ToView - Ctrl+Alt+Numpad 0
Camer - Output properties - Dimension - 1024*1024
select Camera+Plain - View Align Camera to Selected
Select Plane - EditMode - COpy around Shift+D + Ctrl
m - Merge by Distance
Add mesh on plane - select cube+plane - Ctrl +p - Object
Plane - Object - Duplication - Instancing- Faces
Edit Mesh - Sculpting- Dyntopo - Set Detail Size
Modifiers - Decimate
Overlay - Statistics
New Material - 

Render Normal Map:
Geometry (Normal) - Vector Curves (vector) - Gamma (Color) x,y,z = y =0 - Emission - (Surface)Output
Gamma =2.2
Render semples =32
Карту нормалей пропускаем через нод Normal
Image - Bump - Normal in Principal BSDF


Height Map Карта высот нужна для смешивания:
Geometry (Position)  - (Vector)Separate XYZ - z - ColoRamp
Сделать так, чтобы наивысшая часть была белой наинизшая черной
Двигаем черный пока еле видно самую высокую часть (Белый влево)
PNG - 8bit


Albedo Map Цвета (Base Color):
Noize Texture (Fac) - (Fac) ColoRamp (Color)Цветной - Emission

Roughness Map шероховатость :
Noize Texture (Fac) - (Fac) ColoRamp (Color)Черно Белый - Emission
Белый шероховатость больше

Для смешивания
Image (height_map) Color - (Fac) ColorRamp(Color) - (Fac) Mix Shader (Texture 1, Texture2) , Регулируем ползунками Color Ramp


Apply
Object


--------------------------------------------------
Раскидать материалы, Сделать развертки, Добавить текстуры
Subdivide 75-100
Создать группы вершин
Добавить модификатор Displace - new - Coordinates -UV - UVMap - UVMap
Выбрать группу вершин
Вкладка текстуры - выбрать Height Map
Вернуться в модификатор midlevel =0, Strength = 0.1 -0.5

Скульптим F Shift

Дублируем, модификатор - Decimate - Ratio = 0.005

Выбрать весь меш - Clear sim - Smart UV Project - Island Margin 0.01
Сздать новую текстуру
Для лополи создать новый материал
Применить Smooth Shading
Выбрать Cycles  
select hi - lo - select node lo
Bake - Normal - Selected To Active - Ray Distance =0.05

for unreal RGB Green = -Y

New Texture
Bake - Difuse - Отключить  Direct indirect
Ray Distance = 0.01
Color Space = Non Color for normal
--------------------

Текстура с двух сторон

Копировать ноды , добавить Mix - Add Geometry - Backing to Fac Mix
Mzpping 2 texture Rotation  = 180
-------------------

Сделать текстуру квадратной степень 2 например 640*640
Settings - Docker - Brush Presets
Find Clone 
W - Режим текстуры
Ctrl+Click
Сохранить

---------------HDR
create cube 
Normals flip
Camera - Panoramic, Panorama Type = Equirectangular
add plain + materials planes - emission, cube - black glossy+defuse+Layer weight - fac

Render Color depth 8 bit - RGB semples 128
save exf


essencial pipeline

---------------------