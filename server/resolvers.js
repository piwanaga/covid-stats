module.exports = {
    Query: {
        cases: (_, { location }, { dataSources }) => 
        dataSources.casesAPI.getCases({ location })
    }
}

