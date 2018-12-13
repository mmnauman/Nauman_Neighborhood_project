import React, {Component} from 'react';

class Map extends Component{

  markers = [];
 placeMarker = (data) => {
  //Initializing InfoWindow

 if(window.google){
  let infowindow = new window.google.maps.InfoWindow();
  data.forEach((city) => {
    let popupInfo = this.props.populateInfo(city);
    // Initializing Marker
     var marker = new window.google.maps.Marker({
      position: {lat: city.venue.location.lat, lng: city.venue.location.lng},
      map: window.map,
      animation: window.google.maps.Animation.DROP,
      title: city.venue.name
    });
    marker.setAnimation(null);
    marker.addListener('click', function() {
      infowindow.setContent(popupInfo);
      if (this.getAnimation() !== null) {
        this.setAnimation(null);
      } else {
        this.setAnimation(window.google.maps.Animation.BOUNCE);
        window.setTimeout(this.setAnimation(null), 5000);
      }
      infowindow.open(window.map, marker);
      console.log(this);
    });

   this.markers.push(marker);
   console.log(this.markers);

  }); 

  window.markers = this.markers;
  window.infowindow = infowindow

}
}


render(){
 // infowindow.setMarker = null;
 this.props.removeMarker(this.markers);
  this.placeMarker(this.props.data)
    return(  
        <div role="application" aria-labelledby='map' id='map'></div>
    )
    }
}
export default Map;



