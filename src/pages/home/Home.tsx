import { NavBar } from "../../components/navBar/NavBar"
import { Header } from "./page-sections/Header"
import { Main } from "./page-sections/Main"

export const Home = () => {
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
