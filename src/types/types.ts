export enum KeysButtons {
	FORWARD = 'w',
	BACK = 's',
	LEFT = 'a',
	RIGHT = 'd'
}

export type KeyType = 'w' | 's' | 'd' | 'a'

export enum Directions {
	TOP = 'top',
	RIGHT = 'right',
	BOTTOM = 'bottom',
	LEFT = 'left'
}
export type DirectionType = 'top' | 'right' | 'bottom' | 'left';

export interface Coord {
	x: number;
	y: number;
}