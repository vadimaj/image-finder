/* eslint-disable react/prop-types */
import Modal from './Modal';
import { useState } from 'react';

const ImageGalleryItem = ({ image }) => {
  const { previewURL, tags, webformatURL } = image;
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <li onClick={handleToggleModal}>
        <img src={previewURL} alt={tags} />
      </li>
      {showModal && (
        <Modal onCloseModal={handleToggleModal}>
          <img src={webformatURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;
