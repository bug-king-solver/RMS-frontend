import { gql } from '@apollo/client';

export const ADD_New_BOOK_MUTATION = gql`
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

export const UPDATE_BOOK_MUTATION = gql`
    mutation UpdateBook($input: UpdateBookInput!) {
        updateBook(updateBookInput: $input) {
            id
            title
            description
            published
            body
        }
    }
`;

export const REMOVE_BOOK_MUTATION = gql`
    mutation RemoveBook($input: Int!) {
        removeBook(id: $input) {
            id
            title
            description
            body
            published
        }
    }
`;
