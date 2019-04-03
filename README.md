Existential Friend Finder
=======================================================================
Do we ever really connect with one another? Is it possible to know another human being, or are we limited only to our own dilluted representations of what other people must think and feel and experience? Are we all doomed to inescapable loneliness? This full-stack application was designed to provide users with just a moment of relief, which will come when they are matched with whoever has previously responded to the survey most similarly to them, even though it will be snuffed out like a light the moment they dismiss the modal popup displaying their kindred spirit. 

![demo gif](app/public/assets/images/friend-finder-demo.gif "demo gif of friend finder in action")

## 🔑 How to use the app  
+ Users are asked to provide their name and a link to a photo, and then fill out a short survey consisting of 10 existential statements. 
  
+ Users can respond to each statement by selecting a number on a scale from 1 to 5, where 1 is strongly disagree, 3 is neutral, and 5 is strongly agree. 
  
+ Upon submitting the survey, users will be matched with the person who has answered the survey questions most similarly to them, and shown their name and picture. It relies on express and path for routing and Node.js for its server environment. 

## 📁 Deployment Instructions
This app has been deployed to Heroku, and the link can be found [here](https://limitless-dawn-28902.herokuapp.com/ "live link"). If you would like to run the app locally, follow these instructions: 

1. Clone this repository down to your machine.
   
2. Enter `npm install` into your command line after navigating into the root directory, which will install the dependencies listed in the package.json.
   
3. Enter `node server.js`, which will initiate the server on http://localhost:3000.
   
4. Navigate to http://localhost:3000 in your browser, or ctrl-click the link that will be logged to your console. Enjoy!

## 🔧 Technologies Used  

+ Logic for the app was written with **JavaScript**.
  
+ **Heroku** for live deployment and hosting.
  
+ **Node.JS** for the app's server environment.
  
+ **NPM** for installation of the packages required by the app, **express** and **path**.

+ Favicon source: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## 🌌 Author 

Thor Nolan—https://github.com/ThorNolan
