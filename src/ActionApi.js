import axios from 'axios'
//const BaseUrl = 'http://localhost:59341/api/Values/'

export function getPosts() {
    console.log("fetching data from api....")
  return(
    axios.get("https://hn.algolia.com/api/v1/search?query=")
        .then(function (response) {return response.data}
        )
        .catch(function (error) {
            return error
        }))

}

