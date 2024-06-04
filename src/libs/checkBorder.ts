import {Coord, KeysButtons, KeyType} from "../types/types";

export const checkBorder = (key: KeyType, coord: Coord, border: number = 0, noBorder: boolean) => {
	const {x, y} = coord;

	const coordMap = {
		[KeysButtons.FORWARD]: { x, y: border - 1 },
		[KeysButtons.BACK]: {x, y: 0},
		[KeysButtons.LEFT]: {x: border - 1, y},
		[KeysButtons.RIGHT]: {x: 0, y},
	}

	switch (key) {
		case KeysButtons.FORWARD:
			if(y < 0) {
				return noBorder ? coordMap[key] : false;
			}
			break;
		case KeysButtons.BACK:
			console.log('rows', border);
			if(y > border - 1) {
				return noBorder ? coordMap[key] : false;
			}
			break;
		case KeysButtons.LEFT:
			if(x < 0) {
				return noBorder ? coordMap[key] : false;
			}
			break;
		case KeysButtons.RIGHT:
			if(x > border - 1) {
				return noBorder ? coordMap[key] : false;
			}
			break;
	}

	return {x,y};
}