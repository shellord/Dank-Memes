import {API_URL} from '../config/config'

const getMeme = async (subreddit:string) => {
    // let res = await fetch(`${API_URL}/${subreddit}/20`)
    let res = await fetch(`${API_URL}/20`)
    let data = await res.json()
    return data.memes
}

export default getMeme