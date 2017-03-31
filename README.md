# MyType frontend
MyType is an app to test your typing skills.
It serves as a learning and a "weekend" project and the current status is that it is
very much under development.

[Here](https://github.com/orouvinen/mytype-backend) is the backend repository.

## Installation
```
npm install
```

## Running
```
npm start
```
For full functionality, you'll want to have the back end running as well. For development,
you need to configure a proxy in ```package.json```:

Check the port number the backend is listening on, and put it under the
"proxy" key. (For example:
```
    {
     "proxy": "localhost:3002"
    }
```
