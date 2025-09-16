import { BrowserRouter, Routes, Route } from "react-router"

import DefaultLayout from "../../layouts/DefaultLayout"
import Home from '../../pages/Home'
import Counter from '../../pages/Counter'
import Todo from '../../pages/Todo'
import Profile from '../../pages/Profile'
import Comments from '../../pages/Comments'
import Products from '../../pages/Products'
import Weather from '../../pages/Weather'
import Buttons from '../../pages/Buttons'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="todo" element={<Todo />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="comments" element={<Comments />} />
                    <Route path="products" element={<Products />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="buttons" element={<Buttons />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes