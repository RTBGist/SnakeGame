import {Directions, KeysButtons, KeyType} from "../types/types";

export const getNewDirection = (key: KeyType) => {
	const directionMap = {
		[KeysButtons.FORWARD]: Directions.TOP,
		[KeysButtons.BACK]: Directions.BOTTOM,
		[KeysButtons.LEFT]: Directions.LEFT,
		[KeysButtons.RIGHT]: Directions.RIGHT
	};

	return directionMap[key];
}