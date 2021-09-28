import axios from 'axios';


const baseUrl = "https://api.yelp.com/v3/events/search"


function handleYelp(term, location){
    const config = {
        headers:{
            'Authorization': `Bearer ${W3XrLQLB5lrKMpr5_-Lyay9fw85wCydkX7o7sVp84O7rhz2okYwIiZmMJOAAXMEFh0sK3oMynliervidcad24Zn7y9ldmOjDMn4qhp6GjSpVim4VXsJ2Ssvqbh1OYXYx}`
        },
        params:{
            term: term,
            location: location
        }
    }
    return axios.get(`${baseUrl}`, config)
}

export{
    handleYelp
}