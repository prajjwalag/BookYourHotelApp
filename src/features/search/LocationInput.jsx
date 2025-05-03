import { Button } from '@/components/ui/button'
import { FormControl, FormField } from '@/components/ui/form'
import Icon from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { DESTINATIONS } from '@/config/app.config'
import React from 'react'

const LocationInput = ({form}) => {
  
  const city = form.watch('city');
  const [isPopoverOpen, setPopoverOpen] = React.useState(false);

  function citySelectHandler(e, index) {
    e.preventDefault();
    const selectedCity = DESTINATIONS[index].city;
    form.setValue('city', selectedCity);
    setPopoverOpen(false);
  }

  return (
   <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
    <PopoverTrigger asChild>
      <div className='flex gap-2 items-center px-4 py-2 rounded bg-background lg:min-w-[360px]'>
        <Icon icon="bed" size='24'className='text-muted-foreground shrink-0' />
        <FormField control={form.control} name='city' render={({field}) => 
          <FormControl>
            <Input {...field} className='w-full h-full px-2 text-sm border-0 focus-visible:ring-transparent focus-visible:ring-offset-transaparent placeholder:font-normal placeholder:text-foreground focus:placeholder-muted-foreground'
            placeholder='Where are you going?' {...field} />
          </FormControl>
        }/>
        <div role='button' className={city ? '':'opacity-0'} onClick={(e) =>{
          e.preventDefault();
          form.setValue('city', '');
        }} 
        aria-label='Clean the City Input'>
        <Icon icon='close' size='18' className='text-muted-foreground shrink-0' />
      </div>
      </div>
      
    </PopoverTrigger>
    <PopoverContent sideOffset='1' align='start' className='w-[360px]' onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className='p-3'>
          <p className='text-sm font-semibold'>Popular destinations nearby</p>
        </div>
        <div className='max-h-[300px] overflow-y-auto'>
          {DESTINATIONS.map((destination, index) => (
            <div key={index} className='flex items-center gap-3 px-3 py-2 hover:bg-accent cursor-pointer transition-colors duration-200 border-b border-border'
            onClick={(e) => citySelectHandler(e, index)}>
              <Icon icon="location"/>
              <div>
                 <p className='text-sm font-semibold'>{destination.city}</p>
                 <p className='text-sm text-muted-foreground'>{destination.country}</p>
              </div>
            </div>
          ))}
        </div>
    </PopoverContent>
   </Popover>
  )
}

export default LocationInput
