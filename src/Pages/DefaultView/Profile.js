import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../../../database/firebase';
export default class Profile extends Component {
    constructor() {
        super();
        this.state = { 
            displayName: "",
            uid: ""
        }
    }

    // have it perform a check on mount
    componentDidMount() {
        
    }

    // have it remount when the reload function happens

    signOut = async () => {
        await firebase.auth().signOut().then(() => {
            console.log("User logged out successfully!");
            this.setState = {
                displayName: "",
                uid: ""
            }
            firebase.auth().currentUser = null;
            this.props.navigation.navigate('Browse');
        })
        .then(() => {
            window.location.reload(true); // look into new ways to just hot refresh the page so that the firebase.auth().currentuser object updates
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }  
    render() {
        if (firebase.auth().currentUser === null) {
            return (
                <View style={styles.container}>
                    <Text style = {styles.textStyle}>
                        There is no signed in user. Please create an account or sign in.
                    </Text>
                    <Button onPress={() => {
                        this.props.navigation.navigate("VolunteerSignUp")
                    }} title="Create a Profile" color="#841584"></Button>
                    <Button onPress={() => {
                        this.props.navigation.navigate("SignIn")
                    }} title="Sign In" color="#841584"></Button>
                </View>
            )
        } else if (firebase.auth().currentUser !== null) {
            this.state = { 
                displayName: firebase.auth().currentUser.displayName,
                uid: firebase.auth().currentUser.uid,
            }
            return (
                <View style={styles.container}>
                    <Text style = {styles.textStyle}>
                        UID: {this.state.uid}
                    </Text>
                    <Text style = {styles.textStyle}>
                        Name: {this.state.displayName}
                    </Text>
                    <Button
                        color="#841584"
                        title="Logout"
                        onPress={() => this.signOut()} />
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});