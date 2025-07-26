import { cn } from "../lib/utils"

const navItems = [
    {name : "Home", href :"#hero"},
    {name : "About", href :"#about"},
    {name : "Skills", href :"#skills"},
    {name : "Projects", href :"#projects"},
    {name : "Contact", href :"#contact"}
]
const Navbar = () => {
    return(
        <nav className={cn("fixed w-full z-10 transition-all duration-300",)}>

        </nav>
    )
}
export default Navbar;