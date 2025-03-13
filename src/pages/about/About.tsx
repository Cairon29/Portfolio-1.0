import { Main } from './page-sections/Main'
import { Header } from './page-sections/Header'
import { NavBar } from '../../components/navBar/NavBar'
import './about-styles.css'


export const About = () => {
  return (
    <>
        <NavBar/>
        <div id='app-container'>
            <Header/>
            <Main/>
        </div>
    </>
  )
}
