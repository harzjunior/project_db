// graphql/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Address {
    _id: ID!
    street_address: String!
    city: City!
    postal_code: String!
    createdAt: String!
    updatedAt: String!
  }

  type City {
    _id: ID!
    city_name: String!
    country: Country!
    createdAt: String!
    updatedAt: String!
  }

  type Country {
    _id: ID!
    country_name: String!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    _id: ID!
    user: User
    guest_name: String
    guest_email: String
    comment_text: String!
    createdAt: String!
    updatedAt: String!
  }

  type Contact {
    _id: ID!
    name: String!
    email: String!
    message: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    addresses: [Address]
    address(id: ID!): Address
    cities: [City]
    city(id: ID!): City
    countries: [Country]
    country(id: ID!): Country
    users: [User]
    user(id: ID!): User
    comments: [Comment]
    comment(id: ID!): Comment
    contacts: [Contact]
    contact(id: ID!): Contact
  }
`;

module.exports = typeDefs;
