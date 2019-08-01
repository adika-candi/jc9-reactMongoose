import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://jc9mongo.herokuapp.com/'
    }
)