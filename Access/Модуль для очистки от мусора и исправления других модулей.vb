' Модуль для очистки от мусора и исправления других модулей.	 	 
' Автор Юрий Шерман   
' 26.12.2001 г.
' ...Тогда я повторил операцию со всеми общими модулями. Результат - база сократилась с 24 до 12 Мб!
' Автор: Юрий Шерман
' www.tour-soft.com
' Модуль для очистки от мусора и исправления других модулей.

' Сначала лирика. Как-то, уже давно, закончил я корректировку своего "Туроператора" на А-97, скомпилировал, сжал файл и со вздохом посмотрел его размер - 25 Мб (без данных).
' Дальше его надо было паковать и дважды записывать на дискеты - еще работы на час. Запустил контрольный прогон, и тут программа вылетела на ровном месте - на строке типа i=0 с дурацким сообщением. Ну, это не в первый раз. Модули в Access имеют только внешний вид текста, и у меня часто портятся при корректировке во время исполнения.
' Боролся с этим я обычно методом импорта всей базы. А тут вылетело именно в том модуле, который корректировался. И я решил попробовать сделать попроще. Скопировал его текст в буфер, удалил весь модуль и создал его заново. Скомпилировал, сжал, запустил - никаких ошибок.
' Тут посмотрел на размер файла и поразился - 24 Мб. Сам модуль по тексту явно гораздо меньше. Исчез какой-то мусор. Тогда я повторил операцию со всеми общими модулями. Результат - 15 Мб!
' А у меня модули еще в формах. А их 60 штук. Короче, за два часа я перезаписал все модули форм.
' Результат - база сократилась до 12 Мб!
' Прошло две недели и база снова выросла до 15 Мб.
' Стало ясно - пора чистить. Но снова чистить её вручную охоты не было. И я написал программу, которая скидывает каждый модуль в текстовый файл, уничтожает модуль и создает его заново.

' Сейчас я всегда делаю очистку модулей перед выпуском новой версии.
' Не только для уменьшения размеров базы, но для профилактики скрытых ошибок в структуре модулей.

' Лирика кончилась. Далее идет текст модуля, состоящего из одной программы.
' Модуль должен называться "ClearModules". Только так, иначе программа сотрет сама себя.

' ' Этот модуль должен называться "ClearModules"!
' ________________________________________
Option Compare Text
Option Explicit

' Очистка модулей и запросов от мусора. Версия 1.2
' Комментарий: при корректировке модулей A-97, A-2000
'оставляет мусор,
'который не устраняется стандартными способами
'(Compact, Import).
'
' Российские программисты, WEB:
'http://www.ruprog.webzone.ru
' На сайте имеются другие полезные программы
' (Freeware и Shareware)
' Автор Юрий Шерман, mailto: ruprog-sherman@mtu-net.ru
' FreeWare
'
'ПОРЯДОК ИСПОЛЬЗОВАНИЯ ПРОГРАММЫ
'0. Сделайте на всякий случай копию базы.
'1. Включите модуль ClearModules в состав модулей Вашей
'базы.
'2. Запустите программу ClearMdl, например, из отладчика
'или с помощью F5, предварительно установив курсор на
'исполняемый текст программы.
'3. Сожмите базу данных после окончания работы программы,
'и Вы будете приятно удивлены новым размером Вашей базы.

Public Function ClearMdl()
Dim mdl As Module, arrNames() As String, strName As String
Dim PathTempFile As String, ContainerName As String
Dim i As Long, j As Long, k As Long, m As Long, n As Long
Dim S As String

'Эти константы можно изменять
'имя модуля с этой программой
Const MyModuleName As String = "ClearModules"

'имя временного файла для переписи тектов модулей
Const FileTempName As String = "~Module.txt"

'Разместим временный файл для перекачки модулей в своем каталоге
S = CurrentDb.Name
PathTempFile = Left(S, Len(S) - Len(Dir(S))) + FileTempName

On Error GoTo ErrClear

'Основной цикл по видам контейнеров
For i = 1 To 3
Select Case i
Case 1
ContainerName = "Forms"
Case 2
ContainerName = "Reports"
Case 3
ContainerName = "Modules"
End Select

n = CurrentDb.Containers(ContainerName).Documents.Count - 1
If n < 0 Then GoTo Nexti

'Запоминаем список документов
ReDim arrNames(n)
For j = 0 To n
arrNames(j) = CurrentDb.Containers(ContainerName).Documents(j).Name
Next j

SysCmd acSysCmdInitMeter, ContainerName, (n + 1)

'Цикл по документам
For j = 0 To n

'Открываем модуль, если он есть
strName = arrNames(j)
Select Case i
Case 1
DoCmd.OpenForm strName, acDesign, , , , acHidden
If Not Forms(strName).HasModule Then GoTo Nextj
Set mdl = Forms(strName).Module
Case 2
DoCmd.OpenReport strName, acDesign
If Not Reports(strName).HasModule Then GoTo Nextj
Set mdl = Reports(strName).Module
Case 3
If strName = MyModuleName Then GoTo Nextj
DoCmd.OpenModule strName
Set mdl = Modules(strName)
End Select

'Переписываем модуль в текстовый файл
If Dir(PathTempFile) <> "" Then Kill PathTempFile
Open PathTempFile For Binary Access Write As #1
For k = 1 To mdl.CountOfLines
S = mdl.Lines(k, 1) & Chr(13)
m = m + Len(S) 'счетчик переписанных байтов
Put #1, , S
Next k
Close #1

'Удаляем старый модуль и создаем пустой новый
Select Case i
Case 1
Forms(strName).HasModule = False
DoCmd.Save acForm, strName
Forms(strName).HasModule = True
Set mdl = Forms(strName).Module
Case 2
Reports(strName).HasModule = False
DoCmd.Save acReport, strName
Reports(strName).HasModule = True
Set mdl = Reports(strName).Module
Case 3
If mdl.Type Then
DoCmd.RunCommand acCmdNewObjectClassModule
Else
DoCmd.RunCommand acCmdNewObjectModule
End If
S = Modules(Modules.Count - 1).Name
DoCmd.Close acModule, strName
DoCmd.DeleteObject acModule, strName
DoCmd.Save acModule, S
DoCmd.Close acModule, S
DoCmd.Rename strName, acModule, S
DoCmd.OpenModule strName
Set mdl = Modules(strName)
End Select

'Удаляем в новом модуле стандартные строки
mdl.DeleteLines 1, mdl.CountOfLines

'Загружаем текст модуля из файла
mdl.AddFromFile PathTempFile

Nextj:
'Записываем обновленный модуль в базу
Select Case i
Case 1: DoCmd.Close acForm, strName, acSaveYes
Case 2: DoCmd.Close acReport, strName, acSaveYes
Case 3: If strName <> MyModuleName Then DoCmd.Close acModule, strName, acSaveYes
End Select
SysCmd acSysCmdUpdateMeter, (j + 1)
Next j
Nexti:
Next i

If Dir(PathTempFile) <> "" Then Kill PathTempFile
SysCmd acSysCmdClearStatus
MsgBox "Конец работы." + vbCrLf + " Переписано " & Format(m, "# ### ### ### ##0") & " байт.", vbInformation
Exit Function

ErrClear:
MsgBox "Ошибка при обработке: ContainerName= " & ContainerName & ", DocumentName= " & strName & Chr(13) & _
"№ ошибки= " & Err & ". " & Err.Description
Stop
Resume
End Function
' ________________________________________
' 'Конец текста модуля

' PS. Для А-1997, А-2000 имются яркие примеры уменьшения базы
' на много Мб .
' Про А-2002 информации нет

