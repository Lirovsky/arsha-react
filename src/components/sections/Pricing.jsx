import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import Title from "../Title";

export default function Priecing() {

    return (
        <div className="bg-white">
            <div className="container mx-auto py-14">
                <Title title={"Priecing"}/>
                <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                <div className="columns-1 lg:columns-3 px-10 lg:px-0">
                    <div className="flex flex-col gap-10 w-full rounded-lg bg-white p-8 shadow-lg border-t-8 border-transparent hover:border-sky-500">
                        <p className="font-bold text-lg">
                            Free Plan
                        </p>
                        <p className="flex flex-col text-6xl">
                            $0
                            <span className="text-lg font-bold text-sky-500">
                                per month
                            </span>
                        </p>
                        <div className="text-center sm:text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Quam adipiscing vitae proin
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nulla at volutpat diam uteera
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nec feugiat nisl pretium
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3 text-gray-400">
                                <IoClose />
                                <p className="text-lg xl:text-xl line-through">
                                    Nulla at volutpat diam uteera
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3 text-gray-400">
                                <IoClose />
                                <p className="text-lg xl:text-xl line-through">
                                    Massa ultricies mi quis hendrerit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 mt-10 w-full rounded-lg bg-white p-8 shadow-lg border-t-8 border-transparent hover:border-sky-500">
                        <p className="font-bold text-lg">
                            Business Plan
                        </p>
                        <p className="flex flex-col text-6xl">
                            $29
                            <span className="text-lg font-bold text-sky-500">
                                per month
                            </span>
                        </p>
                        <div className="text-center sm:text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Quam adipiscing vitae proin
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nulla at volutpat diam uteera
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nec feugiat nisl pretium
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nulla at volutpat diam uteera
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3 text-gray-400">
                                <IoClose />
                                <p className="text-lg xl:text-xl line-through">
                                    Massa ultricies mi quis hendrerit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 mt-10 w-full rounded-lg bg-white p-8 shadow-lg border-t-8 border-transparent hover:border-sky-500">
                        <p className="font-bold text-lg">
                            Developer Plan
                        </p>
                        <p className="flex flex-col text-6xl">
                            $49
                            <span className="text-lg font-bold text-sky-500">
                                per month
                            </span>
                        </p>
                        <div className="text-center sm:text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Quam adipiscing vitae proin
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nulla at volutpat diam uteera
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nec feugiat nisl pretium
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Nulla at volutpat diam uteera
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FaCheck />
                                <p className="text-lg xl:text-xl">
                                    Massa ultricies mi quis hendrerit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}