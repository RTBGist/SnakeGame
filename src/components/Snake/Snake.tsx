import React, {useEffect, useState} from "react";
import {Cell} from "../Cell/Cell";
import {Coord, DirectionType} from "../../types/types";

import classes from './Snake.module.scss';
import {calcStepPX} from "../../libs/calcStepPX";
import {moveDirection} from "../../libs/moveDirection";

interface SnakeProps {
	cells: number;
	rows: number;
	noBorder: boolean;
}

export const Snake = (props: SnakeProps) => {
	const {cells, rows, noBorder} = props;
	const [direction, setDirection] = useState<DirectionType>('right');
	const [coord, setCoord] = useState<Coord[]>([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}]);

	useEffect(() => {
		const onKeyPress = (event) => {
			moveDirection(event.key.toLowerCase(), direction, setDirection, coord, setCoord, cells, rows, noBorder)
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
