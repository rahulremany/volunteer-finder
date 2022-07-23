import React from 'react'


export default class orgPost {
    
    constructor (title, location, date, ageMin, timeRange, description, volunteerSignUps) {

        this.title = title;
        this.location = location; 
        this.date = date;
        this.ageMin = ageMin;
        this.timeRange = timeRange;
        this.description = description;
        this.volunteerSignUps = volunteerSignUps;

    }

    approveVRequest () {

    }

    rejectVRequest () {

    }

}
