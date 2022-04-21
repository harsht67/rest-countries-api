// styles
import './Filter.scss'

// icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { useState } from 'react'

const regions = [
    'africa',
    'america',
    'asia',
    'europe',
    'oceania',
]

function Filter() {

    const [region, setRegion] = useState('Filter by Region')

    const [dropdown, setDropdown] = useState(false)

    // changes selected region
    const changeRegion = (e) => {
        const newRegion = e.target.getAttribute('data-val')

        setRegion(newRegion)

        toggleDropdown()
    }

    // opens/closes dropdown
    const toggleDropdown = () => {
        setDropdown(prev => !prev)
    }

    return(
        <article className="filter">

            <div 
                className="filter__btn"
                onClick={toggleDropdown}
            >

                <span>
                    {region}
                </span>

                <KeyboardArrowDownIcon classNAme="icon" />

            </div>

            { dropdown &&
                <ul className='filter__data'>
                
                    { regions.map(region => (
                        <li
                            className='filter__item'
                            data-val={region}
                            onClick={changeRegion}
                        >
                            {region}
                        </li>)
                    )}
                
                </ul>
            }

        </article>
    )
}

export default Filter