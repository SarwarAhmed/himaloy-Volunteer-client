import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProviders'
import { ThreeCircles } from 'react-loader-spinner'

export default function Carousel() {
    const { loading } = useContext(AuthContext)

    // upcomming three posts
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/upcommint-three-posts`)
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPosts()
    }, [])

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
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                {
                    posts.map(post => (
                        <SwiperSlide key={post._id}>
                            <Slide post={post} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
