import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class Greeting extends Component {
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
}


export default class SilverLiningsWelcome extends React.Component {
  render() {
    return (
      <View>
        <Pano 
	    source={asset('360Random.jpg')}
	    style={{
		    transform: [/*{scaleX: .2}, {scaleY: .2}*/]
	    }}/>
        <Greeting
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
          }}>
          Welcome
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
