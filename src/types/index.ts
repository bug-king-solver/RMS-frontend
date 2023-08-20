import { ApolloError } from "@apollo/client";

export interface OriginBookItemType {
    id?: number;
    title: string;
    description: string;
    body: string,
    published: boolean,
}

export interface BookItemType {
    id?: number;
    title: string;
    desc: string;
    body: string;
    isPublished: boolean;
};

export interface GraphQLBookType {
    data: BookItemType;
    loading: boolean;
    error: ApolloError | undefined;
}

export interface GraphQLBooksType {
    books: BookItemType[];
    loading: boolean;
    error: ApolloError | undefined;
}

export interface BookStateType {
    isLoading: boolean;
    createModalOpened: boolean;
    deleteModalOpened: boolean;
    isEditable: boolean;
    editableBook: BookItemType;
    deletableTitle: string;
    allBooks: BookItemType[];
}

export interface UpdateBookItemType {
    id: number;
    data: BookItemType;
};

export interface BookItemPropsType {
    itemData: BookItemType;
};

export interface ModalProps {
    onClose: () => void;
}
  
