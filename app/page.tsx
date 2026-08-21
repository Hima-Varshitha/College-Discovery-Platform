import Navbar from "@/components/Navbar";
import CollegeCard from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";


export default function Home() {

  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      {/* Hero Section */}

      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">

        <h1 className="text-5xl font-bold text-gray-900">
          CollegeCompass
        </h1>


        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Discover India's top engineering colleges,
          compare them, and find the right choice for your future.
        </p>


        <button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">

          Explore Colleges

        </button>

      </section>



      {/* Featured Colleges */}

      <section className="px-8 pb-20">

        <h2 className="mb-8 text-3xl font-bold text-gray-900">

          Featured Colleges

        </h2>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {
            colleges.map((college)=>(
              
              <CollegeCard
                key={college.id}
                college={college}
              />

            ))
          }


        </div>


      </section>


    </main>

  );
}