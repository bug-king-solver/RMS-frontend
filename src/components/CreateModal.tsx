import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { ModalProps } from '../types';
import { useAddBook, useUpdateBook } from '../graphql-api';
import { convertOutputItemType } from '../utils';

const CreateModal = ({ onClose }: ModalProps) => {

    const dispatch = useAppDispatch();

    const isEditable = useAppSelector(state => state.book.isEditable);
    const editableData = useAppSelector(state => state.book.editableBook)
    const [addNewBook] = useAddBook();
    const [updateBook] = useUpdateBook();
    const validationSchema = z.object({
        title: z.string().min(3, {message: "Title is required"}),
        desc: z.string().min(3, {message: "Description is required"}),
        isPublished: z.boolean(),
        body: z.string().min(3, {message: 'Body is required'})
    });

    type ValidationSchema = z.infer<typeof validationSchema>;
    
    const { register, handleSubmit, formState: {errors}} = useForm<ValidationSchema>({
        defaultValues: {
            title: editableData.title,
            isPublished: editableData.isPublished,
            desc: editableData.desc,
            body: editableData.body
        },
        resolver: zodResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<ValidationSchema> = (data: ValidationSchema) => {
        if (isEditable) {
            const newBook = convertOutputItemType(data);
            newBook.id = Number(editableData.id);
            updateBook({variables: {
                input: newBook
            }})
        } else {
            const newBook = convertOutputItemType(data);
            addNewBook({variables: {
                input: newBook
            }});
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <form className="block max-w-md rounded-lg bg-white p-6" onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-10'>
                    <p className='font-mono text-xl text-center'>
                        Add New Book
                    </p>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='mb-3'>
                        <p>Title</p>
                    </div>
                    <div className='w-full'>
                        <input type="text" id="title" className='w-full border-sold border-2 border-gray-400 rounded-lg p-2' {...register('title')}/>
                        {
                            errors.title && (
                                <p className="text-start text-xs italic text-red-500 mt-2"> {errors.title?.message}</p>
                            )
                        }
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='mr-3'>
                        <p>Published</p>
                    </div>
                    <div className='flex'>
                        <input className='justify-start' type="checkbox" id="published" {...register('isPublished')} />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='mb-3'>
                        <p>Description</p>
                    </div>
                    <div className='w-full'>
                        <input type="text" id="desc" className='w-full border-sold border-2 border-gray-400 rounded-lg p-2' {...register('desc')} />
                        {
                            errors.desc && (
                                <p className="text-start text-xs italic text-red-500 mt-2"> {errors.desc?.message}</p>
                            )
                        }
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='mb-3'>
                        <p>Body</p>
                    </div>
                    <div className='w-full'>
                        <textarea id="body" cols={30} rows={10} className='w-full border-sold border-2 border-gray-400 rounded-lg p-2' {...register('body')} />
                        {
                            errors.body && (
                                <p className="text-start text-xs italic text-red-500 mt-2"> {errors.body?.message}</p>
                            )
                        }
                    </div>
                </div>
                <div className='flex justify-between space-x-5 mb-5'>
                    <button type='submit' className='rounded-lg border-solid border-2 border-gray-300 p-2 mr-5 md:w-40 hover:border-gray-500'>{ isEditable ? 'Update' : 'Submit'}</button>
                    <button className='rounded-lg border-solid border-2 border-gray-300 p-2 mr-5 md:w-40 hover:border-gray-500' onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default CreateModal;
