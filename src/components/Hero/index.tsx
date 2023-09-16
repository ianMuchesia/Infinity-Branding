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
					<h1 className="text-green mb-5 font-medium">
						Hi, welcome to
					</h1>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.05 : 0.6}>
					<h2 className="big-heading text-lightest-green-slate">
						INFINITY BRANDING.
					</h2>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.15 : 0.7}>
					<h3 className="big-heading mt-2">
						We bring your ideas to life.
					</h3>
				</FadeUp>
			</div>

			<FadeUp delay={isDesktop ? 1.25 : 0.8}>
				<p className="mt-5 max-w-[550px] lg:text-lg lg:max-w-[590px] xl:text-sm">
					We are {" "}
					<span className="text-blue-600 ">Branding Designers</span>.
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugit ratione delectus ducimus a dolor veritatis ad magni vero aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam, optio labore saepe molestias porro consectetur voluptatibus beatae, voluptatum iure a laudantium reiciendis nesciunt officia enim accusamus quo fugiat amet.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, atque!
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