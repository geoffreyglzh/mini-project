import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Friends from './pages/friends';
import Help from './pages/help';
import Home from './pages/home';

function Content() {
    return ( 
        <div>
            <div>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/friends' element={<Friends></Friends>}></Route>
                    <Route path='/help' element={<Help></Help>}></Route>
                </Routes>
            </div>
        </div>
     );
}

export default Content;