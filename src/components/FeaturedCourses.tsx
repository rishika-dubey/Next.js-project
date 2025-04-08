'use client'
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

import data from "../data/all_courses.json"
import { p } from "motion/react-client"
import Image from "next/image"

interface Course{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: number,
  isFeatured: true,
}

function FeaturedCourses() {
 
  return (
    <div className="py-12 bg-gray-900">
        <div>
        <div className="text-center">
            <h2 className="text-based text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
        </div>
        </div>
        <div className="mt-10 px-20">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>

        </div>
        <div className="mt-6 text-center">
            <Link href="/courses"
            className="px-4 py-2 rounded border-neutral-700 bg-white text-black hover:bg-gray-100 transition duration-200">
            View All Courses
            </Link>
        </div>
        
    </div>
  )
}

export default FeaturedCourses
