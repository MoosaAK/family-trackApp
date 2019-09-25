
// HOME
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Page extends React.Component {
    render() {
        return (
            <View style={styles.container}>


                <Text style={{ fontSize: 20, color: '#f6961b', fontWeight: "bold", marginTop: -100 }}>GPS TRACKER</Text>
                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('NewCircle')
                        }
                    >
                        <Image
                            style={styles.image}

                            source={require('./assets/compass.png')}
                        />
                        <Text style={styles.textCaptiopn}>Create new circle</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('MapView')
                        }
                    >
                        <Image
                            style={styles.image}

                            source={require('./assets/map2.png')}
                        />
                        <Text style={styles.textCaptiopn}>My Location</Text>

                    </TouchableOpacity>

                </View>
                 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        paddingHorizontal: 120,
    },
    image: {
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 40,
        marginHorizontal: 20,

    },
    textCaptiopn: {
        marginHorizontal: 10,
        color: '#f6961b',
        textAlign: 'center'
    }

});
