"use client"
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"


const links = [
    {
        name: "Home",
        path: "/"
    },

    {
        name: "Services",
        path: "/services"
    },

    {
        name: "Resume",
        path: "/resume"
    },

    {
        name: "Work",
        path: "/work"
    },

    {
        name: "Contact",
        path: "/contact"
    }
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-10 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Faulkner<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {
                        links.map((link, index) => {
                            return (
                                <Link href={link.path} className={`${pathname === link.path && "text-accent border-b-2 border-accent"} captalize font-medium hover:text-accent transiton-all`}>{link.name}</Link>
                            )
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav