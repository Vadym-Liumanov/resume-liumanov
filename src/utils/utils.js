// Вспомогательная ф-ция. На входе получает многостраничный текст с символами перевода строки \n.
// Преобразует текст в массив html-элементов p - в каждом абзаце содержится по строке.
export const textDevider = (text) => text.split('\n').map((p, index) => {
  return (
    <p className="experience__text common-text" key={index}>
      {p}
    </p>
  )
})