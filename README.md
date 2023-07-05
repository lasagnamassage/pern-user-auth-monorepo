# What is this and how does it work?

This is a small example showing a full-stack monorepo demoing 
the use of JWTs to maintain sessions and storing passwords properly
in a database named `users`. 

## Installation

1. Run `npm i` to install dependencies
2. Run `npm run server` to start the server
3. In a new terminal instance, run `npm run client` to run the client
4. Open the app in `http://localhost:5173/`

**NOTE:** Make sure you have a table named `users`. The database
is assuming this table exists to register/login users
