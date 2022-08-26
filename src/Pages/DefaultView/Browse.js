import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default class Browse extends React.Component {
    constructor(props) {
        super(props);
    }

    createVolunteerProfile = () => {
        this.props.navigation.navigate("VolunteerSignUp");
    }

    createOrganizationProfile = () => {
        this.props.navigation.navigate("OrgSignUp");
    }

    render() {
        return (
          <View style={styles.text}>
            <Button onPress={() => {
                this.createVolunteerProfile();
            }} title="Create Volunteer Profile" color="#841584"></Button>

            <Button onPress={() => {
                this.createOrganizationProfile();
            }} title="Create Organization Profile" color="#841584"></Button>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});