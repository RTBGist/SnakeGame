import {Coord} from "../types/types";

export const isTakeFruit = (coord: Coord, fruit: Coord) => {
	return coord.x === fruit.x && coord.y === fruit.y;
}