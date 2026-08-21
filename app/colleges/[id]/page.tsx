import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";


export default async function CollegeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const college = colleges.find(
    (college) => college.id === Number(id)
  );


  if (!college) {
    return (
      <h1 className="p-10 text-3xl font-bold">
        College Not Found
      </h1>
    );
  }



  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      <section className="px-8 py-12">


        <h1 className="text-4xl font-bold text-gray-900">
          {college.name}
        </h1>


        <p className="mt-3 text-gray-600">
          📍 {college.location}, {college.state}
        </p>


        <p className="mt-3 text-yellow-600 font-semibold">
          ⭐ {college.rating}/5
        </p>



        {/* Overview */}

        <div className="mt-10 rounded-xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold">
            Overview
          </h2>

          <p className="mt-3 text-gray-700">
            {college.description}
          </p>

        </div>



        {/* Courses */}

        <div className="mt-8 rounded-xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold">
            Courses
          </h2>


          <ul className="mt-3 list-disc pl-6">

            {
              college.courses.map((course)=>(
                <li key={course}>
                  {course}
                </li>
              ))
            }

          </ul>

        </div>



        {/* Placements */}

        <div className="mt-8 rounded-xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold">
            Placements
          </h2>


          <p className="mt-3">
            Average Package:
            <b> {college.placement.averagePackage}</b>
          </p>


          <p>
            Highest Package:
            <b> {college.placement.highestPackage}</b>
          </p>

        </div>



        {/* Reviews */}

        <div className="mt-8 rounded-xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold">
            Reviews
          </h2>


          <ul className="mt-3 list-disc pl-6">

            {
              college.reviews.map((review)=>(
                <li key={review}>
                  {review}
                </li>
              ))
            }

          </ul>

        </div>


      </section>


    </main>

  );
}