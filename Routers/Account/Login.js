
import * as React from 'react'
import * as firebase from "firebase"
import { Button, StyleSheet, Image, Text, TextInput, View, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'




export default class Login extends React.Component {
  state = {
    image: null,
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Page'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }


  render() {
    let { image } = this.state

    return (
      <View style={styles.MainContainer} >
        <Text style={{ marginTop: -50, fontSize: 20, color: "#f6961b", fontWeight: "bold" }}>USER LOGIN</Text>


        <Image
          style={{
            borderWidth: 1,
            borderColor: '#f6961b',
            alignItems: 'center',
            justifyContent: 'center',
            width: "50%",
            height: "40%",
            backgroundColor: '#f6961b',
            borderRadius: 150,
            marginTop: 40
          }}
          source={require('../assets/1234.png')}
        />
        <View style={{ flex: 0.5, justifyContent: "center", alignItems: 'center', marginTop: 80 }}>

          {this.state.errorMessage &&
            <Text style={{ color: 'black', fontSize: 10, alignContent: 'center', textAlign: 'center' }}>
              {this.state.errorMessage}
            </Text>}
          <Text style={{ marginTop: 15 }}>EMAIL: </Text>
          <TextInput

            style={styles.textInputStyle}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            underlineColorAndroid='transparent'
          />
          <Text style={{ marginTop: 5 }}>PASSWORD: </Text>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
          />



          <View flexDirection='row'>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Page')
              }
              onPress={this.handleLogin}
              activeOpacity={0.7} style={styles.button} >

              <Text style={styles.buttonText}> LOGIN </Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() =>
                this.props.navigation.navigate('Signup')
              }
              activeOpacity={0.7} style={styles.button} >

              <Text style={styles.buttonText1}>CREATE ACCOUNT</Text>

            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
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
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {

    color: '#fff'
  },
  textInputStyle: {

    height: 30,
    width: 240,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: '#f6961b',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 15,

  },
  buttonText1: {
    color: '#f6961b',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 10,
    padding: 4

  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    width: 140,
    marginTop: 12,
    marginHorizontal: 10

  },
})
