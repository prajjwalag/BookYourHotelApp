
import { getAssetPath } from '@/lib/utils'
import React from 'react'

const AuthLayout = ({children, title, description}) => {
  return (
    <div className='w-full h-[calc(100vh-140px)] flex items-center jutify-center'>
        <div className='w-full md:max-w-md sm:mx-auto rounded-lg shadow-md p-4 sm:p-6'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <div className='p-3 rounded-lg shadow'>
                    <img width={30} height={30} src={getAssetPath('bookingcom-icon-logo.svg')} alt="" />
                </div>
                <h1 className='text-xl font-semibold text-center'>{title}</h1>
                <p className='text-sm text-center'>{description}</p>
                {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout
