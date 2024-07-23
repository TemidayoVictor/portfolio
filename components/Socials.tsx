import React from "react";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"

const social = [
    { icon: < FaGithub/>, path: ""  },
    { icon: < FaLinkedinIn/>, path: ""  },
    { icon: < FaYoutube/>, path: ""  },
    { icon: < FaTwitter/>, path: ""  },
]

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const Socials:  React.FC<SocialProps> = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {
                social.map((data, index) => {
                    return (
                        <Link href={data.path} key={index} className={iconStyles}>
                            {data.icon}
                        </Link>  
                    )
                })
            }
        </div>
    )
}

export default Socials