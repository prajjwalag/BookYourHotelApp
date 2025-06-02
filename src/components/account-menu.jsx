import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LinkWithIcon from "./ui/links";
import PATHS from "@/config/path.config";
import { Button } from "./ui/button";
import Icon from "./ui/icon";
import useLogoutHandler from "@/app/auth/hooks/use-logout";

const AccountMenu = ({user}) => {

    const {logoutHandler, pending} = useLogoutHandler();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar>
                <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name}&background=4287f5&color=fff`} alt={user.name}/>
                <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[230px] py-3 px-2 border-border">
            <DropdownMenuLabel>
                <div className="flex items-center gap-2 px-1">
                    <Avatar>
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name}&background=4287f5&color=fff`} alt={user.name}/>
                        <AvatarFallback>{user.name}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 flex-1">
                        <h4 className="text-sm font-medium max-w-[150px] truncate">
                            {user.name}
                        </h4>
                        <p className="max-w-[150px] truncate text-muted-foreground text-xs">
                            {user.email}
                        </p>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-3"/>
            <DropdownMenuItem>
                <LinkWithIcon to={PATHS.PROFILE} icon="user" variant="ghost"  className="w-full flex justify-start">
                    Profile
                </LinkWithIcon>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <LinkWithIcon to={PATHS.BOOKING_HISTORY} icon="bookingHistory" variant="ghost"  className="w-full flex justify-start">
                    Booking History
                </LinkWithIcon>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Button onClick={logoutHandler} asChild variant="ghost" className="w-full flex justify-start" disabled={pending}>
                    <div className="flex items-center justify-start gap-2">
                        <Icon icon="logout" size={20} />
                        <span>Logout</span>
                    </div>
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
</DropdownMenu>
  )
}

export default AccountMenu
