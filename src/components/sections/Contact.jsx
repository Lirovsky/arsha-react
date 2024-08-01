import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";

import Title from "../Title";
import Maps from "../Maps";
import Form from "../Form";

export default function Contact() {
    return (
        <div id="contact" className="bg-gray-100">
            <div className="container mx-auto py-14">
                <Title title={"Contact"}/>
                <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                <div className="flex flex-col gap-10 mt-10 px-10 lg:flex-row lg:items-stretch">
                    <div className="px-5 py-10 w-full text-lg border-y-8 border-sky-500 bg-white lg:w-8/12">
                        <div className="flex items-center">
                            <a href="#" className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                                <BsGeoAlt />
                            </a>
                            <div className="ps-3">
                                <h5 className="font-bold text-xl text-sky-600">
                                    Location:
                                    <br/>
                                    <span className="font-normal text-lg">
                                        A108 Adam Street, New York, NY 535022
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="flex items-center py-8">
                            <a href="#" className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                                <BsEnvelope  />
                            </a>
                            <div className="ps-3">
                                <h5 className="font-bold text-xl text-sky-600">
                                    Email:
                                    <br/>
                                    <span className="font-normal text-lg">
                                        info@example.com
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                                <BsPhone  />
                            </a>
                            <div className="ps-3">
                                <h5 className="font-bold text-xl text-sky-600">
                                    Call:
                                    <br/>
                                    <span className="font-normal text-lg">
                                        +1 5589 55488 55
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Maps />    
                        </div>
                    </div>

                    <div className="w-full text-lg lg:flex lg:justify-center">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}