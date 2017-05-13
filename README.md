# clubhouse
Startup for club organization web app

## Technologies Used
* [MongoDB](https://www.mongodb.com/)
* [AngularJS](https://angularjs.org/)
* [ExpressJS](https://expressjs.com/)
* [NodeJS](https://nodejs.org/en/)
* [Bootstrap](http://getbootstrap.com/)

## Development Tools

### Git

First and foremost, you'll need to download a version control system to pull and push changes. You can always use a git command line, but if you need a GUI for it, here are some options for you to choose from.

* [GitKraken](https://www.gitkraken.com/)
* [SourceTree](https://www.sourcetreeapp.com/)

### Code Editor

There's lots out there, but here are a few that our team enjoys using. Find one that suits your style! Bonus points if it's Vim ;-)

* [Atom](https://atom.io/)
* [Brackets](http://brackets.io/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Installation

Before you can get the server up and running, you will need to do the following:

1. Download and install [NodeJS](https://nodejs.org/en/).
2. Execute `npm install` at the root of the project.

## Starting the Server in Development Mode

Since we are still early in our project, we don't have everything configured for production. However, you can still start the server to see how it works by following these steps.

1. Go to where you installed MongoDB and run it (e.g. mongod.exe). A terminal should appear, and it should say `waiting for connections on port 27017`.
2. Open the command line and go to the root of the project.
3. Execute `npm start`. You probably won't see much, but if it looks like it's waiting for something, go to the next step.
4. Open a browser and go to `localhost:3000`. You should see the homepage.

## Directory Structure

We put front end code in the `public` folder and back end code in the `app` folder. Convienient scripts are stored in the `scripts` folder, and configuration files are stored in the `config` folder.

## Helpful Tools

You don't have to download these programs now, but once you start getting comfortable with writing code, they might be useful for debugging issues.

* [Postman](https://www.getpostman.com/)
* [Robomongo](https://robomongo.org/)
