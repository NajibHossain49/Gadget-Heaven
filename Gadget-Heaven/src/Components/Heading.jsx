/* eslint-disable react/prop-types */
const Heading = ({ title }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-xl text-purple-600 md:text-2xl lg:text-4xl font-semibold my-6">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
