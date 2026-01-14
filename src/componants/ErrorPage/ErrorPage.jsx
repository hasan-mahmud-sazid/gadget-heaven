import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-9xl font-extrabold text-primary opacity-20">404</h1>

      <div className="absolute flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-2">Oops! Page Not Found</h2>
        <p className="text-lg text-base-content/70 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {error && (
          <p className="mb-6 italic text-error bg-error/10 px-4 py-2 rounded-lg">
            {error.statusText || error.message}
          </p>
        )}

        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-primary"
          >
            Go Back
          </button>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
      <div className="mt-64 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
