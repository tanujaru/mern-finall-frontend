import { getTours } from "./services/Tours-api"
import{useState, useEffect} from 'react'
import Create from "./CreateTour"
import { Link } from "react-router-dom"
import imag3 from "./Images/imag3.jpg"
import imag4 from "./Images/imag4.jpg"
import imag1 from "./Images/imag1.jpg"
import imag5 from "./Images/imag5.jpg"

export default function Tours() {
    const [Tours, setTours] = useState([])
    useEffect(() => {
        getTours() // calling the function to get the data
        .then(res => setTours(res.data)) // setting state with returned data
    }, [])
    console.log(Tours)
    return(
        <div>
            
                        <img src = {imag3}alt="image1" />
                        <img src = {imag4}alt="image2" />
                        <img src = {imag1}alt="iamge3" />
                        <img src = {imag5} alt="image4"/>

                        <p>The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking.<br/>
                        The rise of urban tourism in the United States during the late nineteenth and early twentieth centuries represented a major cultural transformation concerning urban space, leisure natural activity and as an industry. Package tours did not exist until the 1870s and 1880s, entrepreneurs of various sorts from hotel keepers and agents for railroad lines to artists and writers recognized the profit to be gained from the prospering tourism industry.[4] The rise of locomotive steam-powered trains during the 1800s enabled tourists to travel more easily and quickly.</p>     
                        
                         <ul>

            {Tours.map((Tour) =>{
                return (
                    <div>
                           <hr/>                     

                        
                    <Link to={`/${Tour._id}`}><h2>{Tour.name}</h2>{Tour.about}<br/>{Tour.state}<br/>{Tour.country} </Link>
                    </div>
                    // <li><a href={`/${Tour._id}`}>{Tour.name}</a></li>
                )
            })}
          </ul>
          <Create />  
        </div>
    )
}