import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Slide = ({ post }) => {

    const { _id, thumbnail, title, category, deadline, numberOfVolunteers } = post || {}

    return (
        <div
            className='w-full bg-center bg-cover h-[38rem] rounded-lg'
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
                        to={`/volunteer-post/${_id}`}>
                        <button className="group w-36 relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full dark:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                </span>
                            </span>
                            <div className="relative text-white z-10 rounded-full bg-zinc-950 py-1.5 pl-4 pr-3 ring-1 ring-white/10 text-xl font-thin uppercase">Connect</div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-sky-400/0 via-sky-400/90 to-sky-400/0 transition-opacity duration-500 group-hover:opacity-40">
                            </span>
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
