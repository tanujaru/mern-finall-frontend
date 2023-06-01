import { getTour, editTour } from "./services/Tours-api"
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function EditTour(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getTour(id) // getting the Tour that matches this id
        .then(res => setData(res.data))
    }, [])

    const editTheTour = e => {
        e.preventDefault()
        
        const updatedTour = {name: e.target.name.value,about: e.target.about.value,state: e.target.state.value, 
            country: e.target.country.value,category:e.target.category.value}

        editTour(id, updatedTour)
        nav(`/${id}`)
    }
  return (
    <div>
        <form onSubmit={editTheTour}>
            Name Of the Place:<input type='text' name='name' defaultValue={data.name}/>
            About:<input type='text' name='about' defaultValue={data.about}/>

            State:<input type='text' name='state' defaultValue={data.state}/>

            Country:<input type='text' name='country' defaultValue={data.country}/>
            Category:<input type='text' name='category' defaultValue={data.category}/>
            <input type='submit' value="add tour"/> 
                        <button onClick={() => {nav('/')}}>Main</button> 

        </form>
    </div>
  )

  }



  
