# Job Listing Front

### Table of Contents
* [Prerequisites](#Prerequisites)
* [Tech Stack](#Tech-Stack)
* [Getting Started](#Getting-Started)
* [Project Structure](#Project-Structure)
* [Deployment](#Deployment)
* [Author](#Author)

#
### Prerequisites


* <img src="readme/npm.png" width="25" style="top: 8px" /> *npm @8 and up*
* <img src="readme/typescript.png" width="25" style="top: 8px" /> *typescript*

#
### Tech Stack

* <img src="readme/react.png" width="25" style="top: 8px" /> *React @18.2.0 - front-end framework*
* <img src="readme/styled-components.png" width="25" style="top: 8px" /> *Styled-components @5.3.6 - visual primitives for the component age*
* <img src="readme/axios.png" width="25" style="top: 8px" /> *Axios @1.2.1 - Promise based HTTP client for the browser and node.js*

#
### Getting Started
1. First of all you need to clone app repository from github:
```
git clone git@github.com:beqa200/job-listing-front.git
```
2. Next step requires install all the dependencies.

```
npm install
```
3. To see project in action 

```
npm start
```

#
### Project Structure

```
|--- src
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- styled-components # all components' styles
|   |--- react-app-env.d.ts # declare all types
- package.json     # dependency manager configurations

```
#
### Deployment
Before every deployment you need to create build file.
```
npm run build
```
after this you can use this file to deploy project on server.

#
### Author
* [LinkedIn](https://www.linkedin.com/in/beqa-maisuradze-76a730234/)
