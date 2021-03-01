import React from "react";

interface Props {
	title: string;
	value: number;
}

const ProgressBar: React.FC<Props> = ({ title, value }) => {
	return (
		<div className='progress'>
			<div
				className='progress-bar'
				role='progressbar'
				aria-valuenow={value}
				aria-valuemin={0}
				aria-valuemax={100}
				style={{ width: `${value}%` }}>
				<div className='progress-text'>
					<span>{title}</span>
					<span>{value}%</span>
				</div>
			</div>
			<div className='progress-text'>
				<span>{title}</span>
			</div>
		</div>
	);
};
export default ProgressBar;
