import { Route, Routes, useParams } from 'react-router-dom';
import { Andrew } from './pages/Andrew';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Tobey } from './pages/Tobey';
import { Tom } from './pages/Tom';
import { Video } from './video/[slug]'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tobey' element={<Tobey />} />
            <Route path='/andrew' element={<Andrew />} />
            <Route path='/tom' element={<Tom />} />
            <Route path='/movies' element={<Movies />} />
            <Route path="/video/:slug" element={<Video />} />
        </Routes>
    );
}