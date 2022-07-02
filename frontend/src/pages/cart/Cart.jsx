import React from 'react'
import PageTitle from '../Shared/PageTitle/PageTitle'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { FaTimes } from 'react-icons/fa'

const Cart = () => {
  return (
    <section className='cart-section min-h-screen pt-24 xl:mx-96 bg-white px-2'>
      <PageTitle title={'cart'} />
      <div className='header mt-5 flex items-center justify-start lg:text-4xl md:text-3xl font-semibold text-secondary'>
        <h1>Shopping Cart</h1>
      </div>
      <div class='table-titles text-gray-400 font-semibold flex mt-10 mb-5'>
        <h2 class='products flex-grow text-start lg:text-xl md:text-[.8rem] text-[.6rem]'>
          Products
        </h2>
        <h2 class='count lg:w-40 md:w-[11rem] w-[7.8rem] lg:text-xl md:text-[.8rem] text-[.6rem]'>
          Count
        </h2>
        <h2 class='cost lg:w-40 md:w-[11rem] w-[7.8rem] lg:text-xl md:text-[.8rem] text-[.6rem]'>
          Total Cost
        </h2>
        <span class='lg:w-10 md:w-[20px]'></span>
      </div>
      <div className='cart__items'>
        <div class='cart-item flex items-center pb-4 border-b border-gray-100'>
          <div class='cart-item-image w-48 h-48 bg-white p-3 rounded-lg'>
            <img
              class='w-full h-full object-contain'
              src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
              alt=''
            />
          </div>
          <div class='cart-item-details flex-grow'>
            <h1 class='cart-item-title font-bold lg:text-sm md:text-lg text-secondary text-start'>
              White Topaz
            </h1>
          </div>
          <div class='cart-item-counter w-40 flex items-center justify-center'>
            <div
              data-id=''
              class='cart-item-decrease cursor-pointer text-secondary lg:text-sm md:text-lg bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 mr-2'
            >
              <MdChevronLeft />
            </div>
            <h4 class='quantity text-secondary lg:text-sm md:text-lg'>2</h4>
            <div
              data-id=''
              class='cart-item-increase cursor-pointer text-secondary lg:text-sm md:text-lg bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 ml-2'
            >
              <MdChevronRight />
            </div>
          </div>
          <div class='cart-item-total-cost w-40 font-bold text-secondary lg:text-sm md:text-lg'>
            ₹500.00
          </div>
          <div
            data-id=''
            class='cart-item-delete font-bold w-10 text-gray-300 lg:text-sm md:text-lg cursor-pointer hover:text-gray-400'
          >
            <FaTimes />
          </div>
        </div>
        <div class='cart-item flex items-center pb-4 border-b border-gray-100'>
          <div class='cart-item-image w-48 h-48 bg-white p-3 rounded-lg'>
            <img
              class='w-full h-full object-contain'
              src='https://i.pinimg.com/564x/97/49/a6/9749a687f817c865c57b7b8150161ea4.jpg'
              alt=''
            />
          </div>
          <div class='cart-item-details flex-grow'>
            <h1 class='cart-item-title font-bold text-sm text-secondary text-start'>
              White Topaz
            </h1>
          </div>
          <div class='cart-item-counter w-40 flex items-center justify-center'>
            <div
              data-id=''
              class='cart-item-decrease cursor-pointer text-secondary bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 mr-2'
            >
              <MdChevronLeft />
            </div>
            <h4 class='quantity text-secondary'>2</h4>
            <div
              data-id=''
              class='cart-item-increase cursor-pointer text-secondary bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 ml-2'
            >
              <MdChevronRight />
            </div>
          </div>
          <div class='cart-item-total-cost w-40 font-bold text-secondary'>
            ₹500.00
          </div>
          <div
            data-id=''
            class='cart-item-delete font-bold w-10 text-gray-300 cursor-pointer hover:text-gray-400'
          >
            <FaTimes />
          </div>
        </div>
        <div class='cart-item flex items-center pb-4 border-b border-gray-100'>
          <div class='cart-item-image w-48 h-48 bg-white p-3 rounded-lg'>
            <img
              class='w-full h-full object-contain'
              src='https://i.pinimg.com/564x/34/3c/24/343c24365bfab4cf3150dc87823e3e97.jpg'
              alt=''
            />
          </div>
          <div class='cart-item-details flex-grow'>
            <h1 class='cart-item-title font-bold text-sm text-secondary text-start'>
              White Topaz
            </h1>
          </div>
          <div class='cart-item-counter w-40 flex items-center justify-center'>
            <div
              data-id=''
              class='cart-item-decrease cursor-pointer text-secondary bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 mr-2'
            >
              <MdChevronLeft />
            </div>
            <h4 class='quantity text-secondary'>2</h4>
            <div
              data-id=''
              class='cart-item-increase cursor-pointer text-secondary bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 ml-2'
            >
              <MdChevronRight />
            </div>
          </div>
          <div class='cart-item-total-cost w-40 font-bold text-secondary'>
            ₹500.00
          </div>
          <div
            data-id=''
            class='cart-item-delete font-bold w-10 text-gray-300 cursor-pointer hover:text-gray-400'
          >
            <FaTimes />
          </div>
        </div>
        <div class='cart-item flex items-center pb-4 border-b border-gray-100'>
          <div class='cart-item-image w-48 h-48 bg-white p-3 rounded-lg'>
            <img
              class='w-full h-full object-contain'
              src='https://i.pinimg.com/564x/6d/ab/39/6dab39c6d5903b17946797c4a5c565e2.jpg'
              alt=''
            />
          </div>
          <div class='cart-item-details flex-grow'>
            <h1 class='cart-item-title font-bold text-sm text-secondary text-start'>
              White Topaz
            </h1>
          </div>
          <div class='cart-item-counter w-40 flex items-center justify-center'>
            <div
              data-id=''
              class='cart-item-decrease cursor-pointer text-secondary bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 mr-2'
            >
              <MdChevronLeft />
            </div>
            <h4 class='quantity text-secondary'>2</h4>
            <div
              data-id=''
              class='cart-item-increase cursor-pointer text-secondary bg-gray-100 rounded h-6 w-6 flex items-center justify-center hover:bg-gray-200 ml-2'
            >
              <MdChevronRight />
            </div>
          </div>
          <div class='cart-item-total-cost w-40 font-bold text-secondary'>
            ₹500.00
          </div>
          <div
            data-id=''
            class='cart-item-delete font-bold w-10 text-gray-300 cursor-pointer hover:text-gray-400'
          >
            <FaTimes />
          </div>
        </div>
      </div>
      <div class='complete-order flex justify-end mt-10 pb-5'>
        <div class='total-cost mr-7'>
          <h1 class='text-secondary font-semibold'>Total Cost</h1>
          <div class='total-cost-number text-primary font-bold text-3xl'>
            ₹2000.00
          </div>
        </div>
        <div class='complete-order-button w-56 h-14 flex items-center justify-center bg-secondary rounded text-white cursor-pointer hover:bg-gray-600'>
          Complete Order
        </div>
      </div>
    </section>
  )
}

export default Cart
