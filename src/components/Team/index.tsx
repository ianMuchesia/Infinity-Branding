import DivContainer from '@/Animations/DivContainer'
import data from '@/data'
import React from 'react'
import SingleTeam from './SingleTeam'
import Heading from '@/Animations/Heading'
const {team} = data
const Team = () => {
  return (
    <section id="team" className="section max-w-[1000px]">
      <Heading className='numbered-heading' data-num="03">Our Team</Heading>
    <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-7">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
          Core Team
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
     
        Welcome 
        Our <span className='text-white'>talented</span> team of <span className='text-white'>professionals</span>
      </h2>
      <p className="text-base  md:text-lg">
      Our team members are dedicated, highly skilled professionals, experts in their field, and we are proud to have them.
      </p>
    </div>
    <DivContainer className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 " delay={0.45}>
        {
              
     team.map((member)=>(
        <SingleTeam key={member.id} member={member}/>
     
     ))

        }
    </DivContainer>
    
    </section>
  )
}

export default Team