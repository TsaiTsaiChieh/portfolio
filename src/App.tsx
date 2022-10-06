import './App.css'

import {useState} from 'react'

import Launch from './components/Launch'
import {Banner, Experience, Navbar, Skills} from './page'

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    loading ? (<Launch loading={loading} setLoading={setLoading} />) : (<>
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
    </>)
  )
}

export default App
