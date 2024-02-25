/* eslint-disable react/prop-types */
const Button = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
