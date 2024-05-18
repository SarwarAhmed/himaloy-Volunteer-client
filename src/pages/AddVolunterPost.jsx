import { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddVolunteerPost = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const description = form.description.value;
        const category = form.category.options[form.category.selectedIndex].value;
        const deadline = startDate;
        const numberOfVolunteers = form['number-of-volunteers'].value;
        const location = form.location.value;
        const PostData = {
            title,
            thumbnail,
            description,
            deadline,
            category,
            numberOfVolunteers,
            location,
            user: {
                email: user?.email,
                name: user?.displayName,
            }
        };

        console.table(PostData);

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/volunteerPost`, PostData, {
                withCredentials: true,
            });
            console.log(data);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Volunter Post Added Successfully',
            });

            form.reset();

            //  TODO : Redirect to my-volunteer-posts
            navigate('/manage-my-posts')
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error?.message,
            });
        }

    }

    return (
        <div className='container max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-lg px-6 py-8 my-10 ring-1 ring-slate-900/5 shadow-xl'>
            <div className="border-b border-gray-900/10 pb-12 dark:text-white">
                <h2 className="text-base font-semibold leading-7 text-gray-500 text-center">Add Volunteer Post</h2>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-9">
                            <div className="sm:col-span-3">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Post Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="thumbnail" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Thumbnail
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="thumbnail"
                                        id="thumbnail"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></textarea>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Write a few sentences about your Volunteer post</p>
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    category
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="category"
                                        name="category"
                                        defaultValue="category"
                                        autoComplete="category-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option disabled>Select One</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="education">Education</option>
                                        <option value="social-service">Social Service</option>
                                        <option value="animal-welfare">Animal Welfare</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="deadline" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Deadline
                                </label>
                                <div className="mt-2 xbg-red-400 w-full">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="number-of-volunteers" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    No. of Volunteers
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="number-of-volunteers"
                                        id="number-of-volunteers"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Location
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        autoComplete="location"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <p className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Organizer Name: {user?.displayName}
                                </p>
                            </div>
                            <div className="sm:col-span-3">
                                <p className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Organizer Name: {user?.email}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <Link to={'/'} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteerPost;
