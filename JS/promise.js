const hasMeeting = false;

const meeting = new Promise((resolve, reject) =>{

    if(!hasMeeting){
        const meetingDetails = {
            name : "Tech Meeting",
            location : "Google Meet",
            time : "10:00 AM"
        }
        resolve(meetingDetails)
    }else {
        reject(new Error("Meeting is already schedule!"));
    }

});

const addToCalender = (meetingDetails) =>{

    // return new Promise((resolve) =>{
    //      const calendar = `${meetingDetails.name} is scheduled in ${meetingDetails.location} at ${meeting.time}`

    //      resolve(calendar)
    // });

    const calendar = `${meetingDetails.name} is scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);


};

meeting 
.then((addToCalender))

.then((calendar) => {
    console.log(calendar);
    
}).catch((err) => {
    console.log(`Error is ${err.message}`);
    
})