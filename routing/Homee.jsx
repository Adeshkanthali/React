import React from 'react'
import {useNavigate} from 'react-router-dom'

function Homee(){

    const navigate = useNavigate()

    const message = "React Routing Adesh...!!!"

    const passData=()=>{
        navigate(`/services/${message}`)

    }

    return(
        <div>
            <h2>Home</h2>
            
            <h1>This is a Home Page....</h1>

            <button type='button' onClick={passData}>Go to Services</button>

        </div>
    )
}
export default Homee
