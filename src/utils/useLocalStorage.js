import { useState, useEffect } from 'react'

function getStorageValue(key, defaultValue) {
	// Получаем сохраненное значение из local storage или вернем defaultValue
	const saved = localStorage.getItem(key)
	return saved || defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
	// Кастомный хук для работы с local storage
	// Позволяет получать и менять значение value по имени key.

	const [value, setValue] = useState(getStorageValue(key, defaultValue))

	useEffect(() => {
		// Сохраняет в local storage value по определенному ключу key при каждом его изменении (синхронизация)
		localStorage.setItem(key, value);
	}, [key, value])

	// Возвращает массив из значения value и ф-ции его изменения setValue
	return [value, setValue]
}