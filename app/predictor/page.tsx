"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";


export default function PredictorPage() {

  function getChanceLabel(
  value: number,
  cutoff: any
) {

  if ("closingRank" in cutoff) {

    const ratio = value / cutoff.closingRank;


    if (ratio <= 0.5) {
      return {
        label: "Excellent Chance",
        color: "bg-green-50 text-green-700",
      };
    }


    if (ratio <= 0.8) {
      return {
        label: "Good Chance",
        color: "bg-blue-50 text-blue-700",
      };
    }


    return {
      label: "Moderate Chance",
      color: "bg-yellow-50 text-yellow-700",
    };

  }



  if ("cutoffScore" in cutoff) {

    const difference = value - cutoff.cutoffScore;


    if (difference >= 40) {
      return {
        label: "Excellent Chance",
        color: "bg-green-50 text-green-700",
      };
    }


    if (difference >= 15) {
      return {
        label: "Good Chance",
        color: "bg-blue-50 text-blue-700",
      };
    }


    return {
      label: "Moderate Chance",
      color: "bg-yellow-50 text-yellow-700",
    };

  }


  return {
    label: "Check Details",
    color: "bg-gray-50 text-gray-700",
  };

}

  const [exam, setExam] = useState("JEE Advanced");
  const [rankOrScore, setRankOrScore] = useState("");


  const recommendations = colleges.filter((college)=>{

    if(!rankOrScore) return false;


    const value = Number(rankOrScore);

    if(Number.isNaN(value) || value <= 0)
      return false;


    const cutoff = college.cutoff;


    if(cutoff.exam !== exam)
      return false;



    if("closingRank" in cutoff){

      return value <= cutoff.closingRank;

    }


    if("cutoffScore" in cutoff){

      return (
        value >= cutoff.cutoffScore &&
        value <= cutoff.maximumScore
      );

    }


    return false;

  });



  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      <section className="mx-auto max-w-6xl px-6 py-14">


        <div className="text-center">


          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            🎓 Smart Admission Assistant
          </span>


          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Find Colleges Based on Your Rank
          </h1>


          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Enter your entrance exam details and discover colleges where you have admission chances.
          </p>


        </div>





        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">


          <div className="grid gap-6 md:grid-cols-2">


            <div>

              <label className="mb-3 block text-sm font-semibold text-gray-800">
                Select Entrance Exam
              </label>


              <select

                value={exam}

                onChange={(e)=>{

                  setExam(e.target.value);
                  setRankOrScore("");

                }}

                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"

              >

                <option value="JEE Advanced">
                  JEE Advanced
                </option>


                <option value="JEE Main">
                  JEE Main
                </option>


                <option value="BITSAT">
                  BITSAT
                </option>


                <option value="VITEEE">
                  VITEEE
                </option>


                <option value="MET">
                  MET
                </option>


                <option value="SRMJEEE">
                  SRMJEEE
                </option>


                <option value="AEEE">
                  AEEE
                </option>


              </select>


            </div>





            <div>


              <label className="mb-3 block text-sm font-semibold text-gray-800">

                {
                  exam === "BITSAT"
                  ? "Enter Score"
                  : "Enter Rank"
                }

              </label>


              <input

                type="number"

                value={rankOrScore}

                onChange={(e)=>
                  setRankOrScore(e.target.value)
                }

                placeholder={
                  exam === "BITSAT"
                    ? "Example: 320"
                    : exam === "JEE Advanced"
                    ? "Example: 100"
                    : exam === "JEE Main"
                    ? "Example: 1000"
                    : "Example: 500"
                }

                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"

              />


            </div>


          </div>




          <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-700">

            💡 For JEE, a lower rank gives better chances. For BITSAT, higher score improves chances.

          </div>


        </div>





        <div className="mt-14">


          <h2 className="text-3xl font-bold text-gray-900">
            Recommended Colleges
          </h2>



          {
            !rankOrScore ? (

              <div className="mt-6 rounded-2xl border bg-white p-10 text-center shadow-sm">

                <p className="text-gray-600">
                  Enter your rank or score to get recommendations.
                </p>

              </div>


            ) : recommendations.length === 0 ? (


              <div className="mt-6 rounded-2xl border bg-white p-10 text-center shadow-sm">

                <h3 className="text-xl font-bold">
                  No colleges found
                </h3>


                <p className="mt-2 text-gray-600">
                  Try another rank or exam.
                </p>

              </div>


            ) : (


              <div className="mt-8 grid gap-6 md:grid-cols-2">


                {
                  recommendations.map((college)=>(


                    <div

                      key={college.id}

                      className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

                    >


                      <div className="flex min-h-[56px] items-start justify-between gap-4">


                      <h3 className="max-w-[70%] text-xl font-bold leading-tight text-gray-900">
                        {college.name}
                      </h3>


                      {
                        (() => {

                          const chance = getChanceLabel(
                            Number(rankOrScore),
                            college.cutoff
                          );


                          return (

                            <span
                              className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${chance.color}`}
                            >
                              {chance.label}
                            </span>

                          );

                        })()
                      }


                    </div>




                      <p className="mt-4 text-gray-600">
                        📍 {college.location}, {college.state}
                      </p>




                      <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-5 text-sm">


                        <p>
                          Exam:
                          <span className="ml-2 font-semibold">
                            {college.cutoff.exam}
                          </span>
                        </p>


                        <p>
                          Branch:
                          <span className="ml-2 font-semibold">
                            {college.cutoff.branch}
                          </span>
                        </p>


                        {
                          "closingRank" in college.cutoff && (

                            <p>
                              Closing Rank:
                              <span className="ml-2 font-semibold">
                                {college.cutoff.closingRank}
                              </span>
                            </p>

                          )
                        }



                        {
                          "cutoffScore" in college.cutoff && (

                            <p>
                              Cutoff Score:
                              <span className="ml-2 font-semibold">
                                {college.cutoff.cutoffScore}
                              </span>
                            </p>

                          )
                        }


                      </div>


                    </div>


                  ))
                }


              </div>


            )
          }


        </div>


      </section>


    </main>

  );
}