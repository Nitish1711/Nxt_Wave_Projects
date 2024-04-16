import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import LanguageContext from './context/LanguageContext'
import {useState} from 'react'

const App = () => {
  const [activeLanguage, setLanguage] = useState('EN')
  const changeLanguage = activeLanguage => {
    setLanguage(activeLanguage)
  }
  return (
    <LanguageContext.Provider
      value={{activeLanguage, changeLanguage: changeLanguage}}
    >
      <Header />
      <LandingSection />
      <FeaturesSection />
    </LanguageContext.Provider>
  )
}

export default App
