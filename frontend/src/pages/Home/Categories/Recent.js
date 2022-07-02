import React from 'react'
import { MdChevronLeft, MdChevronRight, MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Recent = () => {
  const slideLt = () => {
    var slide = document.getElementById('slide')
    slide.scrollLeft = slide.scrollLeft - 500
  }
  const slideRt = () => {
    var slide = document.getElementById('slide')
    slide.scrollLeft = slide.scrollLeft + 500
  }
  return (
    <React.Fragment>
      <section className='xl:px-40 mt-20 xl:pb-10 md:pb-5 px-2'>
        <div className='flex items-center justify-between border border-secondary rounded-md'>
          <div className='cat-title lg:pl-2 lg:p-5 md:p-3 lg:text-2xl md:text-lg font-semibold text-secondary mb-1 rounded-md'>
            Recently Viewed
          </div>
          <div className='btn lg:mr-2 lg:text-lg md:text-sm sm:text-sm font-semibold text-primary bg-transparent mb-1 rounded-md hover:text-white border-none'>
            <Link to='/productsRecent'>View all</Link>
            <MdArrowForward className='text-lg' />
          </div>
        </div>
        <div className='recent relative lg:h-96 md:h-52 flex items-center justify-center bg-white mb-10 drop-shadow-3xl rounded-md'>
          <MdChevronLeft
            className='cursor-pointer opacity-50 hover:opacity-100'
            onClick={slideLt}
            size={40}
          />
          <div
            id='slide'
            className='w-full h-full flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth cursor-pointer'
          >
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
            <div className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'>
              <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                <img
                  className='lg:w-full md:w-full'
                  src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                  alt='white topaz'
                />
              </div>
              <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                Gem
              </h1>
              <p className='text-primary lg:text-xl md:text-lg text-center'>
                ₹250
              </p>
            </div>
          </div>
          <MdChevronRight
            className='cursor-pointer opacity-50 hover:opacity-100'
            onClick={slideRt}
            size={40}
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Recent
