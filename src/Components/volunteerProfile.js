import React from "react";
import firebase from '../../../database/firebase';


export class volunteerProfile extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <View> 
                <Text> Profile Pic </Text>
                <Text> Name </Text>
                <Text> Email: email@email.com </Text>
            </View>


        )
    }
}