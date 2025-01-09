
import {useState} from 'react'

const Header = () =>{

   const [btnLogin, setBtnLogin] = useState('Login')
    return (
        <>
          <button onClick={()=>btnLogin === 'Login'?setBtnLogin('Logout'):setBtnLogin('Login')}>{btnLogin}</button>
        </>
    )
}

export default Header;