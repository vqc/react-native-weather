'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

import Api from './src/api'

class Weather extends Component {
  constructor(props){
    super(props);

    this.state = {
      pin: { latitude: 0, longitude: 0 },
      data: {}
    }

    this.onRegionChangeComplete=this.onRegionChangeComplete.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          annotations={[this.state.pin]}
          //triggered when user starts and then stops interacting with the map
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}></MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.state.data.city}</Text>
          <Text style={styles.text}>{this.state.data.temperature}</Text>
          <Text style={styles.text}>{this.state.data.description}</Text>
        </View>
      </View>
    );
  }
  onRegionChangeComplete(region){
    console.log(region);
    this.setState({
      pin: { longitude: region.longitude, latitude: region.latitude, }
    });

    Api(region.latitude, region.longitude)
      .then((data) => {
        //the fat arrow here is key, otherwise we would have to bind this
        //and pass it in in order to access the state.
        console.log(data);
        this.setState({ data })
      });
  }
}

const styles = StyleSheet.create({
  map:{
    flex: 2,
    marginTop:30,
  },
  textWrapper:{
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('reactNativeWeather', () => Weather);
