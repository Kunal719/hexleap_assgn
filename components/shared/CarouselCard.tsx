import React from 'react'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

type CarouselTypes = {
    imgURL: string,
    title: string,
    date: string,
    day: string,
    time: string,
    label: string,
    buttonText: string
}

const CarouselCard = ({ imgURL, title, date, day, time, label, buttonText }: CarouselTypes) => {
    return (
        <div className='bg-white dark:bg-[#292B32] p-4 min-h-[400px] max-w-[250px] items-center justify-between flex flex-1 flex-col gap-3 drop-shadow-xl'>
            <Image className='w-full' src={imgURL} alt={title} height={400} width={300} />
            <p className='w-full justify-stretch flex-1 text-nowrap overflow-hidden'>----------------------------------------------------</p>
            <h4 className='text-[16px] font-semibold text-nowrap'>{title}</h4>
            <div className='flex items-center text-nowrap'>
                <p>{date}</p>
                <Separator orientation='vertical' className='border-1 mx-1 bg-slate-600 h-4' />
                <p>{day}</p>
                <Separator orientation='vertical' className='border-1 mx-1 bg-slate-600 h-4' />
                <p>{time}</p>
            </div>
            <p className='text-center text-wrap'>{label}</p>
            <Button className='bg-black text-white w-full dark:hover:bg-white dark:hover:text-black' size='lg'>
                {buttonText}
            </Button>
        </div>
    )
}

export default CarouselCard