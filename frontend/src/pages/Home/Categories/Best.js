import React from 'react'
import { MdChevronLeft, MdChevronRight, MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Best = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const bproducts = [
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src1: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title1: 'Gem',
      price1: '₹250',
    },
    {
      src2: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title2: 'Gem',
      price2: '₹250',
    },
    {
      src3: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title3: 'Gem',
      price3: '₹250',
    },
    {
      src4: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title4: 'Gem',
      price4: '₹250',
    },
    {
      src5: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title5: 'Gem',
      price5: '₹250',
    },
    {
      src6: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title6: 'Gem',
      price6: '₹250',
    },
    {
      src7: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title7: 'Gem',
      price7: '₹250',
    },
    {
      src8: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title8: 'Gem',
      price8: '₹250',
    },
    {
      src9: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title9: 'Gem',
      price9: '₹250',
    },
  ]
  return (
    <React.Fragment>
      <section className='xl:px-40 mt-20 xl:pb-10 md:pb-5 px-2'>
        <div className='flex items-center justify-between border border-secondary rounded-md'>
          <div className='cat-title lg:pl-2 lg:p-5 md:p-3 lg:text-2xl md:text-lg font-semibold text-secondary mb-1 rounded-md'>
            Best Sellers
          </div>
          <div className='btn lg:mr-2 lg:text-lg md:text-sm sm:text-sm font-semibold text-primary bg-transparent mb-1 rounded-md hover:text-white border-none'>
            <Link to='/bestAll'>View all</Link>
            <MdArrowForward className='text-lg' />
          </div>
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
            {bproducts.map((index) => (
              <div
                key={index}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index1) => (
              <div
                key={index1}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src1}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title1}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price1}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index2) => (
              <div
                key={index2}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src2}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title2}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price2}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index3) => (
              <div
                key={index3}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src3}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title3}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price3}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index4) => (
              <div
                key={index4}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src4}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title4}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price4}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index5) => (
              <div
                key={index5}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src5}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title5}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price5}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index6) => (
              <div
                key={index6}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src6}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title6}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price6}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index7) => (
              <div
                key={index7}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src7}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title7}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price7}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index8) => (
              <div
                key={index8}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src8}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title8}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price8}
                    </p>
                  ))}
                </Link>
              </div>
            ))}

            {bproducts.map((index9) => (
              <div
                key={index9}
                className='lg:mr-5 md:mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md'
              >
                <Link to='/description'>
                  <div className='img-con lg:w-[200px] md:w-[120px] flex justify-center items-center cursor-pointer'>
                    {bproducts.map((bproduct) => (
                      <img
                        className='lg:w-full md:w-full'
                        src={bproduct.src9}
                        alt=''
                      />
                    ))}
                  </div>
                  {bproducts.map((bproduct) => (
                    <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                      {bproduct.title9}
                    </h1>
                  ))}
                  {bproducts.map((bproduct) => (
                    <p className='text-primary lg:text-xl md:text-lg text-center'>
                      {bproduct.price9}
                    </p>
                  ))}
                </Link>
              </div>
            ))}
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
