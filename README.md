# Login Flow API

## [Login Flow API](https://vikings-ec-bn-mbhd.onrender.com/api-docs/#/)

This is a backend API built using Express.js framework for an login flow . The API provides several features including:

- Register user
- Login user
- Data Validation and sanitazation

## INSTALLATION

### Requirements

> For development, you need to have node installed and npm package installed in your environment.

#### Node

##### Node installation on windows

> Just go to the [Nodejs website](https://nodejs.org) and download the installer.
> in addition, make sure you have `git` available in your path. `npm` migth need it. Find it [here](https://git-scm.com)

##### Node installation on Linux and other operating system

> Refer to the [documentation](https://nodejs.org) and offical npm website [npm website](https://npmjs.com)

#### NPM installation

```ps
npm install
```

### Project Installaton

> clone the project, by running the commands below in your terminal.

```ps
git clone https://github.com/leandreAlly/login-api.git
```

```ps
cd login-api
```

> package installation

```ps
npm install
```

### Running the app

> Before running the project locally, make sure you have all required environment variables in your .env file.
> you can find the required environment variables in `.env.example` file.

#### Database Url Connection

You can add your mongodb connection url string in .env fille

> development mode

```ps
npm run dev
```

> production mode

```ps
npm run start
```

## Online app

You can visit the fully swagger documented app [here](https://login-flow-api.onrender.com/api-docs/#/)

#### Documentation

##### Swagger documentation endpoint for your the backend project

> Replace {port} with your port on which development server is running ex:http://localhost:5000/api-docs

```ps
http://localhost:{port}/api-docs
```

## Deployment

- [Login Flow API](https://login-flow-api.onrender.com/api-docs/#/)

## Note:

This application are hosted on render free tier, sometimes it can take a time to pull up the server, please try more reload and wait for some seconds.
