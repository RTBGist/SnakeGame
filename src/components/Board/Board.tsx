import {Cell} from '../Cell/Cell';
import classes from './Board.module.scss';

export const Board = () => {
	return (
			<div className={classes.board}>
				<div className={classes.row}>
					<Cell />
					<Cell />
					<Cell />
					<Cell />
					<Cell />
					<Cell />
				</div>
				<div className={classes.row}>
					<Cell />
					<Cell />
					<Cell />
					<Cell />
					<Cell />
					<Cell />
				</div>
				<div className={classes.row}>
					<Cell />
					<Cell />
					<Cell />
					<Cell />
					<Cell />
					<Cell />
				</div>
			</div>
	)
}