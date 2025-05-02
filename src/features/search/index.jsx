import React from 'react'
import { Form, useForm } from 'react-hook-form'
import LocationInput from './LocationInput';
import OccupancyInput from './OccupancyInput';
import { Button } from '@/components/ui/button';
import DateSelectInput from './DateSelectInput';

const Search = () => {

    const form = useForm();

    function onSubmit(data) {
        console.log("Search Data: ", data);
    }

  return (
    <section className='container'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-1 p-1 bg-yellow-500 lg:flex-row lg:items-center rounded h-14'>
                <LocationInput form={form}/>
                <DateSelectInput form={form}/>
                <OccupancyInput form={form}/>
                <Button type="submit" className="text-lg h-full">Searchs</Button>
            </form>
            </Form>
    </section>
  )
}

export default Search
