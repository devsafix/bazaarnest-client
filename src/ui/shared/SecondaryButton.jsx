/* eslint-disable react/prop-types */


const SecondaryButton = ({ title }) => {
    return (
        <button
            type="submit"
            className="bg-pink hover:bg-purple transition-all duration-300 text-white px-6 py-2 rounded-md">
            {title}
        </button>
    );
};

export default SecondaryButton;