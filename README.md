# SailsJS Ionic JWT Auth
This is a complete example on how to use JSON Web tokens in a SailJs Backend to authenticate an ionic client.
## Functionality
 - Users can register to the system.
 - Oncle logged in, users will get a JWT using which the client should make calls to the Backend.

URL's are protected as follows.
 - POST /auth - unprotected. Used to login to the Backend.
 - POST /users - unprotected. Used to login to the system.
 - GET /users - protected. Used to get the details of the current user.

Check **config/policies.js** to see how endpoints have been protected.

## Special Thanks
[https://thesabbir.com/how-to-use-json-web-token-authentication-with-sails-js/](https://thesabbir.com/how-to-use-json-web-token-authentication-with-sails-js/) was used to build the Backend.

## Running the project
Build and run the BE
```sh
npm install
sails lift
```

Build and run the FE
```sh
cd app
npm install
ionic serve
```
