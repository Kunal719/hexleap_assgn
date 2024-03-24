import React from 'react'
import Image from 'next/image'

type AdCard = {
    imgURL: string,
    label: string,
    value: string
}

const SportCard = ({ imgURL, label, value }: AdCard) => {
    return (
        <div className='bg-white  dark:bg-[#3B3E47] p-2 lg:min-w-[230px] min-h-[400px] items-start flex flex-col drop-shadow-xl'>
            <div className='relative w-full'>
                <Image className='w-full relative' src={imgURL} alt={label} height={300} width={200} />
                <span className='absolute top-0 right-0 bg-black w-[40px] text-white text-center p-1 text-[10px]'>Ad</span>
            </div>
            <div className='p-1 border border-green-800 dark:border-none'>
                <h4 className='text-[16px] font-semibold text-nowrap'>{label}</h4>
                <span className='mt-[8px] text-[12px] leading-6'>{value}</span>
            </div>
        </div>
    )
}

export default SportCard