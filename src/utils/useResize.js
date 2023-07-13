// Кастомный хук для отслеживания изменений viewport
import { useState, useEffect } from 'react';

// В качестве аргумента принимает граничное значение ширины экрана
export const useResize = (widthLimit = 576) => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		width,
		isScreenSmall: width < widthLimit,
	};
};