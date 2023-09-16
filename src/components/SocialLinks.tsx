import data from '@/data';
import Link from 'next/link';
import React from 'react'
const { socials } = data;
const SocialLinks = () => {
  return (
    <ul className="flex items-center space-x-3 ">
    {socials.map((social) => (
        <li key={social.id}>
            <Link
                href={social.url}
                title={social.name}
                className="p-[10px] inline-block transition-normal md:hover:-translate-y-[3px] hover:text-blue-700"
                target="_blank"
                rel="noreferrer"
            >
                <social.icon size={20} />
            </Link>
        </li>
    ))}
   
</ul>
  )
}

export default SocialLinks