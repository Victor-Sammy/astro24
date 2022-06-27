import React from 'react'

const BestAll = () => {
  const items = [
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
    {
      src10:
        'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title10: 'Gem',
      price10: '₹250',
    },
    {
      src11:
        'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title11: 'Gem',
      price11: '₹250',
    },
    {
      src12:
        'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title12: 'Gem',
      price12: '₹250',
    },
    {
      src13:
        'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title13: 'Gem',
      price13: '₹250',
    },
    {
      src14:
        'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
      title14: 'Gem',
      price14: '₹250',
    },
  ]
  return (
    <section className='min-h-screen pt-[88px] md:px-3 lg:px-0'>
      <div className='flex justify-center'>
        <div className='title text-center'>All Products</div>
        <div className='parenthesis'>({items.length})</div>
      </div>

      <div className='card-title text-primary font-medium flex items-center justify-start'>
        Recently Viewed
      </div>
      <div className='card bg-white lg:mx-auto w-[1210px] rounded-md border border-opacity-30 border-primary drop-shadow-xl'>
        <div className='row flex flex-wrap bg-white mt-10 mb-10 rounded-md'>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src1} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title1}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price1}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src2} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title2}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price2}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src3} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title3}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price3}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src4} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title4}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price4}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src5} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title5}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price5}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src6} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title6}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price6}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src7} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title7}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price7}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src8} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title8}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price8}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src9} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title9}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price9}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src10} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title10}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price10}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src11} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title11}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price11}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src12} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title12}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price12}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src13} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title13}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price13}
                </p>
              ))}
            </div>
          </div>
          <div className='item hover:scale-105 ml-5 mr-10 ease-in-out duration-300 border rounded-md shadow-md cursor-pointer'>
            <div className='img-con flex justify-center items-center'>
              {items.map((item) => (
                <img src={item.src14} alt='' />
              ))}
            </div>
            <div>
              {items.map((item) => (
                <p className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                  {item.title14}
                </p>
              ))}
              {items.map((item) => (
                <p className='text-primary lg:text-xl md:text-lg text-center'>
                  {item.price14}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestAll
