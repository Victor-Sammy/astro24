import React from 'react';

const Offers = () => {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='pt-28 pb-6 w-[90%] lg:w-[80%] mx-auto flex flex-col gap-6'>
            <p className='text-left text-3xl text-primary'>TODAY'S OFFERS</p>
            {
                images.map(Image => <img src="https://kinclimg3.bluestone.com/f_webp,c_scale,w_1190,b_rgb:ffffff/product/dynamic_banner/desktop/home/1655146640743-Home_Page_banner_1190_386pxl_14th_June_final.jpg" alt="" />)
            }
        </div>
    );
};

export default Offers;