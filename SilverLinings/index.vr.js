import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
//import TimedGazeGreeting from './TimedGazeGreeting';
/*class Greeting extends Component {
	constructor (props){
		super(props);
		this.state = { gazeTime: 1, currentText: 0};
	}
	render() {
		let timeMap = this.props.textTimeMap;
		if (!timeMap) return null;
		let display = this.props.textTimeMap[currentText];
		let stateClass;
		if(this.state.gazeTime > this.props.endTime) {stateClass = "finalFade"};
		if(this.state.gazeTime = this.props.textTimeMap[this.state.currentText]) {
			this.state.currentText++;
			display = this.props.textTimeMap[this.state.currentText];
			stateClass = "tempFade"
		}
		return (
			<Text className={stateClass}>{display}</Text>
		);
	}
}*/
class TimedGazeGreeting extends React.Component {
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
		if (!display) display = {text: ''};
		let textClass ='test'; /*gazeTime == display.startTime ? 'fadeIn' :
			gazeTime == display.endTime ? 'fadeOut' : '';*/
		console.log(display.text);
		return (
		<Text 
		    style={this.props.style}
		    onEnter={ () => this.animateProgress() }
		    onExit= { () => this.pauseProgress() }>
			{display.text}
		</Text>
		);
	}
	animateProgress() {
		this.setTimeout(() => {this.state.gazeTime++;}, 1000);
	}
	pauseProgress(){
	}
}


export default class SilverLiningsWelcome extends React.Component {
  render() {
	const textArray = [
		{startTime:0, endTime:5, text: 'Welcome'},
		{startTime:8, endTime:15, text: 'Keep Thine Head Up'}
	  ];
    return (
      <View>
        <Pano 
	    source={asset('360Random.jpg')}
	    style={{
		    transform: [/*{scaleX: .2}, {scaleY: .2}*/]
	    }}/>
        <TimedGazeGreeting
          style={{
            backgroundColor: '#777879',
            fontSize: 0.3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -7]}],
          }}
	  textTimeMap= {textArray}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('SilverLinings', () => SilverLiningsWelcome);
