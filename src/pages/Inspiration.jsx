const Inspiration = () => {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Dog Training Inspiration
        </h1>
        <div className="space-y-6">
          <p className="text-lg text-center text-gray-600">
            Here are some great resources to help you with dog training:
          </p>
          <ul className="list-none space-y-4 text-lg text-gray-700 text-center">
            <li>
              <a
                href="https://spiritdogtraining.com/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Spirit dog training
              </a>
            </li>
            <li>
              <a
                href="https://theonlinedogtrainer.com/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                The online dog trainer
              </a>
            </li>
            <li>
              <a
                href="https://www.training-dogs.com/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Training dogs
              </a>
            </li>
            <li>
              <a
                href="https://www.diyk9.com/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                DIYK9
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
