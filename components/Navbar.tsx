"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);


  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Colleges",
      path: "/colleges",
    },
    {
      name: "Compare",
      path: "/compare",
    },
    {
      name: "Predictor",
      path: "/predictor",
    },
  ];


  return (

    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          CollegeCompass
        </Link>



        {/* Navigation */}

        <div className="hidden gap-8 text-gray-700 md:flex">


          {
            links.map((link)=>{

              const active =
                link.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.path);


              return (

                <Link

                  key={link.path}

                  href={link.path}

                  className={`rounded-lg px-3 py-2 font-medium transition ${
                    
                    active
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100 hover:text-blue-600"

                  }`}

                >

                  {link.name}

                </Link>

              );

            })
          }


                </div>


        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>


      </div>


      {
        open && (

          <div className="border-t bg-white px-6 py-4 md:hidden">

            <div className="flex flex-col gap-4 text-gray-700">

              {
                links.map((link)=>(

                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`font-medium ${
                      pathname === link.path
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>

                ))
              }

            </div>

          </div>

        )
      }


    </nav>

  );
}