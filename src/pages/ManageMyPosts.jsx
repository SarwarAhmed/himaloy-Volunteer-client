import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";


const ManageMyPosts = () => {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!user) return;
        axios.get(`${import.meta.env.VITE_API_URL}/my-posts/${user.email}`, {
            withCredentials: true,
        })
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [user]);

    return (
        <div>
            {/* Render your posts here */}
            {posts.length === 0 && <h1 className="text-center text-3xl">No Posts Found</h1>}
            {posts.length > 0 &&

                <div className="container max-w-5xl mx-auto py-10">
                    <div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Post Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            NO. of Volunteers
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Deadline
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map(post => (
                                        <tr key={post._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {post.title}
                                            </th>
                                            <td className="px-6 py-4">
                                                {post.category}
                                            </td>
                                            <td className="px-6 py-4">
                                                {post.numberOfVolunteers}
                                            </td>
                                            <td className="px-6 py-4">
                                                {new Date(post.deadline).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 space-x-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
};

export default ManageMyPosts;
