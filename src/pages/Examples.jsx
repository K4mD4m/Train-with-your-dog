const exercises = [
  {
    id: 1,
    title: "Sit",
    description: "Dog sits on command",
    image: "/public/exercise1.jpg",
  },
  {
    id: 2,
    title: "Down",
    description: "Dog lies down on command.",
    image: "/public/exercise2.jpg",
  },
  {
    id: 3,
    title: "Heel",
    description: "Walking beside the owner on a leash without pulling.",
    image: "/public/exercise3.jpg",
  },
  {
    id: 4,
    title: "Come",
    description: "Dog comes when called.",
    image: "/public/exercise4.jpg",
  },
  {
    id: 5,
    title: "Fetch",
    description: "Throwing an object for the dog to retrieve.",
    image: "/public/exercise5.jpg",
  },
  {
    id: 6,
    title: "Jump",
    description: "Dog jumps over an obstacle on command.",
    image: "/public/exercise6.jpg",
  },
  {
    id: 7,
    title: "Turn",
    description: "Dog turns around in a circle on command.",
    image: "/public/exercise7.jpg",
  },
  {
    id: 8,
    title: "Stay",
    description: "Dog stays in one spot on command.",
    image: "/public/exercise8.jpg",
  },
  {
    id: 9,
    title: "Wait",
    description: "Dog waits in one place until called.",
    image: "/public/exercise9.jpg",
  },
];

const Examples = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Dog Training Inspiration
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={exercise.image}
              alt={exercise.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{exercise.title}</h2>
              <p className="text-gray-600">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;
