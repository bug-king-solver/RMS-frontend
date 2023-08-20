import { BookItemType, OriginBookItemType } from "../types";

export const convertInputItemType = (origin: OriginBookItemType[]): BookItemType[] =>
    origin.map(item => ({
        id: item.id,
        title: item.title,
        isPublished: item.published,
        desc: item.description,
        body: item.body
    }));


export const convertOutputItemType = (origin: BookItemType): OriginBookItemType => ({
    id: origin.id,
    title: origin.title,
    body: origin.body,
    description: origin.desc,
    published: origin.isPublished
});