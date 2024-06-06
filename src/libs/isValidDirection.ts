import {Directions, DirectionType, KeysButtons, KeyType} from "../types/types";

export const isValidDirection = (key: KeyType, direction: DirectionType) => {
	const directionMap = {
		[KeysButtons.FORWARD]: Directions.BOTTOM,
		[KeysButtons.BACK]: Directions.TOP,
		[KeysButtons.LEFT]: Directions.RIGHT,
		[KeysButtons.RIGHT]: Directions.LEFT
	};

	return direction !== directionMap[key];
}