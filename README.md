#Timestamp Microservice

An API that takes a given time in either unix or human readable form and returns both forms. 

##Getting Started

###Prerequisites

1. [node](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com)

###Installing
Clone the project

```git
git clone https://github.com/khansubhan95/timestamp-microservice.git
```

run

```
npm install
```

to install the dependencies

##Usage
####Valid endpoints

**Human readable**
[/December 1, 2014](https://frantic-factory.gomix.me/December%201,%202014) or [/December%201,%202014](https://frantic-factory.gomix.me/December%201,%202014)

**Unix timestamp**
[/1417372200](https://frantic-factory.gomix.me/1417372200)

Returns
```javascript
{'unix': 1417372200,'natural': "December 01, 2014"}
```

####Invalid endpoint

[/hello](https://frantic-factory.gomix.me/1417372200)

Returns
```javascript
{'unix': null,'natural': null}
```

##Builtwith
express(https://expressjs.com/)   

View other dependencies in package.json

##Licensing
MIT