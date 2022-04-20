// styles

import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CountryPage() {
    
    const { name } = useParams()

    const [country, setCountry] = useState('')

    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get('https://restcountries.com/v2/name/'+name)
            setCountry(Object.values(res.data)[0])
        }

        fetchData()

    }, [])

    return(
        <div className="countryPage">
            
            {country && country.name}
        
        </div>
    )
}

export default CountryPage