'use client'

import React, { ReactNode } from 'react'
import { Toaster } from './ui/sonner'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <>
        {
            children
        }
      </>
    </>
  )
}

export default Providers
