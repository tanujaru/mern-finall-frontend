// All of our endpoints
import axios from 'axios'
const baseURL = ' https://mern-backend-2byb.onrender.com/place'
// const baseURL = 'http://localhost:3000/place'
// Show all

export const getTours = () => {
    const URL = baseURL // our base url
    const response = axios.get(URL) // using axios's get functionality to grab our Tours
    return response
}
// Show one
export const getTour = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
// Edit the Tour
export const editTour = (id, updatedTour) => {
const URL = `${baseURL}/${id}`
const response = axios.put(URL, updatedTour)
return response
}
// Create the Tour
export const createTour = (Tour) => {
    const URL = baseURL
    const response = axios.post(URL, Tour)
    return response
}
// Delete the Tour
export const deleteTour = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}