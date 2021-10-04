# Covid Stats

The goal of this project was to get familiar with the basics of GraphQL and Apollo Server by creating a GraphQL layer on top of an existing API endpoint. Using the [Coronavirus Smartable API](https://rapidapi.com/SmartableAI/api/coronavirus-smartable/) and Apollo Server, I built a simple GraphQL server that can be queried as a client to get Covid-19 stats about each U.S. state.

## Installation & Setup

### Clone the repo.

```
git clone https://github.com/piwanaga/covid-stats.git
```

### Set Up Server.

Install packages. In root directory:

```
npm install
```

### Add your own API Key. 

Go to [Coronavirus Smartable](https://rapidapi.com/SmartableAI/api/coronavirus-smartable/pricing) and subscribe to the free plan. Now when you view the available endpoints, you should have your own API key under 'Header Parameters'.

In 'server' folder, create file 'secrets.js' and add the following line:

```
process.env.API_KEY = 'ADD YOUR API KEY HERE'
```

### Set Up Client.

Install packages. Navigate to 'client' folder and run:

```
npm install
```

### Run in local server.
You will need two terminal windows open, one to run the server and one to run the client.


To run server, in root directory:

```
npm run start-server
```


To run client, in 'client' foler:

```
npm start
```

## Usage

1. Type in a U.S. state code e.g. 'CA', 'MA', 'NY', etc.
2. Click 'Submit' to view total cases, total deaths, new cases and new deaths for that state.




