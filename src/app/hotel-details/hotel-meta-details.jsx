import Icon from '@/components/ui/icon'
import React from 'react'

const HotelMetaDetails = ({hotel}) => {
  return (
    <section className='space-y-4'>
      <div className='flex'>
        <div className='flex-1 space-y-1'>
          <h1 className='text-2xl font-bold'>{hotel.name}</h1>
          <p className='text-muted-foreground'>{`${hotel.contactInfo.address}, ${hotel.city}`}</p>

        </div>
        <div>
          <div className='flex gap-2 items-center justify-center bg-brand px-2 py-1 rounded-t-sm text-white'> 
            <span className='text-base font-bold'>4.8</span>
            <Icon size='15' className="fill-white" icon="star"/>
          </div>
          <div className='bg-secondary rounded-b-sm px-2 py-1 flex items-center justify-center'>
            <span className='text-xs text-gray-500'>663 Ratings</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotelMetaDetails
