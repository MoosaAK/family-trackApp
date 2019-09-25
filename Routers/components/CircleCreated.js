
import * as React from 'react';
import * as firebase from "firebase"
// import Action from '..//Action/Action'

import { Button, StyleSheet, Image, Text, TextInput, Picker, Alert, View } from 'react-native';
// import {Permissions} from 'expo'
// import * as ImagePicker from "expo-image-picker"
// import * as Permissions from 'expo-permissions';
// import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class CircleCreated extends React.Component {


    componentWillMount() {

        firebase.database().ref('DonorForm').on('value', (data) => {
            console.log(data.toJSON())
        })

        DonorDatabase = () => {
            firebase.database().ref("Number/0001").set({
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
                <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>CIRCLE CREATED</Text>

                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <View flexDirection='row' style={{fontSize:30}}>
                        <Text style={{fontSize:18}}>YOUR CIRCLE ID: </Text> 
                        <Text style={{color:'#f6961b',fontSize:18}}>Fcx12sD</Text>
                    </View>
                    <View flexDirection='row'>

                        <TouchableOpacity

                            onPress={() =>
                                this.props.navigation.navigate('sharing')
                            }
                            activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>SHARE YOUR CIRCLE</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }


}


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 11

    },

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
        width: 230,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        marginTop: 10
    },
    
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

