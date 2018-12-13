// In this Script I'm adding the script tag manually

//Declaring Variables

const CLIENT_ID = 'EAXOPVTOBZ4K4CPIAVR4H1LRNG3GI3COBBPPJUEMZG15BZ5G';
const CLIENT_SECRET = 'I00FI3O5KB4M5IQWXEMSOC41LOBOO3HRR3LRHP0CP0HRCWUR';
let version = 20180323;
let query = 'hotel';
let near = 'Bengaluru';
let section = "hotels";
const URL = `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${version}&section=${section}&near=${near}&query=${query}`;

export let initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
         center: {lat: 12.972581, lng:77.595035},
         zoom: 13
       });

      window.map = map;

}
      
export const loadMap = (api, usingLibraray = false, libraryName = "") => {
        let script = document.querySelector('script');
        console.log(script);
        let newScript = document.createElement('script');
        if(usingLibraray === true){
          newScript.src = `https://maps.googleapis.com/maps/api/js?libraries=${libraryName}&v=3&key=${api}&callback=initMap`;
        }else{
        newScript.src = `https://maps.googleapis.com/maps/api/js?v=3&key=${api}&callback=initMap`;
        }
        newScript.async = true;
        newScript.defer = true;
        script.parentNode.insertBefore(newScript, script);
        //console.log(script.parentNode);
      window.initMap = initMap;
}

export let fetchResults = () => 
    fetch(URL)
    .then((response) => {
        if (response.ok) {
            return response.json()
          } else {
            throw new Error('Something went wrong. Please Check the URL/API');
          }
    }).then((data) => {
        console.log(data.response.groups[0].items);
        return data.response.groups[0].items;
    })
    .catch((error) => {
        throw error
});


