import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { MovieView } from '../Pages/MovieView';
import { Profile } from '../Pages/Profile';
import { NewMovieNote } from '../Pages/NewMovieNote';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/newmovie" element={<NewMovieNote/>}/>
            <Route path="/movieview/:id" element={<MovieView/>}/>
        </Routes>
    )
}