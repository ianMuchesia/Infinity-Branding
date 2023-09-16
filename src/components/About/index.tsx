import DivContainer from '@/Animations/DivContainer'
import Heading from '@/Animations/Heading'
import React from 'react'
import TextContent from './TextContent'
import Skillset from './Skillset'
import ProfilePic from './ProfilePic'

const About = () => {
  return (
    <section id="about" className="section max-w-[900px]">
<Heading
className='numbered-heading'>Read About Us</Heading>
<DivContainer
className="md:grid md:grid-cols-[3fr_2fr] md:gap-12 md:space-y-0 space-y-14"
delay={0.4}
>
    <div>
        <TextContent/>
        <Skillset
        className='mt-4'/>
    </div>
    <div className="w-[70%] max-w-[300px] md:w-full mx-auto">
					<ProfilePic />
				</div>
</DivContainer>

    </section>
  )
}

export default About