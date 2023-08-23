import ModalStatus from './enum'

export interface BookItemType {
    id?: number;
    title: string;
    description: string;
    body: string;
    published: boolean;
};

export interface BookModalStatusType {
    status: ModalStatus;
    data: BookItemType;
}

export interface BookStateType {
    bookModalStatus: ModalStatus;
    bookState: BookItemType;
}


export interface BookItemPropsType {
    item: BookItemType;
};

export interface ModalProps {
    onClose: () => void;
}