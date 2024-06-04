import {Coord, KeysButtons, KeyType} from "../types/types";

export const getNewCoord = (key: KeyType, coord: Coord) => {
	const {x,y} = coord;

	const coordMap = {
		[KeysButtons.FORWARD]: { x, y: y - 1 },
		[KeysButtons.BACK]: {x, y: y + 1},
		[KeysButtons.LEFT]: {x: x - 1, y},
		[KeysButtons.RIGHT]: {x: x + 1, y},
	}

	return coordMap[key];
}