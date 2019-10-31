![ReactChallenge](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_HETIC.png/1200px-Logo_HETIC.png)

## What is it ? 

It's a project which intended to list the members of HETIC's with them informations (firstname, name, email, promotion, description, skills ...)

## Features 
- Authentication to the app
- List all students 
- Update students informations

## Installation and use for client part

- Clone the repository 
- In terminal, cd into the directory you cloned
- Use the package manager [npm](https://www.npmjs.com/) to install dependencies.
```bash
npm install
```
- To run it : 
```bash
npm start
```
- Visit http://localhost:3000/ and enjoy !

## Installation and use for server part

- In terminal, cd into server
```bash
npm install
```
- To run the server : 
```bash
nodemon index.js
```
- The server will turn in http://localhost:8080/

## REST API
- /register => register an user and store data to database (return data user object)
- /login => authenticate an user and return a JWT to get authorization
- /profile => return data user object 

## Project Team

> Hichem AMAR BENSABER

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

