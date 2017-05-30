import React from 'react';
import Text from 'react-vr';

export class TimedGazeGreeting extends React.Component {
	constructor (props) {
		super(props);
		this.state = {gazeTime: 1, display: ''};
	}

	render() {
		let timeMap = this.props.textTimeMap;
		if (!timeMap) return (<Text>'no props'</Text>);
		let gazeTime = this.state.gazeTime;
		let display = timeMap.find( (timedObj) => {
			return gazeTime >= timedObj.startTime && gazeTime <= timedObj.endTime;
		});
		if (!display) display = {text: 'failure'};
		let textClass ='test'; /*gazeTime == display.startTime ? 'fadeIn' :
			gazeTime == display.endTime ? 'fadeOut' : '';*/
		console.log(display.text);
		return (
		<Text>{display.text}</Text>
		);
	}
}
export default TimedGazeGreeting;
