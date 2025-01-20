import exercise1 from "../assets/images/exercise1.jpg";
import exercise2 from "../assets/images/exercise2.jpg";
import exercise3 from "../assets/images/exercise3.jpg";
import exercise4 from "../assets/images/exercise4.jpg";
import exercise5 from "../assets/images/exercise5.jpg";
import exercise6 from "../assets/images/exercise6.jpg";
import exercise7 from "../assets/images/exercise7.jpg";
import exercise8 from "../assets/images/exercise8.jpg";
import exercise9 from "../assets/images/exercise9.jpg";

const exercises = [
  {
    id: 1,
    title: "Sit",
    description: "Dog sits on command",
    image: exercise1,
  },
  {
    id: 2,
    title: "Down",
    description: "Dog lies down on command.",
    image: exercise2,
  },
  {
    id: 3,
    title: "Heel",
    description: "Walking beside the owner on a leash without pulling.",
    image: exercise3,
  },
  {
    id: 4,
    title: "Come",
    description: "Dog comes when called.",
    image: exercise4,
  },
  {
    id: 5,
    title: "Fetch",
    description: "Throwing an object for the dog to retrieve.",
    image: exercise5,
  },
  {
    id: 6,
    title: "Jump",
    description: "Dog jumps over an obstacle on command.",
    image: exercise6,
  },
  {
    id: 7,
    title: "Turn",
    description: "Dog turns around in a circle on command.",
    image: exercise7,
  },
  {
    id: 8,
    title: "Stay",
    description: "Dog stays in one spot on command.",
    image: exercise8,
  },
  {
    id: 9,
    title: "Wait",
    description: "Dog waits in one place until called.",
    image: exercise9,
  },
];

const Examples = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Dog Training Inspiration
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out group overflow-hidden"
          >
            <img
              src={exercise.image}
              alt={exercise.title}
              className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-2 text-blue-800">
                {exercise.title}
              </h2>
              <p className="text-gray-600">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;
