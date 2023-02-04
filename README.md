
## Tech Stack

- MongoDB: NoSQL database for storing data
- Express: Backend framework for Node.js
- React: Frontend JavaScript library for building user interfaces
- Node.js: JavaScript runtime environment for the backend

## Requirements

- Node.js >= 12.x
- MongoDB >= 4.x
- npm >= 6.x


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `pages` - we render these pages on our app.
    - #### `App.js` - This is what renders all of our browser routes and different pages
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `.env` - This holds our configuration files, like mongoDB uri, jwt secret string, etc
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!



## Getting Started

1. Clone the repository
```terminal
$ https://github.com/ShubhamAXS19/SocialMediaApp.git
```

2. Install dependencies

### cd server 
### `npm install`

### cd client 
### `npm install`


3. Set up a MongoDB database and add the URI to a .env file

### `Add Mongo_url` 
### `Add jwt_secret`

4. Start the development server

### Start the backend server
### cd server
### `npm start`

### Start the react app
### cd client 
### `npm start`

This app is deployed using [Heroku](https://www.heroku.com/).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
