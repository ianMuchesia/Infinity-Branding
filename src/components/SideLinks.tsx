import React from 'react'
import SideIcons from './SideIcons';
import FadeIn from '@/Animations/FadeIn';
import Link from 'next/link';

const delay = 1.45;

const SideLinks = () => {
  return (
    <>
    <FadeIn
				className="fixed bottom-0 right-auto z-10 hidden w-10 md:block left-5 lg:left-10 lg:right-auto text-light-green-slate"
				delay={delay}
			>
				<SideIcons />
			</FadeIn>
			<FadeIn
				className="fixed bottom-0 left-auto z-10 hidden w-10 md:block right-5 lg:right-10 lg:left-auto text-light-green-slate"
				delay={delay}
			>
				<div className="flex flex-col items-center relative text-[13px]">
					<Link
						href="/"
						className="p-[10px] my-5 tracking-widest transition-normal hover:text-green hover:-translate-y-[3px]"
						style={{ writingMode: "vertical-rl" }}
						title="My email"
					>
						The Infinity Branding
					</Link>
					<span className="hidden md:block w-[1px] h-[90px] bg-blue-500 mx-auto"></span>
				</div>
			</FadeIn>
    </>
  )
}

export default SideLinks