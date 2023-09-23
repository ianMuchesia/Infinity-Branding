import DivContainer from '@/Animations/DivContainer'
import Heading from '@/Animations/Heading'
import React from 'react'
import ButtonLink from './ButtonLink'

const inputStyles=`
w-full px-4 py-3 mb-4  bg-black-400 border border-black-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
`

const Contact = () => {
  return (
    <section id="contact" className="section mb-[50px]">
    <Heading className="numbered-heading" data-num="04">
        Contact Us
    </Heading>
    <DivContainer
        delay={0.4}
        className="text-center flex flex-col items-center max-w-[600px] mx-auto pt-10"
    >
        <h2 className="text-4xl md:text-5xl  capitalize mb-3 md:mb-4">
            Get in touch
        </h2>
        <p className="mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ullam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi minima blanditiis illum sint laborum.
        </p>
        <form >
            <div className="flex flex-col  items-center justify-center w-full">
                <input
                    className={inputStyles}  
                    type="text"
                    placeholder="Your name"
                />
                <input
                     className={inputStyles} 
                    type="email"
                    placeholder="Your email"
                />
            </div>
            <textarea
                 className={inputStyles} 
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Your message"
            ></textarea>
     

        </form>
        <ButtonLink
            className="py-3 px-10"
            href="mailto:ebukathedev@gmail.com"
        >
            Say hello
        </ButtonLink>
    </DivContainer>
</section>
  )
}

export default Contact