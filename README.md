# Simple Rest API

This API allows users to access and manipulate resources through HTTP requests. The API follows the principles of REST (Representational State Transfer) and uses standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources.

Authenication is not required for this API since it is a public API that can be accessed by anyone so therefore no API Key is required

#### Endpoints:

**GET** /users: Retrieve a list of all available resources  
**GET** /users/{id}: Retrieve a specific resource by ID  
**POST** /: Create a new resource  
**PATCH** /users/{id}: Update a specific resource by ID  
**DELETE** /users/{id}: Delete a specific resource by ID  

Request and Response Format:  
_All API requests and responses are in JSON format._  

The documentation lives here: [Documentation](https://documenter.getpostman.com/view/25504073/2s8ZDeSy1R)  
The API deployment lives here: [Deployment](https://simple-userinput-api-2.onrender.com)  

Technologies used to write the API includes: _NodeJS, Express, MongoDB, Joi_ (For Validation of inputs)  
Deployment is hosted on [Render](https://render.com/)


