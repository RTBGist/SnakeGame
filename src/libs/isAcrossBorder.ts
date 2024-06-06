import {Coord} from "../types/types";

export const isAcrossBorder = (coord: Coord, rows, cells) => {
	const {x,y} = coord;

	return y < 0 || y > rows - 1 || x < 0 || x > cells - 1;
}