import HotelCheckoutCard from "./hotel-checkout-card"
import { HOTEL_DATA, HOTEL_INFO } from "./hotel-details-dummy-data"
import HotelMetaDetails from "./hotel-meta-details"
import HotelPolicy from "./hotel-policy"
import HotelRoomPicker from "./hotel-room-picker"
import PropertyViewCarousel from "./property-view-carousel"


const HotelDetails = () => {

  const hotelData = HOTEL_DATA;
  const hotelInfo = HOTEL_INFO;

  return (
    <div className="container mt-6 mb-12">
      <PropertyViewCarousel images={hotelData.hotel.photos}/>
      <div className="flex gap-6 mt-6">
        <div className="flex-1 space-y-8">
          <HotelMetaDetails hotel={hotelData.hotel}/>
          <HotelRoomPicker/>
          <HotelPolicy/>
        </div>
        <aside className="w-[340px] shrink-0 p-4 border border-border shadow-md roundex-xl">
          <HotelCheckoutCard/>
        </aside>
        
      </div>
    </div>
  )
}

export default HotelDetails
