import { Link } from "react-router"
import { Button } from "./button"
import Icon from "./icon"


const LinkWithIcon = ({to, icon, variant, className,  children, ...props}) => {
  return (
    <Button asChild variant={variant} className={className} {...props}>
        <Link to={to} className="flex items-center justify-start gap-2">
            <Icon icon={icon} size={20}/>
            {children}
        </Link>
    </Button>
  )
}

export default LinkWithIcon
