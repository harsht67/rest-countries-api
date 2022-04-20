// styles
import './CountryPage.scss'

// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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

    const { flags, nativeName, population, region, capital, topLevelDomain, currencies, languages, borders } = country
    
    return(
        <div className="countryPage">
                
            { country &&
                <>

                    <button
                        className="countryPage__backBtn"
                    >

                        <ArrowBackIcon/> back
                    
                    </button>

                    <img
                        className="countryPage__img"
                        src={flags.svg}
                        alt='country flag'
                    />

                    <section className="countryPage__desc">

                        <h3 classNAme="desc__title">
                            {name}
                        </h3>

                        <hr/>

                        <p>
                        
                            <span className="imp">
                                native name:
                            </span>
                            
                            {nativeName}
                        
                        </p>

                        <p>
                            <span className="imp">
                                population:
                            </span>
                            
                            {population.toLocaleString()}
        
                        </p>

                        <p>
                        
                            <span className="imp">
                                region:
                            </span> 
                        
                            {region}
                        
                        </p>
                        
                        <p>
                            <span className="imp">
                                sub-region:
                            </span> 
                        </p>
                        
                        <p>
                        
                            <span className="imp">
                                capital:
                            </span>
                        
                            {capital}
                        
                        </p>

                        <hr/>

                        <p>
                            
                            <span className="imp">
                                top level domain:
                            </span>
                            
                            {topLevelDomain}
                        
                        </p>

                        <p>
                            
                            <span className="imp">
                                currencies:
                            </span>
                            
                            {currencies.map(currency => <span>{currency.name}</span>)}
                        
                        </p>

                        <p className="desc__language" >

                            <span className="imp">
                                launguages:
                            </span>
                            
                            {languages.map(language => <span>{language.name}</span>)}
                        
                        </p>

                        <hr/>

                        <div className="desc__border">

                            <h3 className="desc__subTitle">
                                border countries: 
                            </h3>

                            { borders.map(border => (
                                <div
                                    className="border__box"
                                >
                                    {border}
                                </div>)) 
                            }

                        </div>

                    </section>
                
                </>
            
            }   

        </div>
    )
}

export default CountryPage