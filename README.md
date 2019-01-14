# MudslideApp
Determine structures and roads affected by potential mudslides using current weather forecasts.

## Prerequisites
Before we begin, make sure you have a fresh version of [Node.js](https://nodejs.org/en/) and NPM installed. The current Long Term Support (LTS) release is an ideal starting point. 

## Installing 
To begin, fork this repository and clone ir to your computer:

```sh
https://github.com/vannizhang/MudslideApp.git
```

From the project's root directory, install the required packages (dependencies):

```sh
npm install
```

## Running the dev server 
Now you can start the webpack dev server to test the app on your local machine:

```sh
# it will start a server instance and begin listening for connections from localhost on port 8080
npm run start
```

## The Node.js Web Service
The front end app also needs to use a middleware Node.js web service to get data via REST API call, to set up the web service, please use the codes from this [repo](https://github.com/vannizhang/MudslideApp-server)

## Deployment
To build/deploye the website, you can simply run:

```sh
# it will place all files needed for deployment into the /dist directory 
npm run build
```
<br><br><br>