export interface tableItemType {
    id: number;
    title: string;
    published: boolean;
    desc: string;
    body: string
};

export interface tableItemPropsType {
    tableData: tableItemType;
};