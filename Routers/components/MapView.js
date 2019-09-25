import React from 'react';
import MapView from 'react-native-maps';
import { Button, StyleSheet, Image, Text, TouchableOpacity, TextInput, Picker, Linking, Alert, View } from 'react-native';

export default class App extends React.Component {

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      console.log('permission to access location is denied');
    let location = await Location.getCurrentPositionAsync({ enableHightAccuracy: true })

    let region = {
      // latitude: location.coords.latitude,
      // longitude: location.coords.longitude,
      // latitudeDelta: 0.045,
      // longitudeDelta: 0.045,
      latitude: 24.8872,
      longitude: 67.0769,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    this.setState({ region })
    console.log(location);
  }
  constructor(props) {
    super(props);

    this.state = ({
      search: '',
    })
  }

  searchHandler() {
    const { search } = this.state;
    this.props.searchBar(search.toUpperCase());
    this.setState({
      search: ''
    })

  }
  render() {
    return (

      <View style={styles.container}>
        <MapView style={styles.map} />
        <View style={styles.inputView}>
          <TextInput style={styles.input} placeholder="Search..." placeholderTextColor='black' />
        </View>
      </View>


    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 0,
    left: 5,
    right: 5
  },
  input: {
    height: 36,
    padding: 10,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#800000',
    backgroundColor: 'white',
    color: '#800000',


  }
})
