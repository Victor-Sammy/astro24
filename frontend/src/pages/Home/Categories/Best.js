import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function Best() {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <React.Fragment>
      <section className='lg:px-40 mt-20 lg:pb-10 md:pb-5'>
        <div className='cat-title lg:pl-2 lg:p-5 md:p-3 lg:text-2xl md:text-lg font-semibold text-white bg-secondary mb-1 rounded-md'>
          Best Sellers
        </div>
        <div className='best-sellers relative lg:h-96 md:h-52 flex items-center justify-center bg-white mb-10 drop-shadow-3xl rounded-md'>
          <MdChevronLeft
            className='cursor-pointer opacity-50 hover:opacity-100'
            onClick={slideLeft}
            size={40}
          />
          <div
            id='slider'
            className='w-full h-full flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth cursor-pointer'
          >
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            <div className='lg:mr-5 md:mr-3 hover:scale-75 ease-in-out duration-300 border rounded-md shadow-md'>
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
            onClick={slideRight}
            size={40}
          />
        </div>
      </section>
    </React.Fragment>
  )
}
export default Best
