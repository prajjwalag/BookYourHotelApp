import React from 'react'
import { Button } from '../ui/button'
import { SERVICE_LIST } from '@/config/app.config'
import Icon from '../ui/icon';
import { Link } from 'react-router';
import PATHS from '@/config/path.config';
import { useAuthContext } from '@/lib/providers/auth-context-provider';
import AccountMenu from '../account-menu';

const Header = () => {

  const { authenticatedUser } = useAuthContext(); 

  return (
    <header className='bg-brand py-2'>
      <div className='container flex justify-between items-center'>
        <div id='log-wrapper'>
          <Link to="/" aria-label='Go to Booking.com'>
            <img width={144} height={24} src="/assets/booking.com.svg" alt="Logo for Booking.com" />
          </Link>
        </div>
        <div id='auth' className='flex gap-2 justify-center items-center'>
          {authenticatedUser.user ? (
            <AccountMenu user={authenticatedUser.user}/>
          ): (
            <>
              <Button className="bg-white cursor-pointer border-primary text-primary rounded-sm hover:bg-white/95" asChild>
                <Link to={PATHS.SIGNUP}>
                  Register
                </Link>
              </Button>
              <Button asChild>
                <Link to={PATHS.SINGIN}>Login</Link>
              </Button>
            </>
          )}
          
        </div>
      </div>
      <div className='container flex gap-1 overflow-x-auto scrollbar'>
        {SERVICE_LIST.map(item => (
            <Button key={item.id} className={`bg-transparent shadow-none font-normal rounded-full hover:bg-white/10
            cursor-pointer flex items-center justify-between gap-2 px-6 h-11 ${item.active &&  'border border-white bg-white/10'}`}>
              <Icon icon={item.icon} />
              {item.title}
            </Button>
          ))}
      </div>
    </header>
  );
};

export default Header;
