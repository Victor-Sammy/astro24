import React, { useState, useEffect } from 'react'
import PageTitle from '../Shared/PageTitle/PageTitle'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { BsFillShareFill, BsFillSuitHeartFill, BsTrash } from 'react-icons/bs'
import Wishlist from '../Wishlist/Wishlist/Wishlist'

const cartItems = [
  {
    img: 'https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg',
    make: 'White Topaz',
    quantity: 2,
    price: 500.0,
  },
  {
    img: 'https://i.pinimg.com/564x/97/49/a6/9749a687f817c865c57b7b8150161ea4.jpg',
    make: 'White Topaz',
    quantity: 2,
    price: 500.0,
  },
  {
    img: 'https://i.pinimg.com/564x/34/3c/24/343c24365bfab4cf3150dc87823e3e97.jpg',
    make: 'White Topaz',
    quantity: 2,
    price: 500.0,
  },
  {
    img: 'https://i.pinimg.com/564x/6d/ab/39/6dab39c6d5903b17946797c4a5c565e2.jpg',
    make: 'White Topaz',
    quantity: 2,
    price: 500.0,
  },
]

const Cart = () => {
  const [gem, setGem] = useState({})
  const [addToWishlist, setAddToWishlist] = useState(false)
  //const [addToWishlist, setAddToWishlist] = useState(false);

  // fetching fake data here temporarily... Will add real data when the database integrated
  const [selects, setSelects] = useState()

  const [quantity, setQuantity] = useState(1)

  const alterQuantity = (alterBy) => {
    setQuantity(quantity + alterBy)
  }

  useEffect(() => {
    fetch('gems.json')
      .then((res) => res.json())
      .then((data) => setGem(data))
  }, [])

  return (
    <section className='cart-section min-h-screen pt-24 bg-white px-2'>
      <PageTitle title={'cart'} />
      <div className='header mt-5 flex items-center justify-start lg:text-4xl md:text-3xl font-semibold text-secondary'>
        <h1>Astrology Cart</h1>
      </div>
      <div className='astro-cart flex justify-between'>
        <div className='cart-page'>
          <div className='cart__items pt-0'>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='cart-item flex items-center justify-between pb-4 border-b border-gray-100'
              >
                <div className='cart-item-details flex items-center bg-white p-3 rounded-lg mb-40'>
                  <div className='w-40'>
                    <div className='cart-image'>
                      <img
                        className='w-full h-full object-contain'
                        src={item.img}
                        alt=''
                      />
                    </div>
                    <div className='cart-item-title flex-grow flex align-center justify-center'>
                      <h1 className='cart-item-title-text font-bold lg:text-sm md:text-lg text-secondary text-center'>
                        {item.make}
                      </h1>
                    </div>
                  </div>
                  <div className='translate-y-10'>
                    <div className='quantity pb-3'>
                      <div className='quantity-title font-semibold text-gray-600 pb-1'>
                        <h2>Quantity</h2>
                      </div>
                      <div className='cart-item-counter lg:w-40 md:w-[11rem] w-[7.8rem] flex items-center justify-center'>
                        <div
                          data-id=''
                          className='cart-item-decrease cursor-pointer text-secondary lg:text-[2.5rem] md:text-lg bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 mr-2'
                          onClick={() => alterQuantity(-1)}
                          disabled={quantity === 1}
                        >
                          <MdChevronLeft />
                        </div>
                        <h4 className='quantity-num text-secondary lg:text-sm md:text-lg'>
                          {quantity}
                        </h4>
                        <div
                          data-id=''
                          className='cart-item-increase cursor-pointer text-secondary lg:text-[2.5rem] md:text-lg bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 ml-2'
                          onClick={() => alterQuantity(1)}
                        >
                          <MdChevronRight />
                        </div>
                      </div>
                    </div>
                    <div className='sizes'>
                      <h1 className='sizes-text text-[1rem]'>
                        Available sizes
                      </h1>
                      <div className='sizes-dropdown text-lg flex items-center justify-center relative cursor-pointer'>
                        <select
                          className='cursor-pointer text-lg'
                          value={selects}
                          onChange={(e) => setSelects(e.target.value)}
                        >
                          <option className='text-sm'>1</option>
                          <option className='text-sm'>2</option>
                          <option className='text-sm'>2.5</option>
                          <option className='text-sm'>3.5</option>
                        </select>
                      </div>
                    </div>

                    <div className='flex pl-14'>
                      <BsFillShareFill className='text-base-200 text-xl hover:scale-125 duration-300 cursor-pointer' />
                      <BsFillSuitHeartFill
                        onClick={() => setAddToWishlist(!addToWishlist)}
                        className={`${
                          addToWishlist ? 'text-red-500' : 'text-base-200'
                        } text-xl ml-5 hover:scale-125 duration-300 cursor-pointer`}
                      />
                    </div>
                  </div>
                </div>

                <div className='flex'>
                  <div className='cart-item-total-cost lg:w-40 md:w-[11rem] w-[7.8rem] font-normal text-primary lg:text-[1.5rem] md:text-lg flex items-center justify-center'>
                    ₹{item.price}
                  </div>
                  <div
                    data-id=''
                    className='cart-item-delete flex items-center justify-center font-bold w-10 text-gray-600 lg:text-sm md:text-lg cursor-pointer hover:text-red-500 hover:scale-105'
                  >
                    <BsTrash className='text-xl' />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='complete-order flex justify-end mt-10 pb-5'>
            <div className='total-cost mr-7'>
              <h1 className='text-secondary font-semibold'>Total Cost</h1>
              <div className='total-cost-number text-primary font-bold text-3xl'>
                ₹2000.00
              </div>
            </div>
            <div className='complete-order-button w-56 h-14 flex items-center justify-center bg-secondary rounded-lg text-white cursor-pointer hover:bg-gray-600'>
              Complete Order
            </div>
          </div>
        </div>
        <div className='wishlist text-sm'>
          <Wishlist />
        </div>
      </div>
    </section>
  )
}

export default Cart
