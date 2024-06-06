import React, {useEffect, useState} from "react";
import {Cell} from "../Cell/Cell";
import {Coord, DirectionType} from "../../types/types";

import classes from './Snake.module.scss';
import {calcStepPX} from "../../libs/calcStepPX";
import {isValidDirection} from "../../libs/isValidDirection";
import {getNewCoord} from "../../libs/getNewCoord";
import {resetCoord} from "../../libs/resetCoord";
import {isAcrossBorder} from "../../libs/isAcrossBorder";
import {isTakeFruit} from "../../libs/isTakeFruit";
import {getNewDirection} from "../../libs/getNewDirection";


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

	// console.log('rerender')
	// console.log('coord', coord)


	useEffect(() => {
		// console.log('mount')
		const onKeyPress = (event) => {
			const key = event.key.toLowerCase();

			if(!isValidDirection(key, getNewDirection(key))) return false;
			setDirection(getNewDirection(key));

			setCoord((prevCoord) => {
				let {x, y} = prevCoord[prevCoord.length - 1];
				let newCoord = getNewCoord(key, {x, y});

				if(isAcrossBorder(newCoord, rows, cells)) {
					if(noBorder) {
						newCoord = resetCoord(key, newCoord, rows, cells)
					} else {
						// TODO GameOver
					}
				}

				if(isTakeFruit(newCoord, coordFruit)) {
					// TODO передвинуть фрукт
					return [...prevCoord, newCoord];
				}

				return [...prevCoord.slice(1), newCoord];
			});
		}


		document.addEventListener('keypress', onKeyPress)
		return () => {
			// console.log('unmount')
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
