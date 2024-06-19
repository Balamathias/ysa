import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import MaxWrapper from './MaxWrapper'
import { Button } from './ui/button'

const ContactUs = () => {
  return (
    <MaxWrapper className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-y-3 py-2 px-2 md:flex-row md:space-x-4" id='about'>
            <div className="flex flex-col space-y-3 py-4 px-4 basis-1/2 rounded-xl items-stretch flex-1">
              <Image 
                src="/images/contact.png" 
                alt="contact" 
                height={1000}
                width={1000} 
                className="w-full rounded-xl h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col space-y-3 py-4 px-4 basis-1/2 bg-white shadow-sm rounded-xl w-full">
              <h1 className="text-4xl md:text-3xl font-semibold leading-loose text-yellow-950">Message Us</h1>

              <div className="flex flex-col w-full space-y-3 py-3 sm:py-5">
                <div className="flex flex-col space-y-2">
                  <label id="name" className="text-lg text-muted-foreground">Email</label>
                  <Input type="email" id="email" name="email" placeholder="Enter your email" className="p-4 rounded-md ring-none focus:ring-0 focus-within:ring-0 shadow-0 focus:border-0 border-primary" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label id="message" className="text-lg text-muted-foreground">Message</label>
                  <Input type="text" id="message" name="message" placeholder="Enter your message..." className="p-4 rounded-md ring-none focus:ring-0 focus-within:ring-0 shadow-0 focus:border-0 border-primary" />
                </div>

                <div className="flex flex-col space-y-2">
                  <Button>Send</Button>
                </div>
              </div>
            </div>
        </div>
      </MaxWrapper>
  )
}

export default ContactUs
