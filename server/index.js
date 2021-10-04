const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const CasesAPI = require('./datasource'); 

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        casesAPI: new CasesAPI()
    }),
    engine: {
        reportSchema: true,
        variant: 'current'
    }
});

server.listen().then(({ url }) => {
    console.log(`server started at ${url}`);
});
