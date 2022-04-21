// styles
import './Flag.scss'

import { useHistory } from 'react-router' 

function Flag(props) {

    const history = useHistory()

    const goToFunc = () => {
        history.push('/'+name.common)
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
                        Populution:
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