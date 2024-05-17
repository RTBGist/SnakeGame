import classes from './Cell.module.scss';

interface CellProps {
	className?: string;
}

export const Cell = (props: CellProps) => {
	const {style, className = ''} = props;

	return (
			<div className={`${classes.cell} ${className}`} style={style}></div>
	)
}