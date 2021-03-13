import React, { useState, useEffect } from "react";

export function SecondsCounter(props) {
	const [seconds, setSeconds] = useState(props.seconds);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="card">
					<i className="fas fa-stopwatch fa-2x"></i>
				</div>
				<div className="card">{Math.floor(seconds / 100000) % 10}</div>
				<div className="card">{Math.floor(seconds / 10000) % 10}</div>
				<div className="card">{Math.floor(seconds / 1000) % 10}</div>
				<div className="card">{Math.floor(seconds / 100) % 10}</div>
				<div className="card">{Math.floor(seconds / 10) % 10}</div>
				<div className="card">{seconds % 10}</div>
			</div>
			<div className="row" id="buttons">
				<button
					className="btn btn-light"
					onClick={() => setSeconds(props.seconds)}>
					Reset
				</button>
			</div>
		</div>
	);
}
