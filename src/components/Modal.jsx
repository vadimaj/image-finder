import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/* eslint-disable react/prop-types */
const modalRoot = document.getElementById('modal-root');
const Modal = ({ children, onCloseModal }) => {
  useEffect(
    function () {
      const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
          onCloseModal();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    },
    [onCloseModal]
  );

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div
      onClick={handleBackDropClick}
      className="fixed top-0 left-0 size-full bg-slate-800/60 "
    >
      <div className="min-h-96 min-w-96 absolute bg-slate-100 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
