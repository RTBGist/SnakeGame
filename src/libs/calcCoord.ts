import {Coord} from "../types/types";

export function calcCoord(coord: Coord) {
	return {
		x: coord.x ? coord.x * 50 + 'px' : '0px',
		y: coord.y ? coord.y * 50 + 'px' : '0px'
	}
}