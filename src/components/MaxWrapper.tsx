import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWrapper = ({ children, className}: { children: ReactNode, className?: string}) => {
  return (
    <div className={cn('flex flex-col space-y-3 py-6 px-4 sm:px-6 md:px-8 lg:px-10 mx-auto w-full max-w-7xl', className)}>
      {children}
    </div>
  )
}

export default MaxWrapper
