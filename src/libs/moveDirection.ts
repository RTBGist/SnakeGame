export const moveDirection = (key, direction, setDirection, coord, setCoord, cells, rows, noBorder, coordFruit) => {
	switch (key) {
		case 's':
			console.log('s');
			// is opposite direction
			if (direction === 'top') return false;

			// is across the border
			if(y + 1 > rows - 1) {
				setCoord((prev) => [...prev.slice(1), { x, y: 0 }]);
				setDirection('bottom');
				return;
			}

			// is hit the fruit
			if(coordFruit.x === x && coordFruit.y === y + 1) {
				setCoord((prev) => [...prev, { x, y: y + 1 }]);
				setDirection('bottom');
				return;
			}

			// default move
			setCoord((prev) => {
				const { x, y } = prev[prev.length - 1];

				return [...prev.slice(1), { x, y: y + 1 }]
			})
			setDirection('bottom');
			break;

		case 'w':
			console.log('w')
			// is opposite direction
			if (direction === 'bottom') return false;

			// is across the border
			if(y - 1 < 0) {
				setCoord((prev) => [...prev.slice(1), { x, y: rows - 1 }])
				setDirection('top');
				return;
			}

			// is hit the fruit
			if(coordFruit.x === x && coordFruit.y === y - 1) {
				setCoord((prev) => [...prev, { x, y: y - 1 }]);
				setDirection('top');
				return;
			}

			// default move
			setCoord((prev) => [...prev.slice(1), { x, y: y - 1 }]);
			setDirection('top');
			break;
		case 'a':
			console.log('a')
			// is opposite direction
			if (direction === 'right') return false;

			// is across the border
			if(x - 1 < 0) {
				setCoord((prev) => [...prev.slice(1), {x: cells - 1, y}])
				setDirection('left');
				return;
			}

			// is hit the fruit
			if(coordFruit.x === x - 1 && coordFruit.y === y) {
				setCoord((prev) => [...prev, { x: x - 1, y }])
				setDirection('left');
				return;
			}

			// default move
			setCoord((prev) => [...prev.slice(1), { x: x - 1, y }]);
			setDirection('left');
			break;
		case 'd':
			console.log('d');
			// is opposite direction
			if (direction === 'left') return false;

			// is across the border
			if(x + 1 > cells - 1) {
				setCoord((prev) => [...prev.slice(1), { x: 0, y }])
				setDirection('right');

				return;
			}

			// is hit the fruit
			if(coordFruit.x === x + 1 && coordFruit.y === y) {
				setCoord((prev) => [...prev, { x: x + 1, y }])
				setDirection('right');

				return;
			}

			// default move
			setCoord((prev) => [...prev.slice(1), { x: x + 1, y }]);
			setDirection('right');
			break;
	}
};