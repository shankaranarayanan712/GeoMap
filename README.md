# Geo Location Application
React, Hooks and Typescript, Leaflets 

## Requirements to run using npm

For development, you will need Node.js installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    ex: v14.18.1

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Application Set up and test steps
## Install
    $ cd YOUR_PROJECT_PATH
    $ npm install

## Build
    $ npm run build

## Running the project using npm

    $ npm run start
    The app will run on the port 3000
## Testing the project
    $ npm run test

## Service Overview
1. The Application is built with React, Typescript and it runs on port 3000

2. It uses containerised react architecture wherein the UI components are encapsulated with container to have standalone       implementations

3. The use of the application is provide Geolocation based on the bbox coordinates

4. Once the application is launched, it does the following
   a. Makes a call to open api to get the location information
   b. The response is gathered as osm format
   c. It is then converted as a GeoJson format
   d. Which is then rendered in the maps

5. The application uses Leaflets to render the location maps

6. Validation are in place, if for any reason the data could not be fetched, an error message is shown as a fallback

7. The application is encapsulated with error boundary, hence any error occurs will have a fallback with the error component

8. Test cases are written using Jest library

9. The Code is linted and formatted using Prettier.

10. To perform test cases, run --> npm run test



