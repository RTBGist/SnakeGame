import React, {useEffect, useState} from "react";
import {Cell} from "../Cell/Cell";
import {Coord, DirectionType} from "../../types/types";

import classes from './Snake.module.scss';
import {calcCoord} from "../../libs/calcCoord";

export const Snake = () => {
	const [direction, setDirection] = useState<DirectionType>('right');
	const [coord, setCoord] = useState<Coord[]>([{x: 0, y: 0}]);

	useEffect(() => {
		const onKeyPress = (event) => {
			switch (event.key.toLowerCase()) {
				case 'a':
					setCoord((coord) => {
						return coord.map(({x, y}) => {
							return {x: x - 1, y}
						})
					})
					break;
				case 'd':
					setCoord((coord) => {
						return coord.map(({x, y}) => {
							return {x: x + 1, y}
						})
					})
					break;
				case 'w':
					setCoord((coord) => {
						return coord.map(({x, y}) => {
							return {x: x, y: y - 1}
						})
					})
					break;
				case 's':
					setCoord((coord) => {
						return coord.map(({x, y}) => {
							return {x: x, y: y + 1}
						})
					})
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
					const {x, y} = calcCoord(coord[i]);

					return <Cell className={classes.cell} style={{backgroundColor: 'green', left: x, top: y}} key={i} />
				})}
			</>
	);
};
