import React, {Component} from 'react';
import Map from './map';
import Sidebar from './List'
import * as Load from '../functions/loadscript'
import SortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'

class Body extends Component{
    state = {
        data: [], // initialized to store all the fetched data
        locations: [], // initialized to store the data based on the test in filter method
        query: '', // initialized to store the userinput in realtime
    }

    popupInfo = (l) => {
        let address = l.venue.location.formattedAddress;
        let pc = l.venue.location.postalCode;
        let popupInfo = `<div className='Overlay'><div style='display:flex; white-space:pre' className='Overlay OverlayName'><strong>Name: </strong><h1> ${l.venue.name}</h1>
   </div>
   <div style='display:flex; white-space:pre' className='Overlay OverlayAddress'>
    <strong>Address: </strong> <p>${address.join(' - ')}</p>
    </div>

    <div style='display:flex; white-space:pre' className='Overlay OverlayPC'>
    <strong>Postal Code: </strong> <p>${pc}</p>
    </div>
    
    </div>`;

    return popupInfo
    }

    serveInfo = (location) => {
        if(window.markers){
                 window.markers.forEach((m, i) => {
                window.markers[i].setAnimation(null); //Clearing All the markers animation
                if(location.venue.name === m.title){ // if the name from the list (Sidebar) and title of the marker matched
                let popupInfo = this.popupInfo(location);
                 window.infowindow.setContent(popupInfo); // Setting the content based on the above popup info method
                window.infowindow.open(window.map, window.markers[i]) // showing the infowindow on the map

                window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE) //Adding animation to the current one

                }

            });
        }
    }

    removeMarker = (markers) => {
       markers.forEach(element => {
            element.setMap(null)
            element.setAnimation(null);
       });

   }
         
    componentDidMount(){
        Load.fetchResults().then((data) =>
             this.setState({
               data, locations: data
            })
        ).catch((error) => {
            throw error;
          });
          // The Source function is inside functions/loadscript. This accepts only api as the argument.
    }

    searchQuery = (query) => {
        let showingLocations;
        this.setState({
            query
        })

        if(this.state.query){
            let match = new RegExp(escapeRegExp(query), "i");
             showingLocations = this.state.data.filter((l) => match.test(l.venue.name));
             this.setState({
                 locations: showingLocations
             })
        }else{
             showingLocations = this.state.data;
             this.setState({
                locations: showingLocations
            })
        }
        console.log(showingLocations)

        showingLocations.sort(SortBy('name'));


    }
 


render(){
return(
<section role="main" aria-labelledby="main" className="mainBody" id="mainBody">
    <section id="optionsContainer" className='toggleNav main'>
        <Sidebar passInfo={this.serveInfo} locations={this.state.locations} query={this.state.query} search={this.searchQuery}/>
    </section>
    <section id="mapContainer">
        <Map populateInfo={this.popupInfo} removeMarker={this.removeMarker} overlay={this.state.infowindow} data={this.state.locations}/>
    </section>
    </section>
)}

}

export default Body;