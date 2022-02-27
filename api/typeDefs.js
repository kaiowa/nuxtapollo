const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Empleado{
        userId: String!,
        jobTitle: String,
        firstName: String,
        lastName: String,
        employeeCode: String,
        region: String,
        phoneNumber: String,
        emailAddress: String
    }
  
   type Query{
       getAll: [Empleado]!
   }
`;

module.exports = typeDefs;