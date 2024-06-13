import { AvatarImage } from '../atoms/Image'
import { Button } from '../atoms/Button'
import './UserInfo.css'

const avatarAimage = 'https://i.ibb.co/kGYgRZ8/programador.png'

export const UserInfo = () => {
    return (
        <>
            <div className='imgContainer'>
                <AvatarImage image={avatarAimage} />
            </div>
            <div>
                <Button />
            </div>
        </>
    )
}
