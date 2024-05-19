import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";

const BeAVolunteer = () => {
    const { user } = useContext(AuthContext);
    const post = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Be a Volunteer";
    });
    console.log(post);

    const { title, description, thumbnail, category, location, numberOfVolunteers, deadline, user: organizeUser } = post || {};

    const hanldeFormSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        console.log(organizeUser.email);
        console.log(user.email);
        if (organizeUser.email === user.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You cannot request for your own post',
            });
            return;
        }
       
        // if the No. of volunteers needed is 0 then it will show a message
        if (parseInt(numberOfVolunteers) === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No volunteer needed',
            });
            return;
        }

        const requestData = {
            postId: post._id,
            volunteerName: user.displayNmae,
            volunteerEmail: user.email,
            suggestion: e.target.suggestion.value,
            status: 'Requested',
        };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/volunteer-request`, requestData, {
                withCredentials: true,
            });
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Request Sent Successfully',
            });
            navigate(`/volunteer-post/${post._id}`);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }


    return (
        <div>
            <div className="container mx-auto mt-10 px-4 flex flex-col sm:flex-row space-y-5 sm:space-y-0 mb-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={thumbnail} alt="blog" />
                        <div className="p-4">
                            <h2 className="mb-2 text-xl font-semibold dark:text-white">{title}</h2>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400"><span className="font-bold">Category:</span> {category}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Deadline: </span>
                                {new Date(deadline).toLocaleDateString()}
                            </p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">{description}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Location: </span>
                                {location}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">No. Of Volunteer Needed: </span>
                                {numberOfVolunteers}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Organizer Name:</span>
                                {organizeUser.name}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Organizer Email: </span>
                                {organizeUser.email}</p>
                        </div>
                    </div>
                </div>
                {/* Volunteer name and volunteer email(Logged -in user email & name) */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <form onSubmit={hanldeFormSubmit} className="p-4">
                            <h2 className="mb-2 text-xl font-semibold dark:text-white">Be a Volunteer</h2>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Volunteer Name:</span>
                                {user?.displayNmae}</p>
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Volunteer Email: </span>
                                {user?.email}</p>
                            <input type="text" name="suggestion" placeholder="Suggestion" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                            <p className="text-sm leading-relaxed mb-4 dark:text-gray-400">
                                <span className="font-bold">Status: </span>
                                Requested</p>
                            <input type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-full focus:outline-none" value="Request" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeAVolunteer;
