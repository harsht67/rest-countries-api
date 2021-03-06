// styles
import './Home.scss'

// components
import Search from './Search'
import Filter from './Filter'
import Flag from './Flag'

import { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingSpinner from '../Global/LoadingSpinner'

function Home() {

    const [flags, setFlags] = useState(null)

    const [region, setRegion] = useState('Filter by Region')

    const [search, setSearch] = useState('')

    // fetch flags data
    const fetchData = async (region="all") => {
        let suffix = region=="all" ? "all" : "region/"+region

        const res = await axios.get('https://restcountries.com/v3.1/'+suffix)
        setFlags(Object.values(res.data))
    }

    // fetch flags data on initial load
    useEffect(() => {
        fetchData()
    }, [])

    // changes current selected region
    const changeRegion = (newRegion) => {
        setRegion(newRegion)

        fetchData(newRegion)
    }

    // updates search field
    const updateSearch = (newValue) => {
        setSearch(newValue)
    }

    return (
        <div className="home">
    
            <section className="home__header">
                
                <Search
                    search={search}
                    updateSearch={updateSearch}
                />

                <Filter
                    region={region}
                    changeRegion={changeRegion}
                />

            </section>

            {!flags 
                ? <LoadingSpinner/>  
                : <section className="home__content">

                    {flags.map(flag => {
                        let name = flag.name.common.toLowerCase()
                        let f = name.includes(search.toLowerCase()) ? true : false
                        return f ? <Flag data={flag} /> : <></>
                    })}

                </section>
            }

            
        
        </div>
    )
}

export default Home