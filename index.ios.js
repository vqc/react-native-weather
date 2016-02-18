'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

class Weather extends Component {
  render() {
    return (
      <MapView style={styles.map}></MapView>
    );
  }
}

const styles = StyleSheet.create({
  map:{
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativeWeather', () => Weather);
