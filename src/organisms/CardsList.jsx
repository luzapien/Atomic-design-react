import { Card } from '../molecules/Card'
import './CardsList.css'

const images = [
    {
        id: '6',
        name: 'pic1',
        url: 'https://images.pexels.com/photos/23996584/pexels-photo-23996584/free-photo-of-edificio-pared-muro-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: '7',
        name: 'pic1',
        url: 'https://images.pexels.com/photos/23996584/pexels-photo-23996584/free-photo-of-edificio-pared-muro-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: '8',
        name: 'pic1',
        url: 'https://images.pexels.com/photos/23996584/pexels-photo-23996584/free-photo-of-edificio-pared-muro-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: '9',
        name: 'pic1',
        url: 'https://images.pexels.com/photos/23996584/pexels-photo-23996584/free-photo-of-edificio-pared-muro-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]

export const CardsList = () => {
    return (
        <div className='cards-container'>
            {images.map((image) => (
                <div key={image.id} className='card-wrapper'>
                    <Card image={image.url} name={image.name} />
                </div>
            ))}
        </div>
    )
}
