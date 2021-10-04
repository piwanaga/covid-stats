const { gql } = require('apollo-server');

const typeDefs = gql`
    type Cases {
        state: String!
        totalCases: Int!
        newCases: Int!
        totalDeaths: Int!
        newDeaths: Int!
    }
    type Query {
        cases(location: String!): Cases
    }
`

module.exports = typeDefs
