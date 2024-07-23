"use client"

import React from "react";
import CountUp from "react-countup";

const stat = [
    {
        num: 12,
        text: "Years of Experience",
    },

    {
        num: 26,
        text: "Projects Completed",
    },

    {
        num: 9,
        text: "Technologies Mastered",
    },

    {
        num: 500,
        text: "Code Commits",
    },
]

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {
                        stat.map((data, index) => {
                            return (
                                <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                    <CountUp 
                                        end={data.num}
                                        duration={5}
                                        delay={2}
                                        className="text-4xl xl:text-6xl font-extrabold"
                                    />
                                    <p className={`${data.text.length < 15 ? "max-w-[100px]":"max-w-[150px]" } text-[1.1rem]`}>
                                        {data.text}
                                    </p>     
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        
    )
}

export default Stats