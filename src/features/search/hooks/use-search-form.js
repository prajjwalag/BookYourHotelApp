
import {useForm } from 'react-hook-form'
import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchFormSchema } from '@/lib/validators/search-form-validator';
import { useNavigate, useSearchParams } from 'react-router';

export default function useSearchForm() {


  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

 const form = useForm({
      resolver: zodResolver(searchFormSchema),
      defaultValues:{
        city: '',
        roomsCount: 1,
        bookingDates: {
          from: dayjs().toDate(),
          to: dayjs().add(1, 'day').toDate()
        },
        
      }});

    function searchSubmitHandler(data) {
      const sendData = {
        city: data.city,
        roomsCount: data.roomsCount,
        startDate: dayjs(data.bookingDates.from).format('YYYY-MM-DD'),
        endDate: dayjs(data.bookingDates.to).format('YYYY-MM-DD'),
      }
      console.log('Search data', sendData);
      const params = new URLSearchParams(sendData);
      navigate(`/search?${params.toString()}`);
    }

    return {
      form,
      searchSubmitHandler
    };
}