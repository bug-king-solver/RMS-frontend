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

export interface BookStateType {
    createModalOpened: boolean;
    deleteModalOpened: boolean;
    isEditable: boolean;
    isLooking: boolean;
    editableBook: BookItemType;
    deletableId: number | undefined;
}


export interface BookItemPropsType {
    item: BookItemType;
};

export interface ModalProps {
    onClose: () => void;
}
  
