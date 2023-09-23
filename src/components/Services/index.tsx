import DivContainer from '@/Animations/DivContainer'
import Heading from '@/Animations/Heading'
import data from '@/data';
import React from 'react'
import Card from './Cards';
import FadeUp from '@/Animations/FadeUp';
const { cards } = data;

const Services = () => {

    let currentDelay = 0.55;

    return (
        <section id="services" className="section max-w-[1000px]">
            <Heading className='numbered-heading' data-num="02">Our Services</Heading>
            <h2 className="text-4xl md:text-5xl  capitalize mb-3 md:mb-4 text-center">
                Get a <span className='text-white'>look</span> at our <span className='text-white'>services</span>
            </h2>
            <p className="mb-12 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi minima blanditiis illum sint laborum.
            </p>
            <DivContainer className="" delay={0.4}>
                <div className="flex justify-center  flex-wrap gap-3 w-full">


                    {
                        cards.map(card => {
                            currentDelay += 0.15;

                            return (
                                <FadeUp delay={currentDelay}  key={card.icon} >
                                <Card card={card}/>
                                </FadeUp>
                            )
                        })
                    }


                </div>
            </DivContainer>
        </section>

    )
}

export default Services