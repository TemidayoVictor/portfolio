"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectValue } from "@radix-ui/react-select";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "+(234) 813 994 3639",
    },

    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "temidayovictor1@gmail.com",
    },

    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Lagos Nigeria",
    },
]

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate= {{ 
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } , 
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row justify-between gap-3">
                    
                    <div className="xl:h-[54%] xl:w-40%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"> 
                            <h3 className="text-4xl text-accent">
                                Let's work together
                            </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, eum.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="First Name" />
                                <Input type="lastname" placeholder="Last Name" />
                                <Input type="email" placeholder="Emal" />
                                <Input type="phone" placeholder="Phone details" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="ui">UI/UX Design</SelectItem>
                                        <SelectItem value="logo">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Type Your Message Here">
                            </Textarea>
                            <Button size="md" className="max-w-40">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:w-[40%] order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10 px-5">
                            {
                                info.map((data, index) => {
                                    return(
                                        <li className="flex items-center gap-6">
                                            <div className="flex items-center justify-between gap-6">
                                                <div className=" flex items-center justify-center text-[28px] bg-[#27272c] w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent">
                                                    {data.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-white/60"> {data.title} </p>
                                                    <h3 className="text-xl"> {data.description} </h3>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}

export default Contact