import { NavBarItems } from '../molecules/NavbBarItems'
import { UserInfo } from '../molecules/UserInfo'
import { Title } from '../atoms/Title'

import './Header.css'

export const Header = () => {
    return (
        <div className='Header'>
            <div>
                <NavBarItems />
            </div>
            <div>
                <Title title='Header' />
            </div>
            <div>
                <UserInfo />
            </div>
        </div>
    )
}
