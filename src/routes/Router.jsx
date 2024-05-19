import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVolunteerPost from "../pages/AddVolunterPost";
import PrivateRoute from "./PrivateRoute";
import ManageMyPosts from "../pages/ManageMyPosts";
import VolunteerPost from "../pages/VolunteerPost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: 'add-volunteer-post',
                element: <PrivateRoute><AddVolunteerPost /></PrivateRoute>
            },
            {
                path: 'manage-my-posts',
                element: <PrivateRoute><ManageMyPosts /></PrivateRoute>
            },
            {
                path: 'volunteer-post/:id',
                element: <PrivateRoute><VolunteerPost /></PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/volunteer-post/${params.id}`),
            }
        ]
    }
])

export default router;
