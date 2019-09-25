
import * as React from 'react';
import Communications from 'react-native-communications';

import { Button, StyleSheet, Image, Text, TextInput, Picker, Linking, Alert, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class CircleCreated extends React.Component {

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
            <View style={styles.MainContainer} >
                <Text style={{ marginTop: -100, fontSize: 18, fontWeight: "bold" }}>ADD TO TRACK</Text>


                <View style={{ borderColor: 'black', backgroundColor: '#f6961b',marginTop:80 }}>
                    <Text style={{ color: 'white', borderLeftColor: 'black' }}>Full name: Moosa</Text>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('mailto:MoosaA.K@yahoo.com?&subject=Request to joining Circle GPS Tracker&body=Fcx12sD')

                        }
                    ><Text style={{ color: 'white', fontStyle: 'italic', marginBottom: 20 }}>MoosaA.k@yahoo.com</Text></TouchableOpacity>



                    <Text style={{ color: 'white', borderLeftColor: 'black' }}>Full name: Osman Khan</Text>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('mailto:Osman81614@yahoo.com?&subject=Request to joining Circle GPS Tracker&body=Fcx12sD')

                        }
                    ><Text style={{ color: 'white', fontStyle: 'italic', marginBottom: 20 }}>Osman81614@yahoo.com</Text></TouchableOpacity>




                    <Text style={{ color: 'white', borderLeftColor: 'black' }}>Full name: Zulqarnain Naviwala</Text>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('mailto:ZulqarnainNaviwala@yahoo.com?&subject=Request to joining Circle GPS Tracker&body=Fcx12sD')

                        }
                    ><Text style={{ color: 'white', fontStyle: 'italic', marginBottom: 20 }}>ZulqarnainNaviwala@yahoo.com</Text></TouchableOpacity>

                    <Text style={{ color: 'white', borderLeftColor: 'black' }}>Full name: Zeeshan Khan</Text>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('mailto:ZeeshanKhan852@gmail.com?&subject=Request to joining Circle GPS Tracker&body=Fcx12sD')

                        }
                    ><Text style={{ color: 'white', fontStyle: 'italic', marginBottom: 20 }}>ZeeshanKhan852@gmail.com</Text></TouchableOpacity>

                </View>

                <View flexDirection='row'>

                    <TouchableOpacity

                        onPress={() =>
                            this.props.navigation.navigate('Page')
                        }
                        activeOpacity={0.7} style={styles.button} >

                        <Text style={styles.buttonText}>DONE</Text>

                    </TouchableOpacity>

                </View>
            </View>

            // </View>
        );
    }


}



const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6961b',
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

