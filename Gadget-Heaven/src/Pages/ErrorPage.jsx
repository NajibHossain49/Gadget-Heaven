import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className="mt-6 px-4 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-full"
        onClick={handleGoHome}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
