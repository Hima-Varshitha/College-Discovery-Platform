export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow">

      <h1 className="text-2xl font-bold text-blue-600">
        CollegeCompass
      </h1>

      <div className="flex gap-6 text-gray-700">

        <a href="/" className="hover:text-blue-600">
          Home
        </a>

        <a href="/colleges" className="hover:text-blue-600">
          Colleges
        </a>

        <a href="/compare" className="hover:text-blue-600">
          Compare
        </a>

        <a href="/predictor" className="hover:text-blue-600">
          Predictor
        </a>

      </div>

    </nav>
  );
}