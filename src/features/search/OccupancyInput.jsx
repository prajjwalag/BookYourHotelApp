import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import Icon from '@/components/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'

const OccupancyInput = ({form}) => {
  const rooms = form.watch('roomsCount');
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div role='button' className='h-full px-4 py-2 rounded bg-background border-border min-w-60 flex-auto flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Icon icon='user' size='24' className='text-muted-foreground shrink-0'/>
            <p className='text-sm'>{rooms} rooms</p>
          </div>
          <Icon icon='dropdown' size='18' className='text-muted-foreground shrink-0'/>
        </div>
      </PopoverTrigger>
      <PopoverContent sideOffset='1' align='start' className='p-4 w-80'>
        <FormField control={form.control} name="roomsCount" render={({field}) => (
          <div>
            <FormItem className='flex items-center justify-between'>
              <FormLabel>
                Rooms
              </FormLabel>
              <FormControl>
                <div className='border rounded border-foreground/50 flex items-center'>
                  <Button variant='ghost' size='icon' className='size-10 text-primary hover:text-primary focus-visible:ring-transparent focus-visible:ring-offset-transaparent' onClick={(e) => {
                    e.preventDefault();
                    if(field.value > 1)
                      field.onChange(field.value-1);
                  }}>
                    <Icon icon='minus'/>
                  </Button>
                  <span>{field.value}</span>
                  <Button variant='ghost' size='icon' className='size-10 text-primary hover:text-primary focus-visible:ring-transparent focus-visible:ring-offset-transaparent' onClick={(e) => {
                    e.preventDefault();
                    if(field.value < 10 )
                      field.onChange(field.value+1);
                  }}>
                    <Icon icon='plus'/>
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          </div>
        )}/>
      </PopoverContent>
    </Popover>
  )
}

export default OccupancyInput
