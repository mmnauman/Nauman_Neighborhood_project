import React, {Component} from 'react';
//import Sidebar from '../images/Sidebar.PNG'

class Readme extends Component{

render(){
    return(  
        <div className='ReadMe'>
         <h1>App Introduction</h1>
        <div className='ReadMeInner'>
        <div className='AppIntroduction'>
        <p><strong>Introduction</strong>:  
        This is not a Commercial App. This app is a working prototype derived from the project given by Udacity we used the concept of React to make it possible.
        This Application Shows you 30 Hotels in your City. But Here I have Used mine (Bengaluru)
        This Application Have Some Amazing Built In Features like:
        </p>
        <ol>
            <li> Search Box to filter out your favorite Hotel from the list. </li>
            <li> Markers on Map. </li>
            <li> InfoWindow Appear when click on the Hotel Name / on the Marker. </li>
            <li> Animation like Bounce, And Drop on Markers. </li>
            <li> Realtime Changes </li>
            <li> Unique And Beautiful Interface </li>
            <li>Responsive Interface</li>
            <li>You Can use this Site Offline</li>
        </ol>

        <h2>Technologies Used:</h2>
        <p className='Tech'>We Have Used All the Required Languages and Additional Frameworks to Accomplish this project. 
            Here are the Technologies below:
        </p>
        <ol>
            <li> HTML, MarkDown And CSS</li>
            <li> Javascript And its Libraries Like Node,React</li>
            <li>Icons By Font-Awesome</li>
            <li> Google Maps Api, FourSquare Api </li>
        </ol>

        </div>

  <div className='secondRow'>
        <h2>How To Use The App?</h2>
        <ol>
            <li>
            You just need to download it or clone it on your systems. 
            </li>
            <li>
            Then extract the zip file if you have downloaded 
           </li>
            <li>
            if you have clone it then skip the above step and go to the directory using the commmand cd project name 
            </li>
            <li>
            you need to install the npm dependencies. write npm install
            </li>
            <li>
            The last step is to write another command which is npm start
            </li>
            <li>
            then you will see the server starting at http://localhost:3000
            </li>
            <li>
            You type this url in your brower or it will automatically open in your browser as the server starts
            </li>
            <li>
            Enjoy browsing the application. Thanks
            </li>

        </ol>



        </div>

        </div>
      
        </div>
    )
    }
}
export default Readme;