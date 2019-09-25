
import * as React from 'react';
import * as firebase from "firebase"
import Action from '..//Action/Action'

import { Button, StyleSheet, Image, Text, TextInput, Picker, View } from 'react-native';
// import {Permissions} from 'expo'
import * as ImagePicker from "expo-image-picker"
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class NewCircle extends React.Component {
    state = {
        image: null,
    };



    componentWillMount() {

        firebase.database().ref('NewCircle').on('value', (data) => {
            console.log(data.toJSON())
        })

        Circle = () => {
            firebase.database().ref("CIRCLE_ADD/0001").set({
                CircleName: this.state.CircleName,

            }).then(() => {
                console.log('Inserted')
            }
            ).catch((error) => {
                console.log(error)

            });
        }
    }


    constructor(props) {

        super(props)

        this.state = {

            CircleName: '',

        }
    }



    render() {
        let { image } = this.state;


        return (
            <View style={styles.MainContainer} >
                <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>CREATE NEW CIRCLE</Text>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', marginTop: 25 }}>

                    {image &&
                        <Image source={{ uri: image }}
                            style={{
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.2)',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 75,
                                height: 75,
                                backgroundColor: '#fff',
                                borderRadius: 32.5,
                            }}
                        />}

                    <TextInput
                        placeholderTextColor="black"

                        placeholder="Circle Name"
                        onChangeText={data => this.setState({ CircleName: data })}
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                    />


                    <Text style={{ color: 'black', fontSize: 10, marginTop: 10 }}>Circle Picture (Optional)</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ marginTop: 7 }}
                            onPress={this._pickImage}
                        >
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../assets/CameraRoll.png')}
                            />
                        </TouchableOpacity>

                    </View>

                    <View flexDirection='row'>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('Page')
                            } activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>CANCEL</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={Circle()}
                            onPress={() =>
                                this.props.navigation.navigate('CircleCreated')
                            }
                            activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>CREATE CIRCLE</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }


    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(JSON.stringify(result));

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}



const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 11

    },

    // button: {
    //     alignItems: 'center',
    //     backgroundColor: 'black',
    //     padding: 12,
    //     width: 280,
    //     marginTop: 12,
    // },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width: 140,
        marginTop: 12,
        marginHorizontal: 10

    },

    text: {

        color: '#fff'
    },
    textInputStyle: {

        height: 30,
        width: 220,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        marginTop: 10,
        marginTop: 25
    },
    // buttonText: {
    //     color: 'white',
    //     textAlign: 'center',
    //     fontSize: 15
    // },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },
    textStyle: {

        color: '#000',
        textAlign: 'center',
        fontSize: 20

    }
});











