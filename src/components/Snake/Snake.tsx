import React, {useEffect, useState} from "react";
import {Cell} from "../Cell/Cell";
import {Coord, DirectionType} from "../../types/types";

import classes from './Snake.module.scss';
import {calcStepPX} from "../../libs/calcStepPX";

export const Snake = () => {
	const [direction, setDirection] = useState<DirectionType>('right');
	const [coord, setCoord] = useState<Coord[]>([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}]);

	useEffect(() => {
		const onKeyPress = (event) => {
			switch (event.key.toLowerCase()) {
				case 'a':
					setCoord(coord.map((point, index) =>
							index === coord.length - 1 ? { x: point.x - 1, y: point.y } : coord[index + 1]
					));
					break;
				case 'd':
					setCoord(coord.map((point, index) =>
							index === coord.length - 1 ? { x: point.x + 1, y: point.y } : coord[index + 1]
					));
					break;
				case 'w':
					setCoord(coord.map((point, index) =>
							index === coord.length - 1 ? { x: point.x, y: point.y - 1 } : coord[index + 1]
					));
					break;
				case 's':
					setCoord(coord.map((point, index) =>
							index === coord.length - 1 ? { x: point.x, y: point.y + 1 } : coord[index + 1]
					));
					break;
			}
		}

		document.addEventListener('keypress', onKeyPress)
		return () => {
			document.removeEventListener('keypress', onKeyPress)
		}
	})

	return (
			<>
				{coord.map((cell, i) => {
					const {x, y} = calcStepPX(coord[i]);

					return <Cell className={classes.cell} style={{backgroundColor: 'green', left: x, top: y}} key={i} />
				})}
			</>
	);
};
