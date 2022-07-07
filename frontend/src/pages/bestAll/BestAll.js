import React from 'react'
import PageTitle from '../Shared/PageTitle/PageTitle'

const BestAll = () => {
  const items = [
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
    {
      src: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title: 'Gem',
      price: '₹250',
    },
  ]
  return (
    <section className='min-h-screen pt-[88px] md:px-3 lg:px-0'>
      <PageTitle title={'all best sellers'} />
      <div className='flex justify-center'>
        <div className='title text-center'>All Products</div>
        <div className='parenthesis'>({items.length})</div>
      </div>

      <div className='card-title text-primary font-medium flex items-center justify-start'>
        Best Sellers
      </div>
      <div className='card bg-white lg:mx-auto w-[1210px] rounded-md border border-opacity-30 border-primary drop-shadow-xl'>
        <div className='row flex flex-wrap bg-white mt-10 mb-10 rounded-md'>
          {items.map((item, index) => (
            <div
              key={index}
              className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'
            >
              <div className='img-con flex justify-center items-center'>
                <img src={item.src} alt='' />
              </div>
              <div>
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title}
                </p>

                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestAll
