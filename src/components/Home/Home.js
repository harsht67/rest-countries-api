// styles
import './Home.scss'

// components
import Search from './Search'
import Filter from './Filter'
import Flag from './Flag'

import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {

    const [flags, setFlags] = useState([])

    const [region, setRegion] = useState('Filter by Region')

    // fetch flags data
    const fetchData = async (region="all") => {
        let suffix = region=="all" ? "all" : "region/"+region

        const res = await axios.get('https://restcountries.com/v3.1/'+suffix)
        setFlags(Object.values(res.data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    // changes current selected region
    const changeRegion = (newRegion) => {
        setRegion(newRegion)

        fetchData(newRegion)
    }

    return (
        <div className="home">
    
            <section className="home__header">
                
                <Search/>

                <Filter
                    region={region}
                    changeRegion={changeRegion}
                />

            </section>

            <section className="home__content">

                { flags && flags.map(flag => <Flag data={flag} />) }

            </section>
        
        </div>
    )
}

export default Home