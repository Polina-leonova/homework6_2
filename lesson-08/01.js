/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/


function capitalizeWords(str) {
  const words = str.split(' ')
  let result = ''

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const capitalized = word[0].toUpperCase() + word.slice(1)

    result += capitalized

    if (i !== words.length - 1) {
      result += ' '
    }
  }

  return result
}