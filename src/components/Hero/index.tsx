import FadeUp from '@/Animations/FadeUp';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const windowWidth = window.innerWidth;
		if (windowWidth >= 768) {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}
	}, []);
  return (
    <section className='flex items-center'>
		<div className="hero">
			<div className="leading-[1.1]">
				<FadeUp delay={isDesktop ? 0.95 : 0.5}>
					<h1 className="text-green mb-6 font-medium">
						Hi, welcome to
					</h1>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.05 : 0.6}>
					<h1 className="big-heading text-lightest-green-slate">
						INFINITY BRANDING.
					</h1>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.15 : 0.7}>
					<h2 className="big-heading mt-3">
						We <span className='text-white'>bring </span> your <span className='text-white'>ideas</span>  to life.
					</h2>
				</FadeUp>
			</div>

			<FadeUp delay={isDesktop ? 1.25 : 0.8}>
				<p className="mt-6 max-w-[550px] text-lg lg:max-w-[590px] xl:text-sm">
					We are {" "}
					<span className="text-white">Branding Designers</span>.
					Planning to start s business or channel ? need to capitalize on your skills and talents? INFINITY branding got your back.
				</p>
			</FadeUp>

			</div>
			<div className="hidden xl:block">
				<FadeUp delay={1.05}>
				<Image
				src="/hero.png"
				width={500}
				height={500}
				alt='hero-image'
				/>
				</FadeUp>
			</div>
		</section>
  )
}

export default Hero