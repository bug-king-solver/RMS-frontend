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

export const ADD_BOOK = gql`
  query createBook {
    createBook {
      title
      description
      body
      published
    }
  }
`