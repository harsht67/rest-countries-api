// styles
import './Home.scss'

// components
import Header from "./Header"
import Search from './Search'
import Filter from './Filter'

function Home() {
    return (
        <div className="home">
        
            <Header/>

            <section className="home__main">

                <section className="main__header">
                    
                    <Search/>

                    <Filter/>

                </section>

                <section className="main__content">

                    flags

                </section>


            </section>
        
        </div>
    )
}

export default Home