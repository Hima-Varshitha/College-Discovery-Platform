"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";


export default function ComparePage() {
  const tableRef = useRef<HTMLDivElement>(null);

  const [selectedIds, setSelectedIds] = useState<number[]>([1, 2]);


  const selectedColleges = colleges.filter((college) =>
    selectedIds.includes(college.id)
  );


  const toggleCollege = (id: number) => {

    if (selectedIds.includes(id)) {

      setSelectedIds(
        selectedIds.filter(
          (collegeId) => collegeId !== id
        )
      );

    } else {

      if (selectedIds.length < 3) {
        setSelectedIds([
          ...selectedIds,
          id
        ]);
      }

    }

  };


  const comparisonRows = [
    {
      label: "Location",
      value: (college:any) => college.location,
    },
    {
      label: "Rating",
      value: (college:any) => `⭐ ${college.rating}/5`,
    },
    {
      label: "Fees",
      value: (college:any) => college.fees,
    },
    {
      label: "Average Package",
      value: (college:any) => college.placement.averagePackage,
    },
    {
      label: "Highest Package",
      value: (college:any) => college.placement.highestPackage,
    },
    {
      label: "Established Year",
      value: (college:any) => college.establishedYear,
    },
    {
      label: "College Type",
      value: (college:any) => college.type,
    },
    {
      label: "Entrance Exam",
      value: (college:any) => college.entranceExam,
    },
    {
      label: "CSE Cutoff",
      value: (college:any) =>
        "closingRank" in college.cutoff
          ? `Rank ${college.cutoff.closingRank}`
          : `Score ${college.cutoff.cutoffScore}`,
    },
  ];


  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      <section className="mx-auto max-w-7xl px-6 py-12">


        <h1 className="text-4xl font-bold text-gray-900">
          Compare Colleges
        </h1>


        <p className="mt-3 text-gray-600">
          Compare top engineering colleges side by side.
        </p>



        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">


          <h2 className="text-xl font-bold text-gray-900">
  Select Colleges
</h2>


<div className="mt-4 flex items-center justify-between">

  <p className="text-sm text-gray-600">
    Selected: {selectedIds.length}/3 colleges
  </p>


  <button
    disabled={selectedIds.length === 0}
    onClick={() => {

      tableRef.current?.scrollIntoView({
        behavior: "smooth",
      });

    }}
    className={`rounded-xl px-6 py-2.5 font-semibold transition ${
      selectedIds.length === 0
        ? "cursor-not-allowed bg-gray-300 text-gray-500"
        : "cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
    }`}
  >
    Compare Selected Colleges
  </button>

</div>


<div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {
              colleges.map((college)=>(

                <label
                  key={college.id}
                  className={`cursor-pointer rounded-xl border p-4 transition ${
                    selectedIds.includes(college.id)
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-blue-300"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <input
                      type="checkbox"
                      checked={selectedIds.includes(college.id)}
                      disabled={
                        !selectedIds.includes(college.id) &&
                        selectedIds.length >= 3
                      }
                      onChange={()=>{
                        
                        if(selectedIds.includes(college.id)){

                          setSelectedIds(
                            selectedIds.filter(
                              id=>id!==college.id
                            )
                          );

                        }
                        else{

                          setSelectedIds([
                            ...selectedIds,
                            college.id
                          ]);

                        }

                      }}
                    />


                    <span className="font-medium text-gray-900">
                      {college.name}
                    </span>

                  </div>


                  <p className="mt-2 text-sm text-gray-600">
                    ⭐ {college.rating}/5
                  </p>


                </label>

              ))
            }

            </div>


        </div>


        {/* </div> */}




        <div
          ref={tableRef}
          className="mt-10 overflow-x-auto rounded-3xl border border-blue-100 bg-white shadow-lg"

        >


          <table className="w-full overflow-hidden rounded-2xl border-collapse bg-white shadow-sm">


            <thead className="bg-blue-50">

              <tr className="border-b border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">

                <th className="sticky left-0 bg-blue-100 p-4 text-left font-bold text-blue-900">
                  Feature
                </th>


                {selectedColleges.map((college)=>(

                  <th
                    key={college.id}
                    className="p-4 text-center text-gray-700"
                  >
                    {college.name}
                  </th>

                ))}


              </tr>

            </thead>



            <tbody>


              {comparisonRows.map((row)=>(

                <tr
                  key={row.label}
                  className="border-b border-gray-200 transition hover:bg-blue-50 last:border-none"
                >

                  <td className="sticky left-0 bg-gray-50 p-4 font-bold text-gray-900">
                    {row.label}
                  </td>


                  {selectedColleges.map((college)=>(

                    <td
                      key={college.id}
                      className="p-4 text-center text-gray-700"
                    >
                      {row.value(college)}
                    </td>

                  ))}


                </tr>

              ))}


            </tbody>


          </table>


        </div>


      </section>


    </main>

  );
}