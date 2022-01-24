import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Outdoor from './components/Outdoor'
import Artistas from './pages/Artistas'
import Home from './pages/Home'

export default function AppRoutes() {
    return (
        <>
            <Outdoor />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artistas" element={<Artistas />} />
            </Routes>
        </>
    )
}