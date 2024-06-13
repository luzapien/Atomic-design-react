import { Header } from '../organisms/Header'
import { CardsList } from '../organisms/CardsList'

export const HomeTemplate = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <CardsList />
            </div>
        </>
    )
}
