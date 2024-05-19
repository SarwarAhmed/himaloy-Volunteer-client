import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const VolunteerPost = () => {
    const post = useLoaderData();

    useEffect(() => {
        document.title = post.title;
    });
    console.log(post);

    return (
        <div>
            <div className="container mx-auto mt-10 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={post.thumbnail} alt="blog" />
                        <div className="p-4">
                            <h2 className="mb-2 text-xl font-semibold dark:text-white">{post.title}</h2>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400"><span className="font-bold">Category:</span> {post.category}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Deadline: </span>
                                {new Date(post.deadline).toLocaleDateString()}
                            </p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">{post.description}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Location: </span>
                                {post.location}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Organizer Name:</span>
                                {post.user.name}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Organizer Email: </span>
                                {post.user.email}</p>

                            <button className="px-4 py-2 bg-indigo-500 text-white rounded-full focus:outline-none">Be a Volunteer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPost;
