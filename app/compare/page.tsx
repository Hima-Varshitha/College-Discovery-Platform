"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";


export default function ComparePage() {

  const [selectedIds, setSelectedIds] = useState<number[]>([1, 2]);
  const selectedColleges = colleges.filter((college) =>
    selectedIds.includes(college.id)
  );


  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      <section className="px-8 py-12">


        <h1 className="text-4xl font-bold text-gray-900">
          Compare Colleges
        </h1>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">

  <h2 className="text-xl font-bold">
    Select Colleges
  </h2>


  <div className="mt-4 flex flex-wrap gap-4">

    {colleges.map((college) => (

      <label
        key={college.id}
        className="flex items-center gap-2"
      >

        <input
          type="checkbox"
          checked={selectedIds.includes(college.id)}
          disabled={
            !selectedIds.includes(college.id) &&
            selectedIds.length >= 3
          }
          onChange={() => {

            if (selectedIds.includes(college.id)) {

              setSelectedIds(
                selectedIds.filter(
                  (id) => id !== college.id
                )
              );

            } else {

              setSelectedIds([
                ...selectedIds,
                college.id
              ]);

            }

          }}
        />


        {college.name}

      </label>

    ))}

  </div>

</div>


        <p className="mt-3 text-gray-600">
          Compare top engineering colleges side by side.
        </p>



        <div className="mt-10 overflow-x-auto">


          <table className="w-full border-collapse bg-white shadow">


            <thead>

              <tr className="border">

                <th className="p-4 text-left">
                  Feature
                </th>


                {
                  selectedColleges.map((college)=>(
                    
                    <th 
                      key={college.id}
                      className="p-4"
                    >
                      {college.name}
                    </th>

                  ))
                }


              </tr>

            </thead>



            <tbody>


              <tr className="border">

                <td className="p-4 font-semibold">
                  Location
                </td>


                {
                  selectedColleges.map((college)=>(
                    
                    <td 
                      key={college.id}
                      className="p-4"
                    >
                      {college.location}
                    </td>

                  ))
                }

              </tr>



              <tr className="border">

                <td className="p-4 font-semibold">
                  Rating
                </td>


                {
                  selectedColleges.map((college)=>(
                    
                    <td 
                      key={college.id}
                      className="p-4"
                    >
                      ⭐ {college.rating}
                    </td>

                  ))
                }

              </tr>



              <tr className="border">

                <td className="p-4 font-semibold">
                  Fees
                </td>


                {
                  selectedColleges.map((college)=>(
                    
                    <td 
                      key={college.id}
                      className="p-4"
                    >
                      {college.fees}
                    </td>

                  ))
                }

              </tr>



              <tr className="border">

                <td className="p-4 font-semibold">
                  Average Package
                </td>


                {
                  selectedColleges.map((college)=>(
                    
                    <td 
                      key={college.id}
                      className="p-4"
                    >
                      {college.placement.averagePackage}
                    </td>

                  ))
                }

              </tr>

            <tr className="border">

              <td className="p-4 font-semibold">
                Established Year
              </td>
              {
                selectedColleges.map((college)=>( 
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.establishedYear}
                  </td>
                ))
              }
            </tr>

            <tr className="border">
              <td className="p-4 font-semibold">
                College Type
              </td>
              {
                selectedColleges.map((college)=>(
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.type}
                  </td>
                ))
              }
            </tr>

            <tr className="border">
              <td className="p-4 font-semibold">
                Entrance Exam
              </td>
              {
                selectedColleges.map((college)=>(  
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.entranceExam}
                  </td>
                ))
              }
            </tr>

            <tr className="border">
              <td className="p-4 font-semibold">
                Highest Package
              </td>
              {
                selectedColleges.map((college)=>(              
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.placement.highestPackage}
                  </td>
                ))
              }
            </tr>

            <tr className="border">
              <td className="p-4 font-semibold">
                CSE Cutoff
              </td>
              {
                selectedColleges.map((college)=>(
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {"closingRank" in college.cutoff
                      ? `Rank ${college.cutoff.closingRank}`
                      : `Score ${college.cutoff.cutoffScore}`
                    }
                  </td>
                ))
              }
            </tr>

            

            </tbody>


          </table>


        </div>


      </section>


    </main>

  );
}