import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { About } from '../pages/about/About';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='/home' element ={<Home/>}/>
                <Route path='/about' element ={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}
