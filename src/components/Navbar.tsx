import React from 'react'
import MaxWrapper from './MaxWrapper'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { LucideMenu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='w-full h-20 justify-center items-center bg-white p-4 shadow-md z-10'>
      <MaxWrapper className='flex justify-between items-center h-full flex-row'>
        <div className='flex items-center'>
          <Link href='/'>
            <h1 className='text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-primary via-amber-500 to-yellow-600'>YSA</h1>
          </Link>
        </div>

        <div className='md:flex items-center space-x-4 hidden'>
          <a href='#home' className='text-lg text-amber-500 hover:underline hover:transition-all'>Home</a>
          <a href='#about' className='text-lg text-amber-500 hover:underline hover:transition-all'>About</a>
          <a href='#vision' className='text-lg text-amber-500 hover:underline hover:transition-all'>Vision</a>
        </div>

        <div className='md:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <LucideMenu className='w-8 h-8 -mt-3' />
                </SheetTrigger>
                <SheetContent>
                    <div className='flex flex-col space-y-4'>
                        <SheetClose asChild>
                            <Link href={'/'} className='text-lg text-amber-500 hover:underline hover:transition-all'>Home</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={'#about'} className='text-lg text-amber-500 hover:underline hover:transition-all'>About</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={'#vision'} className='text-lg text-amber-500 hover:underline hover:transition-all'>Vision</Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </MaxWrapper>
    </nav>
  )
}

export default Navbar
