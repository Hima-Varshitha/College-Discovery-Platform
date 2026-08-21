import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";


export default function ComparePage() {

  const selectedColleges = colleges.slice(0,3);


  return (

    <main className="min-h-screen bg-gray-50">

      <Navbar />


      <section className="px-8 py-12">


        <h1 className="text-4xl font-bold text-gray-900">
          Compare Colleges
        </h1>


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


            </tbody>


          </table>


        </div>


      </section>


    </main>

  );
}