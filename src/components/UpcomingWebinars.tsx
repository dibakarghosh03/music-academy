'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        link: "/",
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
        link: "/",
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
        link: "/",
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
        link: "/",
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
        link: "/",
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      link: "/",
    },
];

function UpcomingWebinars() {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="text-center">
                    <h2 className="text-xl text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={featuredWebinars} />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/webinars"}>
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            View All Webinars
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars