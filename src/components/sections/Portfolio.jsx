import Title from "../Title";

import Portfolio1 from '../../../public/img/portfolio/portfolio-1.jpg'
import Portfolio2 from '../../../public/img/portfolio/portfolio-2.jpg'
import Portfolio3 from '../../../public/img/portfolio/portfolio-3.jpg'
import Portfolio4 from '../../../public/img/portfolio/portfolio-4.jpg'
import Portfolio5 from '../../../public/img/portfolio/portfolio-5.jpg'
import Portfolio6 from '../../../public/img/portfolio/portfolio-6.jpg'
import Portfolio7 from '../../../public/img/portfolio/portfolio-7.jpg'
import Portfolio8 from '../../../public/img/portfolio/portfolio-8.jpg'
import Portfolio9 from '../../../public/img/portfolio/portfolio-9.jpg'

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            link: '#',
            img: Portfolio1,
            name: 'Project Name 1'
        },
        {
            id: 2,
            link: '#',
            img: Portfolio2,
            name: 'Project Name 2'
        },
        {
            id: 3,
            link: '#',
            img: Portfolio9,
            name: 'Project Name 3'
        },
        {
            id: 4,
            link: '#',
            img: Portfolio5,
            name: 'Project Name 4'
        },
        {
            id: 5,
            link: '#',
            img: Portfolio7,
            name: 'Project Name 5'
        },
        {
            id: 6,
            link: '#',
            img: Portfolio3,
            name: 'Project Name 6'
        },
        {
            id: 7,
            link: '#',
            img: Portfolio4,
            name: 'Project Name 7'
        },
        {
            id: 8,
            link: '#',
            img: Portfolio6,
            name: 'Project Name 8'
        },
        {
            id: 9,
            link: '#',
            img: Portfolio8,
            name: 'Project Name 9'
        },

    ]

    return (
        <div id="portfolio" className="bg-white">
            <div className="container mx-auto py-14">
                <Title title={"Portfolio"}/>
                <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                <div className="colums-1 sm:columns-2 lg:columns-3 xl:columns-4">
                    {projects.map((item) => (
                        <div key={item.id} className="relative group my-5 px-10 first:mt-0 sm:px-0">
                            <a href={item.link}>
                                <img src={item.img} alt="" className="grayscalePortfolio rounded-lg"/>
                            </a>
                            <div className="w-full text-center opacity-0 absolute left-0 bottom-0 rounded-b-lg bg-sky-800/50 transition-all duration-300 group-hover:opacity-100">
                                <h5 className="p-3 font-bold uppercase text-white">
                                    {item.name}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}