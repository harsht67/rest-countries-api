// styles
import './App.scss'

// components
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import CountryPage from './components/CountryPage/CountryPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import themes from './themes'
import { GlobalStyle } from './styles'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => {
      return prev=='dark' ? 'light' : 'dark'
    })
  }

  return (
    <div className="app">
      <ThemeProvider theme={themes[theme]}>

        <GlobalStyle/>

        <Router>

          <Header
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <Switch>

            <Route exact path='/' component={Home} />

            <Route exact path='/:dir/:name' component={CountryPage} />

          </Switch>

        </Router>

      </ThemeProvider>

    </div>
  )
}

export default App
