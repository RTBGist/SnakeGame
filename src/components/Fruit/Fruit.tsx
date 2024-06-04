import React from 'react';
import {Cell} from "../Cell/Cell";
import {calcStepPX} from "../../libs/calcStepPX";
import {Coord} from "../../types/types";

interface FruitProps {
	coord: Coord
}

export const Fruit = (props: FruitProps) => {
	const {coord} = props;
	const {x, y} = calcStepPX(coord);

	return (
			<Cell style={{backgroundColor: 'blue', left: x, top: y, position: 'absolute'}} />
	);
};
