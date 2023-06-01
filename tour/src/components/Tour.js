import { useState, useEffect } from "react"
import { getTour, deleteTour } from "./services/Tours-api"
import {useParams, useNavigate} from 'react-router-dom'
import imag2 from "./Images/imag2.jpg"
import imag4 from "./Images/imag4.jpg"



export default function Tour() {
    const nav = useNavigate() // setting up our return to main page
    const {id} = useParams() // destructuring the id parameter for use
    const [Tour, setTour] = useState({}) // setting up our state
    useEffect(() => {
        getTour(id) //getting the one Tour from the api using the id
        .then(res => setTour(res.data))}, [])

    const deleteTheTour = () => {
       deleteTour(id) // delete function goes here



        nav('/') // navigate back to the main screen
    }

    return(
        <div>
            <img src = {imag2}alt="image6" />      

            <h1>Tourism Tracker</h1>
            <p>The United States of America (USA) is probably one of the world's most attractive countries, and multiple factors have increased its popularity among tourists. Its Natural wonders, artificial marvels, national parks, theme parks, etc., have made it a popular name for tourism.
            The Travel Texas Research program area directs a comprehensive research effort to provide primary data on travel industry research topics including domestic and international travel, economic impacts of travel and tourism, and hotel performance, among many others.</p>            
            <h3>{Tour.name}{Tour.about}{Tour.state}{Tour.country}{Tour.category}</h3>
            
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheTour}>Delete</button> 
            <button onClick={() => {nav('/')}}>Main</button> 
            <img src = {imag4} />      

        </div>
    )
}
