import Link from "next/link";
import Navbar from "@/components/Navbar";
import CollegeCard from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";


export default function Home() {

  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      {/* Hero Section */}

        <section className="relative overflow-hidden px-6 py-20 text-center">


          {/* Background Glow */}

          <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-3xl" />


          <div className="mx-auto max-w-4xl">


            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">

              India's Engineering College Discovery Platform

            </span>



            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">

              Find the Right Engineering

              <br />

              College for{" "}

              <span className="text-blue-600">
                Your Future
              </span>

            </h1>



            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">

              Explore top engineering colleges, compare placements,
              understand fees, and predict colleges based on your
              entrance exam rank.

            </p>



            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">


              <Link

                href="/colleges"

                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"

              >

                Explore Colleges

              </Link>



              <Link

                href="/predictor"

                className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"

              >

                Predict My College

              </Link>


            </div>


          </div>




          {/* Stats */}

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">


            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-3xl font-bold text-blue-600">
                30+
              </h3>

              <p className="mt-2 text-gray-600">
                Colleges Covered
              </p>

            </div>




            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-3xl font-bold text-blue-600">
                3
              </h3>

              <p className="mt-2 text-gray-600">
                Smart Tools
              </p>

            </div>




            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-3xl font-bold text-blue-600">
                Rank Based
              </h3>

              <p className="mt-2 text-gray-600">
                College Prediction
              </p>

            </div>


          </div>


        </section>



      {/* Featured Colleges */}


        <section className="mx-auto max-w-7xl px-6 pb-24">


          <div className="mb-10 text-center">


            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">

              ⭐ Top Institutes

            </span>



            <h2 className="mt-5 text-4xl font-bold text-gray-900">

              Explore Top Engineering Colleges

            </h2>



            <p className="mx-auto mt-3 max-w-2xl text-gray-600">

              Discover leading IITs, NITs and private institutes
              with placement, fees, and admission insights.

            </p>


          </div>




          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


            {
              colleges.map((college)=>(

                <div
                  key={college.id}
                  className="transition duration-300 hover:-translate-y-1"
                >

                  <CollegeCard
                    college={college}
                  />

                </div>

              ))
            }


          </div>




          <div className="mt-12 flex justify-center">


            <Link

              href="/colleges"

              className="rounded-xl border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"

            >

              View All Colleges →

            </Link>


          </div>


        </section>


    </main>

  );
}