// styles
import './App.scss'

// components
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import CountryPage from './components/CountryPage/CountryPage'

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
