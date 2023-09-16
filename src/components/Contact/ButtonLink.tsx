import Link from 'next/link';
import React from 'react'

interface ButtonLinkProps {
    className?: string;
    href: string;
    bgColor?: string;
    children: React.ReactNode;
}
const buttonStyles =
	"relative block transition-normal border rounded-md border-green hover:-translate-x-1 hover:-translate-y-1 text-green";


const ButtonLink = ({className,href ,bgColor,children}:ButtonLinkProps) => {
  return (
    <Link
			className="relative focus:outline-none capitalize"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			<span
				className={`${buttonStyles} ${className || "px-4 py-2"} ${
					bgColor || "bg-black-500"
				}  `}
			>
				{children}
			</span>
			<span className="absolute inset-0 rounded-md -z-10 bg-blue-500"></span>
		</Link>
  )
}

export default ButtonLink