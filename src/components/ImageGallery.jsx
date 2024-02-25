/* eslint-disable react/prop-types */

import ImageGalleryItem from './ImageGalleryItem';
const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="grid grid-cols-4 gap-2">
        {images.map((image) => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
