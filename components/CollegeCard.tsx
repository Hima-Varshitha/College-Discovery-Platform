type College = {
  id: number;
  name: string;
  location: string;
  state: string;
  fees: string;
  rating: number;
  type: string;
  placement: {
    averagePackage: string;
  };
};


export default function CollegeCard({
  college,
}: {
  college: College;
}) {

  return (

  <div
  className="
    flex h-full flex-col
    rounded-3xl
    border border-gray-200
    bg-white
    p-6
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-blue-200
    hover:shadow-xl
  "
>


    {/* College Information */}
    <div>

      <div className="flex min-h-[72px] items-start justify-between gap-4">

        <h2 className="max-w-[70%] text-xl font-bold leading-tight text-gray-900">
          {college.name}
        </h2>


        <span className="whitespace-nowrap rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700">

          ⭐ {college.rating}

        </span>

      </div>



      <p className="mt-4 flex items-center gap-2 text-gray-600">
        📍 {college.location}, {college.state}
      </p>


      <p className="mt-4 flex items-center gap-2 text-gray-600">
        🏛 {college.type}
      </p>


      <p className="mt-4 flex items-center gap-2 text-gray-600">
        💰 {college.fees}
      </p>


      <p className="mt-4 flex items-center gap-2 text-gray-600">
        💼 Avg Package:{" "}
        <span className="font-bold text-blue-700">
          {college.placement.averagePackage}
        </span>
      </p>


    </div>



    {/* Button Section */}
    <div className="mt-auto pt-8">

      <a

        href={`/colleges/${college.id}`}

        className="
          block
          rounded-xl
          bg-blue-600
          px-5
          py-3
          text-center
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-blue-700
          hover:shadow-lg
          "

      >

        View Details

      </a>

    </div>


  </div>

);
}