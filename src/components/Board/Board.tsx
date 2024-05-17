import {Cell} from '../Cell/Cell';
import classes from './Board.module.scss';
import {useState} from "react";
import {Snake} from "../Snake/Snake";

export const Board = () => {
	const [rows, setRows] = useState(12);
	const [cells, setCells] = useState(12);

	return (
			<div className={classes.board}>
				{Array(rows).fill(undefined).map((row, i) => {
					return (<div className={classes.row} key={i}>
						{Array(cells).fill(undefined).map((cell, i) => {
							return (<Cell className={classes.cell} key={i}/>)
						})}
					</div>)
				})}

				<Snake />
			</div>
	)
}