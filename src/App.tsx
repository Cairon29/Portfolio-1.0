import { NavBar } from './components/navBar/NavBar'
import { Home } from './pages/home/Home'

function App() {

  return (
    <>
      <NavBar/>
      <div id='app-container'>
        <Home/>
      </div>
    </>
  )
}

export default App
