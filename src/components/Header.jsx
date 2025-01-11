
import {useState} from 'react'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () =>{

   const [btnLogin, setBtnLogin] = useState('Login')
   const isOnline = useOnlineStatus();
    return (
        <>
          <div className="header">
               <div>Logo</div>
               <div className="links">
                   <ul>
                        <li>OnlineStatus:{isOnline ?<img src="../utils/assets/online.png" className='statusIcon' />:<img src="../utils/assets/offline.png"className="statusIcon" />}</li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/Project'>Project</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                   </ul>
               </div>
          </div>
          <button onClick={()=>btnLogin === 'Login'?setBtnLogin('Logout'):setBtnLogin('Login')}>{btnLogin}</button>
        </>
    )
}

export default Header;