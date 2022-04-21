// styles
import './Search.scss'

// icons
import SearchIcon from '@mui/icons-material/Search'

function Search() {
    return(
        <article className="search">

            <SearchIcon className="icon" />

            <input
                type='text'
                placeholder='Search for a country...'
            />

        </article>
    )
}

export default Search