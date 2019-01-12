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

## Deployment
To build/deploye the website, you can simply run:

```sh
# it will place all files needed for deployment into the /dist directory 
npm run build
```
<br><br><br>

# Development


## Source Directory Structure

- ### components 
    all dynamica ui components

- ### core 
    javaScript files that manage the main business logic of the app: controller, view, data model and etc. 

- ### layouts 
    template `.html` files that specify how the app and each section will be rendered. 

- ### static 
    images, logos and etc

- ### styles 
    all `.scss` files, let's use the `index.scss` as a entry point to load all other `.scss` files

- ### utils     
    the utility JavaScript files that could be used site-wide

<br>

## Working with the Repo

- configure the remote for your fork

    - specify a new remote upstream repository that will be synced with the fork
    ```
    git remote add upstream https://github.com/vannizhang/MudslideApp.git
    ```

    - verify the new upstream repository you've specified for your fork.
    ```
    git remote -v
    ```

- sync with the main repo
    ```
    git fetch upstream

    git merge upstream/master
    ```

- push your changes
    
    - push changes to your fork
    - go to your fork on GitHub and create a new pull request