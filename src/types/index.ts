export interface BookItemType {
    title: string;
    desc: string;
    body: string;
    isPublished: boolean | null;
};

export interface BookStateType {
    isLoading: boolean;
    isEditable: boolean;
    editableBook: BookItemType;
    allBooks: BookItemType[];
}

export interface UpdateBookItemType {
    id: number;
    data: BookItemType;
};

export interface BookItemPropsType {
    tableData: BookItemType;
};
