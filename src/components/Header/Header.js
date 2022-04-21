// sytles
import './Header.scss'

// icons
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function Header() {
    return (
        <div className='header'>
            
            <h1 className='header__title'>

                Where in the world?
            
            </h1>

            <div className='header__btn'>

                <DarkModeIcon className="icon"/>
                
                dark mode

            </div>
    
        </div>
    )
}

export default Header