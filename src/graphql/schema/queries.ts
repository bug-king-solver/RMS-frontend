import { gql } from "@apollo/client";

export const GET_All_BOOKS = gql`
  query findAll {
    findAll {
      id
      title
      description
      body
      published
    }
  }
`;

export * from './queries';