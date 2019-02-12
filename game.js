// Координаты трехпалубного корабля
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль или нет
// Создаем три переменные: location1, location2, location3
let location1 = Math.floor(Math.random() * 6 + 1)
let location2 = location1 + 1
let location3 = location2 + 1
// Создаем переменную currentShot
let currentShot
// Создаем переменную для подсчета выстрелов
let shots = 0
// Создаем переменную hits
let hits = 0
// Создаем переменную  для отслеживания, потоплен корабль или нет
let isSunk = false

while (isSunk === false) {
  // Получить координаты выстрела
  currentShot = Number(prompt("Введите число от 0 до 9:"))
  // Увеличить количество выстрелов на 1
  shots = shots + 1
  // Сравнить координаты выстрела с координатами корабля
  // Если игрок попал, уеличить счетчик попаданий на 1
  // Если количество попаданий = 3, то меняем значение переменной isSunk на true и сообщаем о победе
  if (currentShot <= 0 || currentShot > 9) {
    alert("Ошибка!")
  } else {
    if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
      hits += 1
      alert("Попадание!")
      if (hits === 3) {
        isSunk = true
        alert("Победа!")
      }
    } else {
      alert("Мимо!")
    }
  }
}
// Выводим статистику игры и рейтинг игрока
let rating = Math.round(3 / shots * 100)

if (shots === 3) {
  document.write("Отличная игра! <br \/>")
} else if (shots <= 6) {
  document.write("Неплохо сыграно! <br \/>")
} else if (shots >= 6) {
  document.write("Вы можете лучше! <br \/>")
}
document.write("Количество выстрелов: ", shots)
document.write("<br \/> Ваш рейтинг: ", rating)
