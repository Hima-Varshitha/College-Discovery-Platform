"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CollegeCard from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";


export default function CollegesPage() {

  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [collegeType, setCollegeType] = useState("All");


  const filteredColleges = colleges.filter((college)=>{

    const text = search.toLowerCase();


    const matchesSearch =
      college.name.toLowerCase().includes(text) ||
      college.location.toLowerCase().includes(text) ||
      college.state.toLowerCase().includes(text) ||
      college.keywords.some((keyword)=>
        keyword.toLowerCase().includes(text)
      );


    const matchesRating =
      college.rating >= minRating;


    const matchesType =
      collegeType === "All" ||
      college.type === collegeType;


    return (
      matchesSearch &&
      matchesRating &&
      matchesType
    );

  });



  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      <section className="mx-auto max-w-7xl px-6 py-14">


        <div className="text-center">


          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            🎓 College Discovery Platform
          </span>


          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Explore Engineering Colleges
          </h1>


          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Search, filter, and discover India's top engineering institutes based on rankings, fees, and placements.
          </p>


        </div>





        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">


          <input

            type="text"

            placeholder="Search college name, city, state..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none transition focus:border-blue-600"

          />




          <div className="mt-6 flex flex-wrap gap-4">


            <select

              value={minRating}

              onChange={(e)=>setMinRating(Number(e.target.value))}

              className="rounded-xl border border-gray-300 px-5 py-3 pr-10 outline-none"

            >

              <option value={0}>
                All Ratings
              </option>

              <option value={4.7}>
                ⭐ 4.7+ Rating
              </option>

              <option value={4.5}>
                ⭐ 4.5+ Rating
              </option>


            </select>





            <select

              value={collegeType}

              onChange={(e)=>setCollegeType(e.target.value)}

              className="rounded-xl border border-gray-300 px-5 py-3 pr-10 outline-none"

            >

              <option value="All">
                All Colleges
              </option>

              <option value="Government">
                Government
              </option>

              <option value="Private">
                Private
              </option>


            </select>


          </div>


        </div>





        <div className="mt-10 flex items-center justify-between">


          <h2 className="text-2xl font-bold text-gray-900">
            {filteredColleges.length} Colleges Found
          </h2>


        </div>





        {
          filteredColleges.length > 0 ? (

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


              {
                filteredColleges.map((college)=>(

                  <CollegeCard

                    key={college.id}

                    college={college}

                  />

                ))
              }


            </div>


          ) : (


            <div className="mt-8 rounded-2xl border bg-white p-12 text-center shadow-sm">


              <h3 className="text-2xl font-bold text-gray-900">
                No Colleges Found
              </h3>


              <p className="mt-3 text-gray-600">
                Try changing your search or filters.
              </p>


            </div>


          )
        }


      </section>


    </main>

  );

}