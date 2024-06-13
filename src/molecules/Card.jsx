import { Button } from '../atoms/Button'
import { AvatarImage } from '../atoms/Image'
import { Title } from '../atoms/Title'
import './Card.css'

export const Card = ({ image, name }) => {
    return (
        <div className="card">
            <div>
                <AvatarImage image={image} />
            </div>
            <div className="card-title">
                <Title title={name} />
            </div>
            <Button />
        </div>
    )
}
