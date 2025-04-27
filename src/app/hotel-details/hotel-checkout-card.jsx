import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Icon from '@/components/ui/icon';
import React from 'react'

const CancellationPolicy = ({cancellationPolicy}) => {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger >
        <div className="flex gap-1 text-rose-600 items-center">
          <Icon icon='info' size='16'/>
          <span>Cancellation Policy</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align='center' side='left' className='w-[350px] space-y-3 border-border '>
        <h3 className='text-base font-semibold'>Cancellation Policy</h3>
        <ul className='pl-4 space-y-3 list-disc'>
          {cancellationPolicy.map((policy, index) => (
            <li key={index}>{policy}</li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  )

}

const HotelCheckoutCard = ({rooms, cancellationPolicy}) => {

  const selectedRoom = rooms.find(room => room.isSelected);

  return (
    <div className='space-y-6'>
      <div className='flex-1 flex gap-2 items-center'>
        <span className='text-2xl font-bold '>&#8377; {`${selectedRoom.price.toLocaleString()} `}</span>
        <span className='text-base text-muted-foreground line-through'>&#8377; {`${(selectedRoom.price*1.5).toLocaleString()} `}</span>
      </div>
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <span className='text-sm'>Your savings</span>
          <span className='text-sm font-bold'> &#8377; {`${selectedRoom.price*0.5.toLocaleString()}`}</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-md'>Total Price</span>
          <span className='text-md font-bold'> &#8377; {`${selectedRoom.price.toLocaleString()}`}</span>
        </div>
      </div>
      <Button className='w-full h-12 text-base font-semibold bg-brand' aria-label='Continue to Book Button'>Continue to Book</Button>

      <div className='flex gap-1'>
        <Icon icon='zap' size='16' className='mt-[3px] shrink-0 fill-rose-600 stroke-transparent' />
        <p className='text-sm font-medium text-rose-600'>1k+ people booked this hotel in last 6 months</p>
      </div>

      <CancellationPolicy cancellationPolicy={cancellationPolicy}/>
    </div>
  )
}

export default HotelCheckoutCard
