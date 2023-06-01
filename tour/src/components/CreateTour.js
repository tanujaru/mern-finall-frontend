import { useNavigate } from "react-router-dom"
import {createTour} from './services/Tours-api'

function Create() {
    const nav = useNavigate()

    const createTheTour = (e) => {
        const Tour = {name: e.target.name.value,about: e.target.about.value,state: e.target.state.value, 
            country: e.target.country.value,category:e.target.category.value}
        

        createTour(Tour).then(() => nav('/'))
        
    }

return(
    <div>
        <h4>Create a Tour</h4>
        <form onSubmit={createTheTour}>
           Name:<input type='text' name='name' id='dsc'/>
           About:<input type='text' name='about' id='dsc1'/>
           State:<input type='text' name='state' id='dsc2'/>
            Country:<input type='text' name='country' id='dsc3'/>
            Category:<input type='text' name='category' id='dsc3'/>
            

            

            <input type='submit'/>
        </form>
    </div>
)
}

export default Create

// const placeData = [
//     { name: ' San Diago ', about: " very good Destination to go", state: "CA", country: "Usa", category: " Beach", Like: true, image: "image" },
//     { name: ' DisneyLand ', about: " very good place for Kids ", state: "CA", country: "Usa", category: " Amusment park", Like: true, image: "image2" },
// ]
