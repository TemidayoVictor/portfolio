"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSolidity, SiMysql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const about = {
    title: "About Me",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate expedita quia et deleniti alias obcaecati molestias.",
    info: [
        {
            name: "Name",
            value: "Temidayo Victor"
        },

        {
            name: "Phone",
            value: "(+234) 813 994 3639"
        },

        {
            name: "Experience",
            value: "+12 years"
        },

        {
            name: "Email",
            value: "temidayovictor1@gmail.com"
        },

        {
            name: "Nationality",
            value: "Nigerian"
        },

        {
            name: "Freelance",
            value: "Available"
        },

        {
            name: "Languages",
            value: "English"
        }

        
    ]
}

const experience = {
    title: "My Experience",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate expedita quia et deleniti alias obcaecati molestias.",
    item: [
        {
            company: "Company Name",
            position: "Position",
            duration: "1 year",
        },

        {
            company: "Company Name",
            position: "Position",
            duration: "1 year",
        },

        {
            company: "Company Name",
            position: "Position",
            duration: "1 year",
        },

        {
            company: "Company Name",
            position: "Position",
            duration: "1 year",
        },

        {
            company: "Company Name",
            position: "Position",
            duration: "1 year",
        },

        {
            company: "Company Name",
            position: "Position",
            duration: "1 year",
        }
    ]
}

const education = {
    title: "My Education",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate expedita quia et deleniti alias obcaecati molestias.",
    item: [
        {
            institution: "Company Name",
            degree: "Position",
            duration: "1 year",
        },

        {
            institution: "Company Name",
            degree: "Position",
            duration: "1 year",
        },

        {
            institution: "Company Name",
            degree: "Position",
            duration: "1 year",
        },

        {
            institution: "Company Name",
            degree: "Position",
            duration: "1 year",
        },

        {
            institution: "Company Name",
            degree: "Position",
            duration: "1 year",
        },

        {
            institution: "Company Name",
            degree: "Position",
            duration: "1 year",
        }
    ]
}

const skills = {
    title: "My Skills",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa mollitia delectus esse laudantium, provident aliquam fugit.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html5", 
        },

        {
            icon: <FaCss3 />,
            name: "Css3", 
        },

        {
            icon: <SiTailwindcss />,
            name: "TailwindCss", 
        },

        {
            icon: <FaJs />,
            name: "Javascript", 
        },

        {
            icon: <FaReact />,
            name: "React Js", 
        },

        {
            icon: <SiNextdotjs />,
            name: "Next Js", 
        },

        {
            icon: <FaPhp />,
            name: "Php", 
        },

        {
            icon: <FaLaravel />,
            name: "Laravel", 
        },

        {
            icon: <SiMysql />,
            name: "Mysql", 
        },

        {
            icon: <SiSolidity />,
            name: "Solidity", 
        },
    ]
}


const Resume = () => {
    return (
        <section>
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate= {{ 
                        opacity: 1, 
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
                    }}
                    className="min-h-[80vh] flex items-center justify-center py-2 xl:py-0 gap-[60px]"
                >
                    <div className="container mx-auto">
                        <Tabs defaultValue="1" className="flex flex-col xl:flex-row gap-[60px]">
                            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                                <TabsTrigger value="1">Experience</TabsTrigger>
                                <TabsTrigger value="2">Education</TabsTrigger>
                                <TabsTrigger value="3">Skills</TabsTrigger>
                                <TabsTrigger value="4">About Me</TabsTrigger>
                            </TabsList>
                            <div className="min-h-[70vh] w-full">
                                <TabsContent value="1" className="w-full">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">
                                            {experience.title}
                                        </h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[1.1rem]">
                                            {experience.desc}
                                        </p>
                                        <ScrollArea className="xl:h-[25rem] b-2 overflow-y-scroll custom-scrollbar">
                                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                                {
                                                    experience.item.map((data, index) => {
                                                        return (
                                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                                <span className="text-accent">{data.duration}</span>
                                                                <h3 className="text-2xl"> {data.position} </h3>
                                                                <div className="flex justify-between items-center gap-2">
                                                                    <div className="h-[.5em] w-[.5em] bg-accent rounded-full"></div>
                                                                    <p className="text-white/60"> {data.company} </p>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </ScrollArea>
                                    </div>
                                </TabsContent>

                                <TabsContent value="2" className="w-full">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">
                                            {education.title}
                                        </h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[1.1rem]">
                                            {education.desc}
                                        </p>
                                        <ScrollArea className="xl:h-[25rem] b-2 overflow-y-scroll custom-scrollbar">
                                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                                {
                                                    education.item.map((data, index) => {
                                                        return (
                                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                                <span className="text-accent">{data.duration}</span>
                                                                <h3 className="text-2xl"> {data.institution} </h3>
                                                                <div className="flex justify-between items-center gap-2">
                                                                    <div className="h-[.5em] w-[.5em] bg-accent rounded-full"></div>
                                                                    <p className="text-white/60"> {data.degree} </p>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </ScrollArea>
                                    </div>
                                </TabsContent>

                                <TabsContent value="3" className="w-full h-full">
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                            <h3 className="text-4xl font-bold"> {skills.title} </h3>
                                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[1.1rem]"> {skills.desc} </p>
                                        </div>
                                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                            {
                                                skills.skillList.map((data, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <TooltipProvider delayDuration={100}>
                                                                <Tooltip>
                                                                    <TooltipTrigger className="bg-[#232329] w-full h-[8rem] rounded-xl flex justify-center items-center group">
                                                                        <div className="text-5xl group-hover:text-accent transition-all duration-300"> {data.icon} </div>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="capitalize"> {data.name} </p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                            
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </TabsContent>

                                <TabsContent value="4" className="w-full text-center xl:text-left">
                                    <div className="flex flex-col gap-[30px]">
                                        <h3 className="text-4xl font-bold"> {about.title} </h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[1.1rem]"> {about.desc} </p>
                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[55rem] mx-auto xl:mx-0">
                                            {
                                                about.info.map((data, index) => {
                                                    return (
                                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                            <span className="text-accent"> {data.name} - </span>
                                                            <span className="text-xl"> {data.value} </span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>    
                </motion.div>
            </div>
        </section>
        
    )
}

export default Resume