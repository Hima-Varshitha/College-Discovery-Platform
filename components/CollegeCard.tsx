type College = {
  id: number;
  name: string;
  location: string;
  state: string;
  fees: string;
  rating: number;
  type: string;
};


export default function CollegeCard({
  college,
}: {
  college: College;
}) {

  return (
    <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition">

      <h2 className="text-xl font-bold text-gray-900">
        {college.name}
      </h2>


      <p className="mt-2 text-gray-600">
        📍 {college.location}, {college.state}
      </p>


      <p className="mt-2 text-gray-600">
        🏛 {college.type}
      </p>


      <p className="mt-2 text-gray-600">
        💰 {college.fees}
      </p>


      <p className="mt-2 font-semibold text-yellow-600">
        ⭐ {college.rating}/5
      </p>


      <a
        href={`/colleges/${college.id}`}
        className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        View Details
      </a>


    </div>
  );
}