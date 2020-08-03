import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import eventsJSON from './noDB-json-test.json';


// Import Other Components //
import EventList from './components/EventList';
import Editor from './components/Editor';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allEvents: [],
      fileEvents: eventsJSON
    }
    //this.convertAllEventsToObj = this.convertAllEventsToObj.bind(this);
    
  }



componentDidMount() {
  this.getAllEvents();
  console.log('Trying to get All Events');
  
}

// fixData(jsObj) {
//   let fixedData = JSON.parse(JSON.stringify( jsObj ));
//   this.setState( { allEvents: fixedData } );
//   console.log('Ran Fixed Data Function');
// }

getAllEvents = () => {
  axios.get('/api/events')
    .then( res => { 
      this.setState( { allEvents: res.data } )
      console.log('Axios .then setState')
      console.log("API Events ", this.state.allEvents);
    } 
    ).catch( err => console.log("Error",err) )
    this.logger();
};

// compareAPItoFILE = (data1, data2) => {
//   if (data1 === data2) {
//     console.log("Compare === is TRUE");
//   } else if ( data1 == data2 ) {
//     console.log("Compare == is TRUE");
//   } else {
//     console.log("Both are FALSE");
//   }

logger = () => {
  console.log("-----Logger Started----")
  //console.log('LocalFile0: ', this.state.allEvents[0]);
  //console.log('LocalFile1: ', this.state.allEvents[1]);
  //console.log('LocalFile0 ID: ', this.state.AllEvents[0].eventId);
  //console.log('LocalFile1 ID: ', this.state.allEvents[1].eventId);

  // console.log("----Checking allEvents vs fileEvents-----");
  // this.compareAPItoFILE(this.state.allEvents, this.state.fileEvents);

  // console.log("----Checking[1] allEvents vs fileEvents[1]-----");
  // this.compareAPItoFILE(this.state.allEvents[1], this.state.fileEvents[1]);


  //console.log("API Events: ", this.state.allEvents);
  //console.log("API Events 1: ",this.state.allEvents[0]);
  //console.log("File Events 1 EventId: ", this.state.allEvents[0].eventId);

  
  
  //console.log("File Events: ", this.state.fileEvents);
  //console.log("File Events 1: ", this.state.fileEvents[0]);
  //console.log("File Events 1 EventId: ", this.state.fileEvents[0].eventId);
  //console.log("File Events 2 Camera Name: ", this.state.fileEvents[2].cameraInfo.name);
}




render() {

    console.log("API Events in render: ", this.state.allEvents);



    return (
    <div className="App-main">
      <header className="header-wrapper">
        <div className="header-content">
          <img src="./alert-event-icon.png" alt="alert-event-icon" className="header-image"></img>
          <h1 className="header-title">Alert Image Classifier</h1>
        </div>
      </header>
      <main className="main-wrapper">
        <EventList
          allEvents = {this.state.allEvents}
          fileEvents = {this.state.fileEvents}
        />
        <Editor
          allEvents = {this.state.allEvents}
          fileEvents = {this.state.fileEvents}
        />
      </main>
    </div>
  )};
}

export default App;