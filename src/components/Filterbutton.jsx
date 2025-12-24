
export default function Filterbutton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-md text-center w-fit px-4 py-1 rounded-full md:text-lg transition-all duration-300 hover:scale-105 ${
        isActive ? 'bg-gray-700 text-white shadow-lg' : 'bg-gray-600 text-gray-100'
      }`}
    >
      {label}
    </button>
  );
}