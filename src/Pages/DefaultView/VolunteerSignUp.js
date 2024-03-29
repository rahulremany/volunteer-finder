import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../../database/firebase';

export default class VolunteerSignUp extends React.Component {

    constructor(props) {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            age: '', 
            zip_code: '', 
            my_postings: '',
            my_signups: '', 
            bio: '', 
            account_type: 'volunteer',
            isLoading: false,
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signup!');
        } else {
            this.setState({
                isLoading: true
            })
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: this.state.displayName
                })
                console.log("User registered successfully")
                this.setState({
                    isLoading: false,
                    displayName: '',
                    email: '',
                    password: '', 
                    zip_code: '', 
                    age: ''
                })
                this.props.navigation.navigate("Profile")
            })
            .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E"/>
                </View>
            )
        }


        return (
            <View style={styles.container}>  
                <TextInput
                style={styles.inputStyle}
                placeholder="Name"
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                />      
                <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                maxLength={15}
                secureTextEntry={true}
                />
                <TextInput
                style={styles.inputStyle}
                placeholder="Age"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'age')}
                maxLength={15}
                secureTextEntry={true} /> 
                <TextInput
                style={styles.inputStyle}
                placeholder="Zip Code"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'zip_code')}
                maxLength={15}
                secureTextEntry={true} /> 
                <Button
                color="#3740FE"
                title="Signup"
                onPress={() => this.registerUser()}
                />
                <Text 
                style={styles.loginText}
                onPress={() => this.props.navigation.navigate('SignIn')}>
                Already Registered? Click here to sign in
                </Text>                          
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
  });