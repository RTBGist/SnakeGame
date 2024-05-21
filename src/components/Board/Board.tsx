import {Cell} from '../Cell/Cell';
import classes from './Board.module.scss';
import {useState} from "react";
import {Snake} from "../Snake/Snake";

export const Board = () => {
	const [rows, setRows] = useState(4);
	const [cells, setCells] = useState(4);
	const [noBorder, setNoBorder] = useState(true);

	return (
			<div className={classes.board}>
				{Array(rows).fill(undefined).map((row, i) => {
					return (<div className={classes.row} key={i}>
						{Array(cells).fill(undefined).map((cell, i) => {
							return (<Cell className={classes.cell} key={i}/>)
						})}
					</div>)
				})}

				<Snake cells={cells} rows={rows} noBorder={noBorder} />
			</div>
	)
}