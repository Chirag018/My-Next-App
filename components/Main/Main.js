import Categories from './Categories'
import CreateSell from './CreateSell.js'
import Help from './Help'
import NotableDrops from './NotableDrops'
import Resource from './Resource'
import Sponsors from './Sponsors'
import Trending from './Trending'

const Main = () => {
    return (
        <div className='bg-gradient-to-b from-white to-blue-100 mt-10 '>
            <CreateSell />
            <NotableDrops />
            <Sponsors />
            <Trending />
            <Categories />
            <Help />
            <Resource />
        </div>
    )
}

export default Main