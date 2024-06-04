import React, {useEffect, useState} from "react";
import {Cell} from "../Cell/Cell";
import {Coord, DirectionType} from "../../types/types";

import classes from './Snake.module.scss';
import {calcStepPX} from "../../libs/calcStepPX";
import {isValidDirection} from "../../libs/checkDirection";
import {getNewCoord} from "../../libs/getNewCoord";
import {checkBorder} from "../../libs/checkBorder";


interface SnakeProps {
	cells: number;
	rows: number;
	noBorder: boolean;
	coordFruit: Coord;
}

export const Snake = (props: SnakeProps) => {
	const {cells, rows, noBorder, coordFruit} = props;
	const [direction, setDirection] = useState<DirectionType>('right');
	const [coord, setCoord] = useState<Coord[]>([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}]);

	console.log('rerender')
	console.log('coord', coord)

	useEffect(() => {
		console.log('mount')
		const onKeyPress = (event) => {
			const key = event.key.toLowerCase();

			// moveDirection(event.key.toLowerCase(), direction, setDirection, coord, setCoord, cells, rows, noBorder, coordFruit)

			switch (key) {
				case 's':
					if(!isValidDirection(key, direction)) return false;

					setCoord((prevCoord) => {
						let {x, y} = prevCoord[prevCoord.length - 1];
						const newCoord = getNewCoord(key, {x, y});

						checkBorder(key, newCoord, rows, noBorder)

						return [...prevCoord.slice(1), newCoord];
					});



					break;

				case 'w':
					break;

				case 'a':
					break;

				case 'd':
					break;
			}
		}


		document.addEventListener('keypress', onKeyPress)
		return () => {
			console.log('unmount')
			document.removeEventListener('keypress', onKeyPress)
		}
	}, [])

	return (
			<div>
				{coord.map((cell, i) => {
					const {x, y} = calcStepPX(coord[i]);

					return <Cell className={classes.cell} style={{backgroundColor: 'green', left: x, top: y}} key={i} />
				})}
			</div>
	);
};
