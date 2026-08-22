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
      <main className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            College Not Found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* College Header */}

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

            <div className="max-w-4xl">

              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                {college.name}
              </h1>


              <p className="mt-4 text-lg leading-7 text-gray-600">
                {college.shortDescription}
              </p>


              <div className="mt-6 flex flex-wrap gap-3">


                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  📍 {college.location}, {college.state}
                </span>


                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  🏛 {college.type}
                </span>


                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  🎓 Established {college.establishedYear}
                </span>


              </div>


            </div>



            <div className="flex-shrink-0">

              <div className="rounded-full bg-yellow-50 px-5 py-3 text-lg font-bold text-yellow-700">

                ⭐ {college.rating}/5

              </div>

            </div>


          </div>


        </div>


        {/* Overview */}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-gray-900">
            Overview
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {college.description}
          </p>

        </div>


        {/* Key Information */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Key Information
          </h2>


          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="text-3xl">
                💰
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Fees
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {college.fees}
              </p>

            </div>



            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="text-3xl">
                💼
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Average Package
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {college.placement.averagePackage}
              </p>

            </div>



            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="text-3xl">
                🚀
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Highest Package
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {college.placement.highestPackage}
              </p>

            </div>



            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="text-3xl">
                📝
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Entrance Exam
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {college.entranceExam}
              </p>

            </div>


          </div>


        </div>


        {/* Courses */}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-gray-900">
              Popular Courses
            </h2>

            <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Top Programs
            </span>

          </div>



          <div className="mt-6 grid gap-4 md:grid-cols-3">


            {college.courses.map((course, index) => (

              <div
                key={course}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                    {index + 1}
                  </div>


                  <p className="font-semibold text-gray-900">
                    {course}
                  </p>

                </div>

              </div>

            ))}


          </div>

        </div>


        {/* Admission */}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-gray-900">
            Admission Information
          </h2>


          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-sm text-gray-500">
                🎯 Entrance Exam
              </p>

              <p className="mt-2 font-bold text-gray-900">
                {college.cutoff.exam}
              </p>
            </div>



            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-sm text-gray-500">
                💻 Branch
              </p>

              <p className="mt-2 font-bold text-gray-900">
                {college.cutoff.branch}
              </p>
            </div>



            {"openingRank" in college.cutoff && (
              <div className="rounded-xl bg-blue-50 p-5">

                <p className="text-sm text-gray-500">
                  📈 Opening Rank
                </p>

                <p className="mt-2 font-bold text-gray-900">
                  {college.cutoff.openingRank}
                </p>

              </div>
            )}



            {"closingRank" in college.cutoff && (
              <div className="rounded-xl bg-blue-50 p-5">

                <p className="text-sm text-gray-500">
                  📉 Closing Rank
                </p>

                <p className="mt-2 font-bold text-gray-900">
                  {college.cutoff.closingRank}
                </p>

              </div>
            )}



            {"cutoffScore" in college.cutoff && (
              <>

                <div className="rounded-xl bg-blue-50 p-5">

                  <p className="text-sm text-gray-500">
                    🎯 Cutoff Score
                  </p>

                  <p className="mt-2 font-bold text-gray-900">
                    {college.cutoff.cutoffScore}
                  </p>

                </div>


                <div className="rounded-xl bg-blue-50 p-5">

                  <p className="text-sm text-gray-500">
                    📊 Maximum Score
                  </p>

                  <p className="mt-2 font-bold text-gray-900">
                    {college.cutoff.maximumScore}
                  </p>

                </div>

              </>
            )}


          </div>

        </div>


        {/* Reviews */}

        <div className="mt-8">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-gray-900">
              Student Reviews
            </h2>


            <span className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
              ⭐ Student Feedback
            </span>

          </div>


          <div className="mt-5 grid gap-5 md:grid-cols-3">


            {college.reviews.map((review) => (

              <div
                key={review.name}
                className="flex min-h-[220px] flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >

                <p className="text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </p>


                <p className="mt-3 min-h-[56px] text-gray-600">
                  "{review.comment}"
                </p>



                <div className="mt-auto flex items-center gap-3 pt-6">


                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    {review.name.charAt(0)}
                  </div>


                  <div>

                    <p className="font-semibold text-gray-900">
                      {review.name}
                    </p>


                    <p className="text-sm text-gray-500">
                      {review.branch} • {review.year}
                    </p>


                  </div>


                </div>


              </div>

            ))}


          </div>

</div>

      </section>
    </main>
  );
}