export interface BookItemType {
    title: string;
    desc: string;
    body: string;
    isPublished: boolean | null;
};

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
