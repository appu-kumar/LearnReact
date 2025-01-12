
import {useState} from 'react'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () =>{

   const [btnLogin, setBtnLogin] = useState('Login')
   const isOnline = useOnlineStatus();
    return (
        <>
          <div className="flex justify-between items-center bg-gray-200 h-[120px] shadow-xl">
               <div className="p-10">Logo</div>
               <div className="flex justify-between items-center">OnlineStatus:{isOnline ?<img src="../utils/assets/online.png" className='w-5 h-[30px] mx-4' />:<img src="../utils/assets/offline.png"className="w-5 h-[30px] mx-4" />}</div>
               <div className="links">
                   <ul className="flex justify-between items-center list-none">
                        <li className="mx-10 cursor-pointer"><Link to='/'>Home</Link></li>
                        <li className="mx-10 cursor-pointer"><Link to='/about'>About</Link></li>
                        <li className="mx-10 cursor-pointer"><Link to='/Contact'>Contact</Link></li>
                        <li className="mx-10 cursor-pointer"><Link to='/Project'>Project</Link></li>
                        <li className="mx-10 cursor-pointer"><Link to="/grocery">Grocery</Link></li>
                   </ul>
               </div>
          </div>
          <button onClick={()=>btnLogin === 'Login'?setBtnLogin('Logout'):setBtnLogin('Login')}>{btnLogin}</button>
        </>
    )
}

export default Header;