import React from 'react'
import MaxWrapper from './MaxWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Facebook, MessageCircleWarningIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full bg-black/90 p-3 sm:p-4 md:p-5 lg:p-8 flex flex-col items-center justify-center'>
      <MaxWrapper className='flex md:flex-row md:space-x-3 justify-between items-center'>
        <div className='flex flex-col'>
            <Link href={'/'} className='text-yellow-700/80 text-xl font-semibold w-fit rounded-lg shadow-sm'>
                Young Start Academy
            </Link>
        </div>
        <div className='flex flex-row space-y-2.5 space-x-3 md:space-x-5 items-center'>
            <Link className='text-yellow-50' href={'https://facebook.com'}>
                <Facebook className='w-5 md:w-8 h-5 md:h-8 mt-3' />
            </Link>

            <Link className='text-yellow-50' href={'https://twitter.com'}>
                <TwitterLogoIcon className='h-5 md:h-8 w-5 md:w-8' />
            </Link>

            <Link className='text-yellow-50' href={'https://instagram.com'}>
                <InstagramLogoIcon className='h-5 md:h-8 w-5 md:w-8' />
            </Link>

            <Link className='text-yellow-50' href={'https://whatsapp.com'}>
                <MessageCircleWarningIcon className='h-5 md:h-8 w-5 md:w-8' />
            </Link>
        </div>
      </MaxWrapper>
    </footer>
  )
}

export default Footer
