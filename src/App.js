// styles
import './App.scss'

// components
import Header from "./Header"
import Home from './Home'
import CountryPage from './CountryPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">

      <Router>

        <Header/>

        <Switch>

          <Route exact path='/' component={Home} />

          <Route exact path='/:name' component={CountryPage} />

        </Switch>

      </Router>

    </div>
  )
}

export default App
