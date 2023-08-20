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

export const ADD_New_BOOK = gql`
  mutation AddNewBook($input: CreateBookInput!) {
    createBook(createBookInput: $input) {
      id
      title
      description
      body
      published
    }
  }
`;