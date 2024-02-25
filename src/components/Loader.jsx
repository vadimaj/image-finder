import { LiaSpinnerSolid } from 'react-icons/lia';
const Loader = () => {
  return (
    <div>
      <LiaSpinnerSolid className="size-6 mx-auto text-blue-500 animate-spin" />
      <h4 className="text-base mx-auto p-3 text-center text-blue-400">
        Loading...
      </h4>
    </div>
  );
};

export default Loader;
