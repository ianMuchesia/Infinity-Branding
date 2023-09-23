import DivContainer from '@/Animations/DivContainer'
import React from 'react'
import InlineLink from './InlineLink'
import SocialLinks from '../SocialLinks'
import Link from 'next/link'

const FooterContainer = () => {
  return (
    <footer className="p-[15px] flex flex-col items-center text-center">
			<DivContainer className="">
				<SocialLinks />
			</DivContainer>
			<DivContainer className="space-y-1 text-[13px] tracking-wide">
				<Link
					href="https://github.com/ianMuchesia"
					target="_blank"
					rel="noreferrer"
					className="transition-normal hover:text-blue-700"
				>
					Built by Infintiy Branding and Msodoki
				</Link>
				<p>
					Design inspired by{" "}
					<InlineLink
						href="/"
						text="Hillary Ouma"
					/>{" "}
					and{" "}
					<InlineLink
						href="/"
						text="Douglas Atiya"
					/>
				</p>
			</DivContainer>
		</footer>
  )
}

export default FooterContainer