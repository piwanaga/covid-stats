//to make the GraphQL wrapper of the REST API, we need to work with the RESTDataSource class
const { RESTDataSource } = require('apollo-datasource-rest');

//assuming we're in a dev environment, we're going to require secrets to keep from pasting our API Key in our code
if (process.env.NODE_ENV !== 'production') require('./secrets.js')

class CasesAPI extends RESTDataSource {
    constructor() {
        super()
        // this is the base url for our API call, if you had more than one async query below this base would be the point where the queries diverge
        this.baseURL = 'https://coronavirus-smartable.p.rapidapi.com/stats/v1'
    }

    // setting headers for api request
    willSendRequest(request) {
        request.headers.set('x-rapidapi-key', process.env.API_KEY)
        request.headers.set('x-rapidapi-host', 'coronavirus-smartable.p.rapidapi.com')
    }

    //this is our main fetch call for our weather query
    async getCases({ location }) {
        //use template literals so you can change the zip code with each query - our client side application will provide the location
        //process.env.API_KEY is from our secrets.js file
        const response = await this.get(`${location}`)
        return this.casesReducer(response, location)
    }

    // our async call will pass data to this reducer, which will return the data mapped to our GraphQL schema
    casesReducer(cases, location) {
        return {
            state: cases.location.provinceOrState,
            totalCases: cases.stats.totalConfirmedCases,
            newCases: cases.stats.newlyConfirmedCases,
            totalDeaths: cases.stats.totalDeaths,
            newDeaths: cases.stats.newDeaths
        }
    }
}

module.exports = CasesAPI