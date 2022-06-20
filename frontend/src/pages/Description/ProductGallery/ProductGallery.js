import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = ({ images }) => {

    // rendering product gallery component here
    return (
        <div>
            {
                images &&
                <ImageGallery
                    thumbnailPosition='left'
                    infinite={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={images}
                />
            }
        </div>
    );
};

export default ProductGallery;