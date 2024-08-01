import {useForm} from 'react-hook-form';

export default function JoinOurNewsletter() {
    const {handleSubmit, register, formState: {errors}} = useForm();

    const handleFormSubmit= (data) => {
        console.log(data)
    }
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto text-center py-10">
                <h5 className="text-2xl font-bold text-sky-700">Join Our Newsletter</h5>
                <p className="text-lg pt-5 pb-10 px-10 md:px-0">
                    Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </p>
                <div className="mx-auto px-10">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <input 
                            {...register('email', {required: true})} 
                            type="email" 
                            className="w-full p-3 mb-2 rounded-full sm:rounded-e-none sm:w-8/12 lg:w-6/12" 
                        />
                        {errors.email?.type === 'required' && <p className="text-red-500">Campo obrigatório*</p>}

                        <button type="submit" className="py-3 px-10 rounded-full text-white bg-sky-500 sm:rounded-s-none">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}