const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const addressRoutes = require("./routes/addressRoutes");
const cityRoutes = require("./routes/cityRoutes");
const countryRoutes = require("./routes/countryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");

// Initialize Express app
const app = express();

//middleware
app.use(bodyParser.json());

// Set up MongoDB connection
let uri = "mongodb://localhost:27017/address_db"; //from mongodb Compass

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Create an ApolloServer instance with GraphQL schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the ApolloServer and apply middleware to Express app
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

// Call the function to start the ApolloServer
startApolloServer().then(() => {
  // Mount API endpoints routers
  app.use("/api/address", addressRoutes);
  app.use("/api/city", cityRoutes);
  app.use("/api/country", countryRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/comment", commentRoutes);

  // Start the Express server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `Server is running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});
