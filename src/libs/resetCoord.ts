import {Coord, KeysButtons, KeyType} from "../types/types";

export const resetCoord = (key: KeyType, coord: Coord, rows: number, cells: number) => {
	const {x, y} = coord;

	const coordMap = {
		[KeysButtons.FORWARD]: { x, y: rows - 1 },
		[KeysButtons.BACK]: {x, y: 0},
		[KeysButtons.LEFT]: {x: cells - 1, y},
		[KeysButtons.RIGHT]: {x: 0, y},
	}

	return coordMap[key];
}