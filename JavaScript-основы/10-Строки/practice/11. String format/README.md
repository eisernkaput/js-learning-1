# Формат строки

## Описание
Написать функцию которая форматирует строку, используя заполнители.
Функция должна работать с 1 до 30 заполнитель и всеми типами.

_Примеры:_

```js
var str = stringFormat('Привет {0}!', 'Петя');
// str = 'Привет Петя!';

var frmt = '{0}, {1}, {0} текст {2}';
var str = stringFormat(frmt, 1, 'Вася', 'Гоша');
// str = '1, Вася, 1 текст Гоша'
```
