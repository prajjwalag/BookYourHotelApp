import React from 'react'
import {useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form';
import LocationInput from './LocationInput';
import OccupancyInput from './OccupancyInput';
import { Button } from '@/components/ui/button';
import DateSelectInput from './DateSelectInput';
import dayjs from 'dayjs';

const Search = () => {

    const form = useForm({
      defaultValues:{
        city: ''
      }});

    function onSubmit(data) {

      console.log('Search data', data);
    }

  return (
    <section className='container'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-1 p-1 bg-yellow-500 lg:flex-row lg:items-center rounded h-14'>
                <LocationInput form={form}/>
                <DateSelectInput form={form}/>
                <OccupancyInput form={form}/>
                <Button type="submit" className="text-lg h-full">Search</Button>
            </form>
        </Form>
    </section>
  );
};

export default Search;
