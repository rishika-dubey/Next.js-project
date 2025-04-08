import Link from "next/link"
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";


function HeroSection () {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
        <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
        />
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to to-neutral-400"
            >Master your skills</h1>
            <p className="mt-2 font-normal text-base md:text-lg text-neutral-300 max-w-lg  mx-auto"
            >Dive into sit amet consectetur adipisicing elit.
               A, amet! Unde itaque voluptatem, quo natus
               whether you're a beginner or looking to  
               saepe deleniti repellat labore facere.</p>
               <div className="mt-4">
                <Link href={"/courses"}>
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                Explore courses       
               </Button>

                </Link>
              </div>

        </div>
    </div>
  )
}

export default HeroSection
