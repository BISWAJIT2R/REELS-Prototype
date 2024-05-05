import Links from '../ui/Protfolio/Links';
import {projectArr} from '../utils/index';

function Protfolio() {
  return (
    <div className='h-full w-full bg-red-400 xl:px-12'>
    <ul className=' list-none flex flex-col gap-5'>
        {
          projectArr.map(({name, hoverImg}, i) => <li key={i}>
             <Links img={hoverImg} name={name}/>
          </li> )
        }
       </ul>
    </div>
  )
}

export default Protfolio;