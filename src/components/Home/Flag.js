// styles
import './Flag.scss'

import { useNavigate } from 'react-router' 

function Flag(props) {

    const navigate = useNavigate()

    const goToFunc = () => {
        navigate('/name/'+name.common)
    }

    const { flags, name, population, region, capital } = props.data

    return(
        <article 
            className="flag"
            onClick={goToFunc}
        >

            <img
                className="flag__img"
                src={flags.svg}
                alt='country flag'
            />

            <section className="flag__desc">

                <h3 className="flag__title">
                    {name.common}
                </h3>   

                <p>
                    <span className="imp">
                        Population:
                    </span>
                    
                    {population.toLocaleString()}
                
                </p>   

                <p>

                    <span className="imp">
                        Region:
                    </span>
                    
                    {region}
                
                </p>   
                
                <p>

                    <span className="imp">
                        Capital:
                    </span>

                    {capital}

                </p>   

            </section>

        </article>
    )
}

export default Flag