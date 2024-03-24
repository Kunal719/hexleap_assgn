import React from 'react'
import { ModeToggle } from '@/components/shared/ToggleMode'
import { Separator } from "@/components/ui/separator"
import { sports, ads, carousels } from '@/constants'
import SportCard from '@/components/shared/SportCard'
import AdCard from '@/components/shared/AdCard';
import { Button } from '@/components/ui/button'
import CarouselCard from '@/components/shared/CarouselCard'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Home = () => {
    return (
        <>
            <section className='wrapper flex flex-col'>
                {/* Player Collection  */}
                <div className='absolute top-4 right-6 items-end'>
                    <ModeToggle />
                </div>

                <div className='inside-wrapper-top items-start flex flex-col justify-between'>
                    <div className='drop-shadow-xl'>
                        <h3 className='h3-bold'>Sports</h3>
                        <Separator className='bg-[#738FFF] my-2 h-1' />
                    </div>
                    <div className='w-full items-center grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-8 mt-5'>
                        {sports.map((sport) => (
                            <SportCard
                                key={sport.imgURL}
                                imgURL={sport.imgURL}
                                name={sport.name}
                                label1={sport.label1}
                                value1={sport.value1}
                                label2={sport.label2}
                                value2={sport.value2}
                            />
                        ))}
                        {ads.map((ad) => (
                            <AdCard key={ad.imgURL} imgURL={ad.imgURL} label={ad.label} value={ad.value} />
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-center mt-6'>
                    <Button className='rounded-md bg-[#2C9CF0]  max-w-[150px] h-10' size='sm'>See More</Button>
                </div>


                {/* Collection Spotlight  */}
                <div className='inside-wrapper-2 lg:items-center flex flex-col justify-between mt-10 dark:bg-gradient-to-t from-[#18282A] to-[#221A2C] '>
                    <h2 className='h2-bold'>Collection Spotlight</h2>
                    <p className='text-sm lg:text-center mt-5 max-sm:text-start'>
                        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
                    </p>

                    <div className='flex md:items-center max-md:mr-36 w-full max-md:max-w-[400px] max-md:ml-24 max-sm:max-w-[200px] max-sm:mr-8'>
                        <Carousel className='mt-10 w-full' opts={{ align: 'start', loop: true }}>
                            <CarouselContent>
                                {carousels.map((carousel) => (
                                    <CarouselItem key={carousel.imgURL} className='basis-full md:basis-1/2 lg:basis-1/3  items-center justify-center w-full'>
                                        <CarouselCard
                                            imgURL={carousel.imgURL}
                                            title={carousel.title}
                                            date={carousel.date}
                                            day={carousel.day}
                                            time={carousel.time}
                                            label={carousel.label}
                                            buttonText={carousel.buttonText}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home