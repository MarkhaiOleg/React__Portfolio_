import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'


const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            rewiew: "I like web design more and more each day because it makes my life a lot easier. We have no regrets!",
        },
        {
            img: profilePic2,
            rewiew: "Since I invested in web design I made over 100,000 dollars profits. Web design was worth a fortune to my company."
        },
        {
            img: profilePic3,
            rewiew: "Not able to tell you how happy I am with web design. Wow what great service, I love it! We've used web design for the last five years. I use web design often."
        },
        {
            img: profilePic4,
            rewiew: "The service was excellent. Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free!"
        }

    ]

    return (
        <div className="t-wrepper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>

                <div className="blur t-blur1" style={{
                    background: 'var(--purple)'
                }}>
                </div>

                <div className="blur t-blur2" style={{
                    background: 'skyblue'
                }}>
                </div>
            </div>

            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.rewiew}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials
