import { ListNavbar } from '../atoms/List.jsx'
import './NavbarItems.css'

const menuItems = [
    { id: '1', name: 'Home' },
    { id: '2', name: 'About' },
    { id: '3', name: 'Newa' },
    { id: '4', name: 'Contact' },
]

export const NavBarItems = () => {
    return (
        <ul className='listContainer'>
            {menuItems.map((item) => (
                <ListNavbar key={item.id} itemMenu={item.name} />
            ))}
        </ul>
    )
}
