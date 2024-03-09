
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './app-graphql/typedefs.js';
import { resolvers } from './app-graphql/resolvers.js'
import { startApolloServer } from './app.js';

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })

// const { url } = await startStandaloneServer(server, {
// listen: { port: 8000 },
// });

// console.log(`🚀  Server ready at: ${url}`);

startApolloServer(typeDefs, resolvers)