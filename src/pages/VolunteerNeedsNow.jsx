import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteerNeedsNow = () => {
    // upcomming three posts
    const [posts, setPosts] = useState([])
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
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
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
                <div className='flex justify-center mt-6'>
                    <Link to="/need-volunteer" className='px-6 py-2 bg-indigo-500 text-white rounded-full focus:outline-none'>See All</Link>
                </div>
            </div>
        </div>
    );
};

export default VolunteerNeedsNow;
