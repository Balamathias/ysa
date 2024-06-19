import React from 'react'
import MaxWrapper from './MaxWrapper'
import { Button } from './ui/button'
import { Brain } from 'lucide-react'
import Image from 'next/image'

const Vision = () => {
  return (
    <MaxWrapper className="flex justify-center items-center h-full">
        <div className="flex flex-col space-y-3 py-2 px-2 md:flex-row md:space-x-4 md:items-stretch" id='vision'>

          <div className="flex flex-col space-y-3 py-4 px-4 basis-1/2 bg-white shadow-sm rounded-xl items-stretch flex-1">
            <div className="flex flex-row space-x-2 items-center">
              <Image 
                src={'/images/vision.png'}
                alt='Vision'
                height={300}
                width={300}
                className='h-10 w-10 rounded-full'
              />
              <h1 className="text-4xl md:text-4xl font-semibold leading-loose">Our Vision</h1>
            </div>
            <p className="text-lg text-muted-foreground py-2">Empowering the next generation of young leaders to unleash their entrepreneurial potential and drive positive change in their communities.
            </p>

            <div className="flex flex-row items-center space-x-4 py-3 sm:py-4">
              <Button className="bg-blue-500/20 border-2 border-blue-700/80 flex items-center justify-center space-x-1 text-white py-6 px-8 rounded-xl text-blue-900">
                <Brain className="w-6 h-6" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 py-4 px-4 basis-1/2 bg-white shadow-sm rounded-xl items-stretch flex-1">
          <div className="flex flex-row space-x-2 items-center">
              <Image 
                src={'/images/vision.png'}
                alt='Vision'
                height={300}
                width={300}
                className='h-10 w-10 rounded-full'
              />
              <h1 className="text-4xl md:text-4xl font-semibold leading-loose">Our Mission</h1>
            </div>
            <p className="text-lg text-muted-foreground py-2">Young Start Academy aims to cultivate entrepreneurial skills and provide resources for young talents to optimize their startups, achieve premium visibility, and maximize profitability. 
            </p>

            <div className="flex flex-row items-center space-x-4 py-3 sm:py-4">
              <Button className="bg-blue-500/20 border-2 border-blue-700/80 flex items-center justify-center space-x-1 text-white py-6 px-8 rounded-xl text-blue-900">
                <Brain className="w-6 h-6" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>
        </div>
      </MaxWrapper>
  )
}

export default Vision
