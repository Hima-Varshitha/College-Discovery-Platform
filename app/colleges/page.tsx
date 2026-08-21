"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CollegeCard from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";


export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);

  const [collegeType, setCollegeType] = useState("All");
  const filteredColleges = colleges.filter((college) => {

  const searchText = search.toLowerCase();


  const matchesSearch =
    college.name.toLowerCase().includes(searchText) ||
    college.location.toLowerCase().includes(searchText) ||
    college.state.toLowerCase().includes(searchText) ||
    college.keywords.some((keyword) =>
      keyword.toLowerCase().includes(searchText)
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


      <section className="px-8 py-12">

        <h1 className="text-4xl font-bold text-gray-900">
          Explore Engineering Colleges
        </h1>

        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-8 w-full max-w-xl rounded-lg border border-gray-300 px-5 py-3 text-gray-800 outline-none focus:border-blue-600"
        />

        <div className="mt-6 flex flex-wrap gap-4">


          <select
            value={minRating}
            onChange={(e)=>setMinRating(Number(e.target.value))}
            className="rounded-lg border px-4 py-2"
          >

            <option value={0}>
              All Ratings
            </option>

            <option value={4.7}>
              4.7+ Rating
            </option>

            <option value={4.5}>
              4.5+ Rating
            </option>

          </select>



          <select
            value={collegeType}
            onChange={(e)=>setCollegeType(e.target.value)}
            className="rounded-lg border px-4 py-2"
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


        <p className="mt-3 text-gray-600">
          Find and compare India's top engineering colleges.
        </p>



        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {
            filteredColleges.map((college)=>(
              
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