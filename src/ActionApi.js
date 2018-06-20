import axios from 'axios'
const BaseUrl = 'http://localhost:59341/api/Values/'

export function getPosts() {
    console.log("fetching data from api....")
  return(
    axios.get(BaseUrl)
        .then(function (response) {return response.data}
        )
        .catch(function (error) {
            return error
        }))

}

