import data from '@/data'
import React from 'react'
import {  IconType } from 'react-icons'
interface CardProp{
    card: {
        id: number;
        title: string;
        description: string;
        icon: IconType;
    };
}

const Card = ({card}:CardProp) => {

    
  
    return(
        <div className='bg-black-600 hover:bg-blue-600 p-10 flex flex-col items-center gap-4 lg:gap-10 max-w-[300px] rounded-xl hover:text-black-600 transition duration-500 ease-in-out'>
            <h3>{card.title}</h3>
            <card.icon className='text-6xl text-white'/>
            <p className='text-center'>{card.description}</p>

        </div>
    )
   
  
}

export default Card