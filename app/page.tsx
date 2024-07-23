import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
   <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-7">
          
          <div className="text-center xl:text-left order-2 xl:order-none xl:w-[47%]">
            <span className="text-xl text-accent">Software Engineer, Travel Manager</span>
            <h1 className="h1 mb-6 mt-2">
              Hello I'm <br /> <span className="text-accent">Temidayo Victor</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-[1.2rem]">
              I excel at crafting elegant digital experiences and i'm proficient in various programming languages and technologies
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2" 
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0"><Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent
               rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary 
               hover:transition-all duration-500"/></div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:w-[45%]"><Photo /></div>

        </div>
      </div>
      <Stats/>
   </section>
  );
}
