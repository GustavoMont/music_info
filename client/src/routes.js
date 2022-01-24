import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Outdoor from './components/Outdoor'
import Adicionar from './pages/Adicionar'
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
                <Route path="/adicionar" element={<Adicionar />} />
            </Routes>
        </>
    )
}