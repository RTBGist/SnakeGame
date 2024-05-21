export const moveDirection = (key, direction, setDirection, coord, setCoord, cells, rows, noBorder) => {
	const { x, y } = coord[coord.length - 1];

	switch (key) {
		case 's':
			if (direction === 'top') return false;

			// isAcrossTheBorder
			if(y + 1 > rows - 1){
				setCoord([...coord.slice(1), { x, y: 0 }])
			} else {
				setCoord([...coord.slice(1), { x, y: y + 1 }])
			}

			setDirection('bottom');
			break;
		case 'w':
			if (direction === 'bottom') return false;

			// isAcrossTheBorder
			if(y - 1 < 0) {
				setCoord([...coord.slice(1), { x, y: rows - 1 }])
			} else {
				setCoord([...coord.slice(1), { x, y: y - 1 }]);
			}

			setDirection('top');
			break;
		case 'a':
			if (direction === 'right') return false;

			// isAcrossTheBorder
			if(x - 1 < 0) {
				setCoord([...coord.slice(1), { x: cells - 1, y }])
			} else {
				setCoord([...coord.slice(1), { x: x - 1, y }]);
			}

			setDirection('left');
			break;
		case 'd':
			if (direction === 'left') return false;

			// isAcrossTheBorder
			if(x + 1 > cells - 1) {
				setCoord([...coord.slice(1), { x: 0, y }])
			} else {
				setCoord([...coord.slice(1), { x: x + 1, y }]);
			}

			setDirection('right');
			break;
	}
};