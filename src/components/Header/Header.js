// sytles
import './Header.scss'

// icons
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { useNavigate } from 'react-router'

function Header(props) {

    const navigate = useNavigate()

    const toggleTheme = () => {
        props.toggleTheme()
    }

    const goToFunc = () => {
        navigate('/')
    }

    return (
        <div className='header'>
            
            <h1 
                className='header__title'
                onClick={goToFunc}
            >

                Where in the world?
            
            </h1>

            <div 
                className='header__btn'
                onClick={toggleTheme}
            >

                {props.theme == 'light'
                    ? <>
                        <DarkModeIcon className="icon" />
                        dark mode
                    </>
                    : <>
                        <LightModeIcon className="icon" />
                        light mode
                    </>
                }

            </div>
    
        </div>
    )
}

export default Header