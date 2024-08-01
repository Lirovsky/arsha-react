import {useForm} from 'react-hook-form';

export default function Form() {
    const {handleSubmit, register, formState: {errors}} = useForm();

    const handleFormSubmit= (data) => {
        console.log(data)
    }
    return(
        <div className="bg-white border-y-8 border-sky-500 md:px-10">
            <div className='px-5 py-10 mx-auto'>
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className="flex flex-col gap-3"
                    >
                        <div className="flex flex-col gap-3 lg:flex-row">
                            <div className="flex flex-col w-full">
                                <label>Your Name</label>
                                <input 
                                    {...register('name', {required: true, minLength: 3, maxLength: 20})} 
                                    type="text" 
                                    className="w-full border rounded-md p-2" 
                                />
                                {errors.name?.type === 'required' && <p className="text-red-500">Campo obrigatório*</p>}
                                {errors.name?.type === 'minLength' && <p className="text-red-500">Precisa ter 3 caracteres*</p>}
                            </div>
                            <div className="flex flex-col w-full">
                                <label>Your Last Name</label>
                                <input 
                                    {...register('lastName', {required: true, minLength: 3, maxLength: 20})} 
                                    type="text" 
                                    className="w-full border rounded-md p-2" 
                                />
                                {errors.lastName?.type === 'required' && <p className="text-red-500">Campo obrigatório*</p>}
                                {errors.lastName?.type === 'minLength' && <p className="text-red-500">Precisa ter 3 caracteres*</p>}

                            </div>
                        </div>
                        
                        <label>Your Email</label>
                        <input 
                            {...register('email', {required: true})} 
                            type="email" 
                            className="w-full border rounded-md p-2" 
                        />
                        {errors.email?.type === 'required' && <p className="text-red-500">Campo obrigatório*</p>}

                        <label>Subject</label>
                        <input 
                            {...register('subject', {required: true, minLength: 10})} 
                            type="text" 
                            className="w-full border rounded-md p-2" 
                        />
                        {errors.subject?.type === 'required' && <p className="text-red-500">Campo obrigatório*</p>}
                        {errors.subject?.type === 'minLength' && <p className="text-red-500">Precisa ter 10 caracteres*</p>}
                        
                        <label>Message</label>
                        <textarea 
                            {...register('message', {required: true})} 
                            type="text" 
                            className="w-full border rounded-md p-2 h-48 resize-none" 
                        />
                        {errors.message?.type === 'required' && <p className="text-red-500">Campo obrigatório*</p>}

                        <button 
                            type="submit" 
                            className="w-full py-2 px-4 mt-5 mx-auto rounded-full border border-transparent text-white bg-sky-500 hover:bg-transparent hover:text-sky-500 hover:border-sky-500 md:w-1/2"
                        >
                             SEND MESSAGE
                        </button>
                    </form>
            </div>
        </div>
    )
}