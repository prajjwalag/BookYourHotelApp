import React from 'react'
import Filter from './filter'
import SortFilter from './filter/components/sort-filter'
import Hotels from './hotels'
import PaginationFilter from './filter/components/pagination-filter'
import useQuery from '@/lib/hooks/useQuery'
import API_CONFIG from '@/config/api.config'

const SearchPage = () => {

  const {data, isLoading, error} = useQuery({
    url: API_CONFIG.HOTEL.BROWSE_HOTELS,
    options: { 
      params: {
        city: 'Delhi',
        startDate: '2025-06-11',
        endDate: '2025-06-15',
        roomsCount: 2,
        page: 0,
        size: 4,
      }
     
    }
  });
  const hotels = data?.content || [];

  return (
    <div className='container flex gap-4 mt-6 mb-12'>
      <Filter/>
      <section className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'> 
          <h1 className='text-xl font-bold'>Delhi: 354 properties found</h1>
          <SortFilter/>
        </div>
        <Hotels isLoading={isLoading} data={hotels} error={error}/>
       {hotels.length > 0 && <PaginationFilter /> } 
      </section>
    </div>
  );
};

export default SearchPage
