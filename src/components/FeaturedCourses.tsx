'use client';
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured === true);

  return (
    <div className="py-20 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-xl text-teal-300 font-semibold tracking-wide uppercase">
                    FEATURED COURSES
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Learn With the Best
                </p>
            </div>
        </div>
        <div className="my-20">
            <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                {
                    featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center justify-between gap-5">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                            Learn More
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="flex justify-center mb-10">
            <Link href={"/courses"}>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    View All Courses
                    </div>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses