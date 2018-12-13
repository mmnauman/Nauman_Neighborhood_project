# MMN Neighborhood Project

## Table of Contents

* [About The App](#about-the-app)
* [How To Run](#how-to-run)
* [How To Use](#about-the-app)
* [How To Use Offline](#offline-use)
* [Contributing](#contributing)
* [NPM Packages Used](#npm-packages)
* [API's Used](#api-used)


## About The App

This is not a Commercial App. This app is a working prototype derived from the project given by Udacity we used the concept of React to make it possible.
This Application Shows you upto 30 Hotels in your City. But Here I have Used my city (Bengaluru).
This Application Have Some Amazing Built In Features like:

1. Search Box to filter out your favorite Hotel from the list.
2. Markers on Map.
3. InfoWindow Appear when click on the Hotel Name / on the Marker.
4. Animation like Bounce, And Drop on Markers.
5. Realtime Changes
6. Unique And Beautiful Interface
7. Responsive Interface
8. You Can use this Site Offline. This is possible because of A feature called Service Worker.
9. Created The App keeping the Accessibility as first Focus.

## How To Run

1. Go To The Github Page of this project. You need to download it or clone it on your systems.
2. Then extract the zip file if you have downloaded
3. if you have clone it then skip the above step and go to the directory using the commmand cd project name
4. you need to install the npm dependencies. write npm install
5. The last step is to write another command which is npm start
6. then you will see the server starting at http://localhost:3000
7. You type this url in your brower or it will automatically open in your browser as the server starts

#### Enjoy browsing the application. Thanks

## How To Use

In the About the App Section I have already revealed the features. In this section I will show you how to use some of them.

1. First On the Home Page you will see two things A Sidebar and A Map. 
2. Sidebar Contains Two Things, Search Box To Search Your Desired Hotel and Hotels List which will appear when you interact with the search box which means when you search the name of the hotel.

Where as when you see the map you will see upto 30 markers on the map on different locations of the city. 
When you click on any marker you will see a popup box will show the info of that marker.

It will show you The Name, The Address and the Pincode.

When a user search the name of the hotel if it is available then the marker will start bouncing and show you the info about the hotel.

## Offline Use 

You can use the application offline only when it is in the production mode. This is possible because of a feature called Service Worker.

When you fisrt visit the app it will cache the app and when you close the app and visit it later then you will get the cache copy of the site. you can browse the app even if the Data connection is offline.

To See Service Worker in Action - You Need to type.

#### npm run build 

`npm run build `

This above Command Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributing

Sorry, This is just a project. If We plan to create something for the commercial use then we will open the contribution section. 

## NPM Packages

-react-router-dom
-escape-string-regexp
-sort-by

## API Used

* Google Maps API
* Foursquare API
