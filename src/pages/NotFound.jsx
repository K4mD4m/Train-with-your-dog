import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center pt-20">
      <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Oops! The page youre looking for doesnt exist.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
