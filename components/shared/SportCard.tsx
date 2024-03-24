import React from 'react'
import Image from 'next/image'

type SportsCard = {
    imgURL: string,
    name: string,
    label1: string,
    value1: string,
    label2: string,
    value2: string
}

const SportCard = ({ imgURL, name, label1, value1, label2, value2 }: SportsCard) => {
    return (
        <div className='bg-white dark:bg-[#3B3E47] p-2 min-h-[450px] xl:max-w-[275px] lg:min-w-[230px] items-start justify-between flex flex-1 flex-col gap-3 drop-shadow-xl'>
            <Image className='w-full' src={imgURL} alt={name} height={400} width={300} />
            <h4 className='text-[16px] text-nowrap'>{name}</h4>

            <div className='flex justify-around w-full p-1 items-center gap-5 max-sm:gap-0 bg-[#F7F7F8] dark:bg-[#292B32]'>
                <div className='flex flex-col gap-1 ml-2 text-nowrap max-md:text-wrap'>
                    <span className='text-slate-700 dark:text-slate-300 text-sm xl:text-[14px] max-lg:text-[12px]'>{label1}</span>
                    <span className='text-sm xl:text-[16px] max-lg:text-[14px]'>{value1} Events</span>
                </div>
                <div className='flex flex-col gap-1 mr-4 text-nowrap max-md:text-wrap'>
                    <span className='text-slate-700 dark:text-slate-300 text-sm xl:text-[14px] max-lg:text-[12px]'>{label2}</span>
                    <span className='xl:text-[16px] max-lg:text-[14px]'>{value2}</span>
                </div>
            </div>
        </div>
    )
}

export default SportCard