import { useState } from 'react'
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import iconClose from './images/icon-close.svg'


function Nav() {
    const [isOpen, setIsOpen] = useState(false)

const toggleMenu = ()=>{
    setIsOpen(!isOpen)
}

  return (
    <div>
        <header>
            <nav>
                <div className='nav-list-desktop'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <ul>
                            <li>Product</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li className='period'>.</li>
                            <li className='login'>Login</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mobile-menu">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <div>
                        <img
                        onClick={toggleMenu}
                         src={hamburger} 
                         alt="hamburger-menu" />
                    </div>
                </div>
            </div>
        </header>
        <div className="nav-list-mobile">
            <ul>
                <li>Product</li>
                <li>features</li>
                <li>Pricing</li>
                <li className='login'>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav