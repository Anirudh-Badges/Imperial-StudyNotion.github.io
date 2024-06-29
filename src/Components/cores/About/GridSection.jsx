import React from 'react'
import { Heading } from '../Homepage/Heading';
import { CTAButton } from '../Homepage/CTAButton';

const GridArray =[
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description: "Studynotion partners with more than 275+ leading universities and companies to bring",
    }
]
const GridArray2 = [
    {
        order: 3,
        heading: "Certification",
        description: "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        description: "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 5,
        heading: "Ready to Work",
        description: "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
];

const GridSection = () => {
    return (
        <div className='w-11/12 flex flex-col  mx-auto justify-center max-w-maxContent '>
            <div className='flex items-center justify-center mx-auto ml-6'>
            <div className=' flex flex-col gap-3 w-[160%]'>
                <div className='text-4xl font-semibold text-richblack-5 '>
                    World-Class Learning for
                    <Heading text={"Anyone, Anywhere"} />
                </div>
                <p className='font-medium text-richblack-500 w-[80%]'>
                    Studynotion partners with more than 275+ leading universities and companies to bring
                    flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
                </p>
                <div className='w-fit mt-4'>
                    <CTAButton active={true} path={"/signup"} text={"Learn More"} />
                </div>
            </div>

            <div className=' grid grid-cols-3 mr-[-216px]'>
                {
                    GridArray.map((e,i)=>{
                        return (
                            <div key={i}
                            className={`${e.order % 2 === 0 ? "bg-richblack-800 lg:h-[200px] p-5" : "bg-richblack-700 lg:h-[200px] p-5"}`}>
                                <h1 className='text-richblack-5 text-lg mb-3'>
                                    {e.heading}
                                </h1>
                                <p className='text-richblack-300 font-medium'>
                                    {e.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            </div>


            <div className='grid grid-cols-3 w-[65%] mb-10 ml-[390px] -mt-6'>
                {
                    GridArray2.map((card, id) => {
                        return (
                            <div key={id}
                                className={`${card.order % 2 === 0 ? "bg-richblack-800 lg:h-[200px] p-5" : "bg-richblack-700 lg:h-[200px] p-5"}`}>
                                <h1 className='text-richblack-5 text-lg mb-3'>
                                    {card.heading}
                                </h1>
                                <p className='text-richblack-300 font-medium'>
                                    {card.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GridSection