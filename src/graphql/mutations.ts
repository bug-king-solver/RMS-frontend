import { gql } from '@apollo/client';

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