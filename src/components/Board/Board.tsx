import {Cell} from '../Cell/Cell';
import classes from './Board.module.scss';
import {useState} from "react";
import {Snake} from "../Snake/Snake";
import {Fruit} from "../Fruit/Fruit";

export const Board = () => {
	const [rows, setRows] = useState(4);
	const [cells, setCells] = useState(4);
	const [noBorder, setNoBorder] = useState(true);
	const [coordFruit, setCoordFruit] = useState({x: 0, y: 2})

	return (
			<div className={classes.board}>


				{Array(rows).fill(undefined).map((row, i) => {
					return (<div className={classes.row} key={i}>
						{Array(cells).fill(undefined).map((cell, idx) => {
							return (<Cell className={classes.cell} key={idx}/>)
						})}
					</div>)
				})}

				<Snake cells={cells} rows={rows} noBorder={noBorder} coordFruit={coordFruit} />

				<Fruit coord={coordFruit} />
			</div>
	)
}