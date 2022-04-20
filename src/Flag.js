// styles
import './Flag.scss'

function Flag(props) {
    
    const { name, population, region, capital } = props.data

    return(
        <article className="flag">

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