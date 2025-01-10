
import {useState} from 'react'
import { Link } from 'react-router'
const Header = () =>{

   const [btnLogin, setBtnLogin] = useState('Login')
    return (
        <>
          <div className="header">
               <div>Logo</div>
               <div className="links">
                   <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/Project'>Project</Link></li>
                   </ul>
               </div>
          </div>
          <button onClick={()=>btnLogin === 'Login'?setBtnLogin('Logout'):setBtnLogin('Login')}>{btnLogin}</button>
        </>
    )
}

export default Header;