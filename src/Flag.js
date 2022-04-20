// styles
import './Flag.scss'

import { useHistory } from 'react-router' 

function Flag(props) {

    const history = useHistory()

    const goToFunc = () => {
        history.push('/'+name)
    }

    const { name, population, region, capital } = props.data

    return(
        <article 
            className="flag"
            onClick={goToFunc}
        >

            <h3>
                {name}
            </h3>   

            <p>
                Popolution: {population.toLocaleString()}
            </p>   

            <p>
                Region: {region}
            </p>   
            
            <p>
                Capital: {capital}
            </p>   

        </article>
    )
}

export default Flag