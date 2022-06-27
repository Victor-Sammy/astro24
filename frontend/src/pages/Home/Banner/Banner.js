import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

const Banner = () => {
  return (
    <React.Fragment>
      <div className='lg:pb-20'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='w-full h-[28rem]'
        >
          <SwiperSlide className='w-full h-full flex'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/bc/f6/b8/bcf6b8a6469bc245980223da4784e81c.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/f6/ed/27/f6ed27ec134783d85acb4d7efc438820.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/06/43/b1/0643b195b59dcdfc2c4ecadf2e781488.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/21/0d/53/210d53608ce10535c7811c70275f9129.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/92/82/51/928251a20ab3a5c1374a2e3a54dc9361.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/c8/38/3b/c8383b0b1cec7db3c35fc6c57f2bfbb3.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/2d/ec/ad/2decad789e315d44e37029061580e565.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/38/89/f7/3889f7aa48e0521c256ad9fb0e4160ac.jpg'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img
              className='w-full h-full object-cover'
              src='https://i.pinimg.com/236x/30/3e/ae/303eae2e44005ad604cbed84c0aee4c2.jpg'
              alt=''
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </React.Fragment>
  )
}

export default Banner
