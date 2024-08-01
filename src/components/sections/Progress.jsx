import ImageSkills from '../../../public/img/skills.png'

export default function Progress() {
    return (
        <div className="w-full py-20 bg-white">
            <div className='container px-10 mx-auto flex flex-col items-center justify-evenly gap-10 lg:flex-row md:text-left md:px-0 lg:px-5'>
                <div className="w-full m-auto py-4">
                    <img src={ImageSkills} className="w-full mx-auto"/>
                </div>
                <div className="w-full mx-auto md:ps-5">
                    <h3 className="text-2xl text-sky-600 font-semibold md:text-4xl">
                        Voluptatem dignissimos provident quasi corporis voluptates
                    </h3>
                    <p className="text-lg italic py-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="w-full flex flex-col gap-5"> 
                        <div>
                            <div className='flex justify-between text-sky-700 font-semibold'>
                                <span>HTML</span>
                                <span>100%</span>
                            </div>
                            <div className='bg-sky-200 h-3 mt-1'>
                                <div className='bg-sky-700 w-[100%] h-full'></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between text-sky-700 font-semibold'>
                                <span>CSS</span>
                                <span>90%</span>
                            </div>
                            <div className='bg-sky-200 h-3 mt-1'>
                                <div className='bg-sky-700 w-[90%] h-full'></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between text-sky-700 font-semibold'>
                                <span>JAVASCRIPT</span>
                                <span>75%</span>
                            </div>
                            <div className='bg-sky-200 h-3 mt-1'>
                                <div className='bg-sky-700 w-[75%] h-full'></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between text-sky-700 font-semibold'>
                                <span>PHOTOSHOP</span>
                                <span>55%</span>
                            </div>
                            <div className='bg-sky-200 h-3 mt-1'>
                                <div className='bg-sky-700 w-[55%] h-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}