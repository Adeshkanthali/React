import React from 'react'

import Homee from './Homee'
import Aboutt from './Aboutt'
import Servicess from './Servicess'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Link } from 'react-router-dom'

function Routing(){
    return(
        <div>
            <BrowserRouter>
            
            <ul>
                <li><Link to="/homee">Homee</Link></li>
                <li><Link to="/aboutt">Aboutt</Link></li>
                <li><Link to="/servicess">Servicess</Link></li>
            </ul>

            <Routes>
                <Route path="/homee" element={<Homee/>} />
                <Route path="/aboutt" element={<Aboutt/>} />
                <Route path="/servicess/:message" element={<Servicess/>}/>
            </Routes>

            </BrowserRouter>
        </div>
    )
}
export default Routing