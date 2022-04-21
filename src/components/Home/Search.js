// styles
import './Search.scss'

// icons
import SearchIcon from '@mui/icons-material/Search'

function Search(props) {

    const changeHandler = (e) => {
        const {value} = e.target 
        props.updateSearch(value)
    }

    return(
        <article className="search">

            <SearchIcon className="icon" />

            <input
                value={props.search}
                type='text'
                placeholder='Search for a country...'
                onChange={changeHandler}
            />

        </article>
    )
}

export default Search