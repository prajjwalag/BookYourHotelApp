import React from 'react'
import HotelCardSkeleton from './components/hotel-card-skeleton';
import HotelCard from './components/hotel-card';

const Hotels = ({isLoading, data, error}) => {
 if(isLoading) return (
    <div className="space-y-4">
      <HotelCardSkeleton />
      <HotelCardSkeleton />
    </div>
  );

  if (data.length === 0) {
    return (
      <div className="text-gray-500">
        No hotels found.
      </div>
    );
  }


  return (
    <div className="space-y-4">
      {data.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}


export default Hotels
