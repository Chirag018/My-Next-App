import sponsors from '../../public/assets/sponsors.png'
import Image from 'next/image'

function Sponsors() {
  return (
    <div className='sponsor m-14 -mt-10'>
        <Image src={sponsors} alt='sponsors' />
    </div>
  )
}

export default Sponsors