// styles
import './Home.scss'

// components
import Header from "./Header"
import Search from './Search'
import Filter from './Filter'
import Flag from './Flag'

import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {

    const [flags, setFlags] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            const res = await axios.get('https://restcountries.com/v2/regionalbloc/eu')
            setFlags(Object.values(res.data))
        }

        fetchData()

    }, [])

    return (
        <div className="home">
        
            <Header/>

            <section className="home__main">

                <section className="main__header">
                    
                    <Search/>

                    <Filter/>

                </section>

                <section className="main__content">

                    { flags && flags.map(flag => <Flag data={flag} />) }

                </section>


            </section>
        
        </div>
    )
}

export default Home