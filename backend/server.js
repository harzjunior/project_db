const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const connectDB = require("./db");
const addressRoutes = require("./routes/addressRoutes");
const cityRoutes = require("./routes/cityRoutes");
const countryRoutes = require("./routes/countryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

// Initialize Express app
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

//middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

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
  app.use("/api/register", registerRoutes);
  app.use("/api/login", loginRoutes);

  // Start the Express server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(
      `Server is running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});
