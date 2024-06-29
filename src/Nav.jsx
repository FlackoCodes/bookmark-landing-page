import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'


function Nav() {
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
                        <img src={hamburger} alt="hamburger-menu" />
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