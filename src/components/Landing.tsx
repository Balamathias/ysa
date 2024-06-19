import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { PersonIcon } from '@radix-ui/react-icons'
import MaxWrapper from './MaxWrapper'

const Landing = () => {
  return (
    <MaxWrapper className="justify-center h-max">
        <div className="flex flex-col md:flex-row md:gap-x-6 h-full justify-between my-auto" id='home'>
          <div className="flex basis-1/2">
            <Image 
              src="/images/people.png" 
              alt="Hero" 
              className="w-full rounded-full h-full border-4 border-primary object-cover object-center"
              height={1000}
              width={1000} 
            />
          </div>

          <div className="flex basis-1/2 flex-col space-y-3 py-2 px-4">
            <h1 className="text-4xl md:text-5xl font-semibold md:leading-relaxed leading-normal">Welcome to<br /><span className="text-primary">Young Start Academy</span>,</h1>
            <p className="text-lg text-muted-foreground py-2">We are a youth intervention initiative with the mandate to equip young Africans for global impact.</p>

            <div className="flex flex-row items-center space-x-4 py-3 sm:py-5">
              <Button className="flex items-center justify-center space-x-1 text-white py-6 px-8 rounded-xl">
                <PersonIcon className="w-6 h-6" />
                <span>About Us</span>
              </Button>
            </div>
          </div>
        </div>
      </MaxWrapper>
  )
}

export default Landing
