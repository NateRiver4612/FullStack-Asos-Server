const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
// import { startServerAndCreateNextHandler } from "@as-integrations/next";
const connectMongo = require("./utils/mongodb");
// import allowCors from "../../../utils/cors.utils";
require("dotenv").config();

async function startApolloServer(typeDefs, resolvers) {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: connectMongo(),
  });

  const { url, port } = await apolloServer.listen({
    port: process.env.PORT || 4000,
  });
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);

// const handler = startServerAndCreateNextHandler(apolloServer);

// export default allowCors(handler);
