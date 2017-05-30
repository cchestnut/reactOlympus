import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano 
	    source={asset('360Random.jpg')}
	    style={{
		    transform: [/*{scaleX: .2}, {scaleY: .2}*/]
	    }}/>
        <Text
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
          hello
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
