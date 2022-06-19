import axios from "axios"



const fetchData = async (inputUrl, options)=> {

    const exerciseOptions = {
        method: 'GET',
        url: inputUrl,
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }

    const youtubeOptions = {
        method: 'GET',
        url: inputUrl,
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };


    options === "exerciseOptions" ? options = exerciseOptions : options = youtubeOptions

    
    let fetchedData
    await axios.request(options).then((res) => {
        fetchedData = res.data
    }).catch(err => {
        console.log(err)
    })
    return fetchedData
}

export {fetchData}