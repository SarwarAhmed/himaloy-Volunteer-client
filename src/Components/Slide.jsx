import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Slide = ({ post }) => {

    const { _id, thumbnail, title, category, deadline, numberOfVolunteers } = post || {}

    // set category to update
    useEffect(() => {
        document.title = `Category: ${category}`
        document.deadline = `Deadline: ${deadline}`
        document.numberOfVolunteers = `No. Of Volunteer Needed: ${numberOfVolunteers}`
    }, [category, deadline, numberOfVolunteers])

    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${thumbnail})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {/* {title} */}
                        <span className='uppercase font-bold text-indigo-400'>{category}: </span>
                        <Typewriter
                            words={[`${title}`]}
                            cursor={true} cursorStyle='|' loop={Infinity} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
                    </h1>
                    <br />
                    <h2 className='text-lg font-semibold text-white lg:text-xl'>
                        <span className='uppercase font-bold text-indigo-400'>Deadline: </span>
                        {new Date(deadline).toLocaleDateString()}
                        <span className='uppercase font-bold text-indigo-400'> No. Of Volunteer Needed: </span>
                        {numberOfVolunteers}
                    </h2>
                    <br />

                    <Link
                        to={`/volunteer-post/${_id}`}
                        className='px-6 py-3 uppercase mt-4 text-lg font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600'>
                        show details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
