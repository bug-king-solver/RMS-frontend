import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { useAppSelector } from '../../hooks/redux-hooks';
import { ModalProps } from '../../constant/types';
import { useAddBook, useUpdateBook } from '../../graphql';

const CreateModal = ({ onClose }: ModalProps) => {

    const modalStatus = useAppSelector(state => state.book.bookModalStatus);
    const editableData = useAppSelector(state => state.book.bookState);
    
    const [addNewBook] = useAddBook();
    const [updateBook] = useUpdateBook();
    const validationSchema = z.object({
        title: z.string().min(3, {message: "Title is required"}),
        description: z.string().min(3, {message: "Description is required"}),
        published: z.boolean(),
        body: z.string().min(3, {message: 'Body is required'})
    });

    type ValidationSchema = z.infer<typeof validationSchema>;
    
    const { register, handleSubmit, formState: {errors}} = useForm<ValidationSchema>({
        defaultValues: {
            title: editableData.title,
            published: editableData.published,
            description: editableData.description,
            body: editableData.body
        },
        resolver: zodResolver(validationSchema),
    });
    const onSubmit: SubmitHandler<ValidationSchema> = (data: ValidationSchema) => {
        if (modalStatus === 'edit') {
            const newBook = {
                id: Number(editableData.id),
                ...data,
            };
            updateBook({variables: {
                input: newBook
            }})
        } else {
            addNewBook({variables: {
                input: data
            }});
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 rounded-lg shadow-lg relative md:max-w-md overflow-auto max-h-[100%]">
                <form className="block rounded-lg bg-white p-6" onSubmit={handleSubmit(onSubmit)}>
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
                            <input disabled={modalStatus === 'process'} type="text" id="title" className='w-full border-sold border-2 border-gray-400 rounded-lg p-2' {...register('title')}/>
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
                            <input disabled={modalStatus === 'process'} className='justify-start' type="checkbox" id="published" {...register('published')} />
                        </div>
                    </div>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='mb-3'>
                            <p>Description</p>
                        </div>
                        <div className='w-full'>
                            <input disabled={modalStatus === 'process'} type="text" id="description" className='w-full border-sold border-2 border-gray-400 rounded-lg p-2' {...register('description')} />
                            {
                                errors.description && (
                                    <p className="text-start text-xs italic text-red-500 mt-2"> {errors.description?.message}</p>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='mb-3'>
                            <p>Body</p>
                        </div>
                        <div className='w-full'>
                            <textarea disabled={modalStatus === 'process'} id="body" cols={30} rows={10} className='w-full border-sold border-2 border-gray-400 rounded-lg p-2' {...register('body')} />
                            {
                                errors.body && (
                                    <p className="text-start text-xs italic text-red-500 mt-2"> {errors.body?.message}</p>
                                )
                            }
                        </div>
                    </div>
                        {
                            modalStatus === 'create' || modalStatus === 'edit' ? <>
                                <div className='flex flex-col md:flex-row md:justify-between'>
                                    <button type='submit' className='border-2 border-gray-300 border-solid hover:border-gray-500 md:w-40 p-2 rounded-lg mb-2 md:mb-0 md:mr-2'>{ modalStatus === 'edit' ? 'Update' : 'Submit'}</button>
                                    <button className='rounded-lg border-solid border-2 border-gray-300 p-2 md:w-40 hover:border-gray-500 mt-2 md:mt-0' onClick={onClose}>Cancel</button>
                                </div>
                            </> :
                            <button className="rounded-lg border-solid border-2 border-gray-300 p-2 md:w-40 hover:border-gray-500" onClick={onClose}>Close</button>
                        }
                </form>
            </div>
        </div>
    );
};

export default CreateModal;
