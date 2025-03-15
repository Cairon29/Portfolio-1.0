import { BrowserRouter, Route, Routes, ScrollRestoration } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { About } from '../pages/about/About';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* <ScrollRestoration /> */}
            <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='/home' element ={<Home/>}/>
                <Route path='/about' element ={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}
