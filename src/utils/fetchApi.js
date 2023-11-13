import axios from "axios";



const basicUrl='https://youtube-v31.p.rapidapi.com'
const options = {
  url:basicUrl,
  params: {
    // part: 'snippet',
    // videoId: 'M7FIvfx5J10'
    maxResults:'50' 
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI= async(url) =>{
    const {data}= await axios.get(`${basicUrl}/${url}`, options)

    return data
}