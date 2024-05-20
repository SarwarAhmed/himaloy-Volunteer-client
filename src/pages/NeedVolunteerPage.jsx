import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { ThreeCircles } from "react-loader-spinner";

const NeedVolunteerPage = () => {
    const { loading } = useContext(AuthContext)
    const posts = useLoaderData();
    //  title, description, thumbnail, category, location, numberOfVolunteers, deadline, user
    if (loading) {
        return (
            <div className="flex items-center justify-center ">
                <ThreeCircles

                    visible={true}
                    height="200"
                    width="200"
                    color="#4fa94d"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        );
    }

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
            </div>
        </div>
    );
};

export default NeedVolunteerPage;
