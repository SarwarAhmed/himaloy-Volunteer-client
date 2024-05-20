import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteerNeedsNow = () => {
    const [posts, setPosts] = useState([])
    const [changeLayout, setChangeLayout] = useState(false)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/upcommint-six-posts`)
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPosts()
    }, [])

    console.log(posts);
    return (
        <div>
            <div className='container px-6 py-10 mx-auto'>
                {/* search bar and change layout */}
                <div className='flex justify-between items-center mb-6'>
                    {/* search input field */}
                    <div className="flex items-center gap-2">
                        <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </div>
                    {/* change layout */}

                    <div className='flex space-x-2'>
                        <button
                            onClick={() => setChangeLayout(false)}
                            className='p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:bg-indigo-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                        </button>
                        <button
                            onClick={() => setChangeLayout(true)}
                            className='p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:bg-indigo-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </button>
                    </div>
                </div>
                {/* change layout */}
                {
                    changeLayout ? (
                        <div className="space-y-3 max-w-5xl mx-auto">
                            {
                                posts.map(post => (
                                    <div key={post._id} className='bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex'>
                                        <img className='h-36 object-cover object-center' src={post.thumbnail} alt='blog' />
                                        <div className='p-4'>
                                            <h2 className='mb-2 text-xl font-semibold dark:text-white'>{post.title}</h2>
                                            <p className='text-sm leading-relaxed mb-4 dark:text-gray-400'>{post.category}</p>
                                            <p className='text-sm leading-relaxed mb-4 dark:text-gray-400'>
                                                {/* date time format */}
                                                {new Date(post.deadline).toLocaleDateString()}
                                            </p>
                                            <Link to={`/volunteer-post/${post._id}`} className='px-4 py-2 bg-indigo-500 text-white rounded-full focus:outline-none'>View Details</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3`}>
                            {
                                posts.map(post => (
                                    <div key={post._id} className='bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden'>
                                        <img className='w-full h-56 object-cover object-center' src={post.thumbnail} alt='blog' />
                                        <div className='p-4'>
                                            <h2 className='mb-2 text-xl font-semibold dark:text-white'>{post.title}</h2>
                                            <p className='text-sm leading-relaxed mb-4 dark:text-gray-400'>{post.category}</p>
                                            <p className='text-sm leading-relaxed mb-4 dark:text-gray-400'>
                                                {/* date time format */}
                                                {new Date(post.deadline).toLocaleDateString()}
                                            </p>
                                            <Link to={`/volunteer-post/${post._id}`} className='px-4 py-2 bg-indigo-500 text-white rounded-full focus:outline-none'>View Details</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                <div className='flex justify-center mt-6'>
                    <Link to="/need-volunteer" className='px-6 py-2 bg-indigo-500 text-white rounded-full focus:outline-none'>See All</Link>
                </div>
            </div>
        </div>
    );
};

export default VolunteerNeedsNow;
