"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";

export default function PredictorPage() {
  const [exam, setExam] = useState("JEE Advanced");
  const [rankOrScore, setRankOrScore] = useState("");

  const numericValue = Number(rankOrScore);

  const recommendations = colleges.filter((college) => {
    if (!rankOrScore) {
        return false;
    }

    const numericValue = Number(rankOrScore);

    if (Number.isNaN(numericValue) || numericValue <= 0) {
        return false;
    }

    const cutoff = college.cutoff;

    if (cutoff.exam !== exam) {
        return false;
    }

    // Rank-based exams: lower rank is better
    if ("closingRank" in cutoff) {
        return numericValue <= cutoff.closingRank;
    }

    // Score-based exams: higher score is better
    if ("cutoffScore" in cutoff) {
        return (
        numericValue >= cutoff.cutoffScore &&
        numericValue <= cutoff.maximumScore
        );
    }

    return false;
    });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          College Predictor
        </h1>

        <p className="mt-3 text-gray-600">
          Enter your exam and rank or score to view matching colleges.
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                Entrance Exam
              </label>

              <select
                value={exam}
                onChange={(e) => {
                  setExam(e.target.value);
                  setRankOrScore("");
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800"
              >
                <option value="JEE Advanced">JEE Advanced</option>
                <option value="JEE Main">JEE Main</option>
                <option value="BITSAT">BITSAT</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                {exam === "BITSAT" ? "BITSAT Score" : "Rank"}
              </label>

              <input
                type="number"
                min="1"
                value={rankOrScore}
                onChange={(e) => setRankOrScore(e.target.value)}
                placeholder={
                  exam === "BITSAT"
                    ? "Enter your BITSAT score"
                    : "Enter your rank"
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Recommended Colleges
          </h2>

          {!rankOrScore ? (
            <p className="mt-4 text-gray-600">
              Enter your exam details to see recommendations.
            </p>
          ) : recommendations.length === 0 ? (
            <p className="mt-4 text-gray-600">
              No matching colleges found in the current dataset.
            </p>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {recommendations.map((college) => {
                const cutoff = college.cutoff;

                return (
                  <div
                    key={college.id}
                    className="rounded-xl bg-white p-6 shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {college.name}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {college.location}, {college.state}
                    </p>

                    <p className="mt-2 text-gray-600">
                      Exam: {cutoff.exam}
                    </p>

                    <p className="mt-2 text-gray-600">
                      Branch: {cutoff.branch}
                    </p>

                    {"closingRank" in cutoff && (
                      <p className="mt-2 text-gray-600">
                        Closing Rank: {cutoff.closingRank}
                      </p>
                    )}

                    {"cutoffScore" in cutoff && (
                      <p className="mt-2 text-gray-600">
                        Cutoff Score: {cutoff.cutoffScore}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}